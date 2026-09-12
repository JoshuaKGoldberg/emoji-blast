import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { MESSAGE_SOURCE } from "./sandboxProtocol";
import {
	type PlaygroundSandboxOptions,
	usePlaygroundSandbox,
} from "./usePlaygroundSandbox";

vi.mock("./sandboxDocument", () => ({
	sandboxDocument: "<p>sandbox document</p>",
}));

afterEach(() => {
	cleanup();
});

interface HarnessProps extends PlaygroundSandboxOptions {
	codeSnippet?: string;
}

const Harness = ({ codeSnippet = "", onRan }: HarnessProps) => {
	const { runCodeSnippet, sandbox } = usePlaygroundSandbox({ onRan });

	return (
		<>
			<button
				onClick={() => {
					runCodeSnippet(codeSnippet);
				}}
			>
				Run
			</button>
			{sandbox}
		</>
	);
};

const getFrame = () => {
	const frame = screen.getByTitle("emoji-blast playground output");

	if (!(frame instanceof HTMLIFrameElement) || !frame.contentWindow) {
		throw new Error("Expected a mounted iframe.");
	}

	return { frame, frameWindow: frame.contentWindow };
};

const dispatchMessage = (data: unknown, source: MessageEventSource) => {
	window.dispatchEvent(new MessageEvent("message", { data, source }));
};

describe("usePlaygroundSandbox", () => {
	it("renders a scripts-only sandboxed iframe with the sandbox document", () => {
		render(<Harness onRan={vi.fn()} />);

		const { frame } = getFrame();

		expect(frame.getAttribute("sandbox")).toBe("allow-scripts");
		expect(frame.getAttribute("srcdoc")).toBe("<p>sandbox document</p>");
	});

	it("posts code snippets to the frame's window", () => {
		render(<Harness codeSnippet="emojiBlast();" onRan={vi.fn()} />);

		const { frameWindow } = getFrame();
		const postMessage = vi
			.spyOn(frameWindow, "postMessage")
			.mockImplementation(() => undefined);

		fireEvent.click(screen.getByRole("button", { name: "Run" }));

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{ codeSnippet: "emojiBlast();", source: MESSAGE_SOURCE },
			"*",
		);
	});

	it("calls onRan with results the frame sends", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frameWindow } = getFrame();

		dispatchMessage({ error: undefined, source: MESSAGE_SOURCE }, frameWindow);
		dispatchMessage({ error: "boom", source: MESSAGE_SOURCE }, frameWindow);

		expect(onRan.mock.calls).toEqual([
			[{ error: undefined }],
			[{ error: "boom" }],
		]);
	});

	it("ignores messages from windows other than the frame", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		dispatchMessage({ error: "boom", source: MESSAGE_SOURCE }, window);

		expect(onRan).not.toHaveBeenCalled();
	});

	it("ignores messages not tagged with the channel's source", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		dispatchMessage({ error: "boom" }, getFrame().frameWindow);

		expect(onRan).not.toHaveBeenCalled();
	});

	it("calls the latest onRan after rerendering", () => {
		const firstOnRan = vi.fn();
		const latestOnRan = vi.fn();
		const { rerender } = render(<Harness onRan={firstOnRan} />);

		rerender(<Harness onRan={latestOnRan} />);
		dispatchMessage(
			{ error: undefined, source: MESSAGE_SOURCE },
			getFrame().frameWindow,
		);

		expect(firstOnRan).not.toHaveBeenCalled();
		expect(latestOnRan).toHaveBeenCalledExactlyOnceWith({ error: undefined });
	});

	it("removes its message listener on unmount", () => {
		const addEventListener = vi.spyOn(window, "addEventListener");
		const removeEventListener = vi.spyOn(window, "removeEventListener");
		const { unmount } = render(<Harness onRan={vi.fn()} />);

		const listener = addEventListener.mock.calls.find(
			([type]) => type === "message",
		)?.[1];

		unmount();

		expect(listener).toBeDefined();
		expect(removeEventListener).toHaveBeenCalledWith("message", listener);
	});
});
