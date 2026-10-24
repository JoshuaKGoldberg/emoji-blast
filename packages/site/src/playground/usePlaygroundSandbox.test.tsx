import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { MESSAGE_SOURCE } from "./sandboxProtocol";
import {
	type PlaygroundSandboxOptions,
	usePlaygroundSandbox,
} from "./usePlaygroundSandbox";

vi.mock("./sandboxDocument", () => ({
	createSandboxDocument: (nonce: string) => `<p>${nonce}</p>`,
}));

const createNonce = (index: number) => `nonce-${index}-0-0-0` as const;

beforeEach(() => {
	let nonces = 0;

	vi.spyOn(crypto, "randomUUID").mockImplementation(() =>
		createNonce((nonces += 1)),
	);
});

afterEach(() => {
	cleanup();
	vi.restoreAllMocks();
	vi.useRealTimers();
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

const clickRun = () => {
	fireEvent.click(screen.getByRole("button", { name: "Run" }));
};

const dispatchMessage = (data: unknown, source: MessageEventSource) => {
	act(() => {
		window.dispatchEvent(new MessageEvent("message", { data, source }));
	});
};

const dispatchSandboxMessage = (
	message: object,
	{
		nonce = createNonce(1),
		source = getFrame().frameWindow,
	}: { nonce?: string; source?: MessageEventSource } = {},
) => {
	dispatchMessage({ ...message, nonce, source: MESSAGE_SOURCE }, source);
};

describe("usePlaygroundSandbox", () => {
	it("renders a scripts-only sandboxed iframe with the sandbox document", () => {
		render(<Harness onRan={vi.fn()} />);

		const { frame } = getFrame();

		expect(frame.getAttribute("sandbox")).toBe("allow-scripts");
		expect(frame.getAttribute("srcdoc")).toBe(`<p>${createNonce(1)}</p>`);
	});

	it("posts code snippets to the frame's window without the nonce", () => {
		render(<Harness codeSnippet="emojiBlast();" onRan={vi.fn()} />);

		const postMessage = vi
			.spyOn(getFrame().frameWindow, "postMessage")
			.mockImplementation(() => undefined);

		clickRun();

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{ codeSnippet: "emojiBlast();", source: MESSAGE_SOURCE },
			"*",
		);
	});

	it("calls onRan without an error when the frame reports success", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frame } = getFrame();

		dispatchSandboxMessage({ error: undefined });

		expect(onRan).toHaveBeenCalledExactlyOnceWith({ error: undefined });
		expect(getFrame().frame).toBe(frame);
	});

	it("calls onRan with the error and resets the frame when the frame reports an error", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frame } = getFrame();

		dispatchSandboxMessage({ error: "boom" });

		expect(onRan).toHaveBeenCalledExactlyOnceWith({ error: "boom" });
		expect(getFrame().frame).not.toBe(frame);
		expect(getFrame().frame.getAttribute("srcdoc")).toBe(
			`<p>${createNonce(2)}</p>`,
		);
	});

	it("ignores messages from the previous frame after a reset", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frameWindow: previousFrameWindow } = getFrame();

		dispatchSandboxMessage({ error: "boom" });
		onRan.mockClear();

		dispatchSandboxMessage(
			{ error: "late" },
			{ nonce: createNonce(1), source: previousFrameWindow },
		);
		dispatchSandboxMessage({ navigatedAway: true }, { nonce: createNonce(1) });

		expect(onRan).not.toHaveBeenCalled();
	});

	it("resets the frame when it reports navigating away, even from another window", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frame } = getFrame();

		dispatchSandboxMessage({ navigatedAway: true }, { source: window });

		expect(onRan).toHaveBeenCalledExactlyOnceWith({
			error: "Snippet navigated the sandbox away, so it was reset.",
		});
		expect(getFrame().frame).not.toBe(frame);
	});

	it("ignores run results from windows other than the frame", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		dispatchSandboxMessage({ error: "boom" }, { source: window });

		expect(onRan).not.toHaveBeenCalled();
	});

	it("ignores messages without the frame's nonce", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		dispatchSandboxMessage({ error: "boom" }, { nonce: "another-nonce" });

		expect(onRan).not.toHaveBeenCalled();
	});

	it("ignores messages not tagged with the channel's source", () => {
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		dispatchMessage(
			{ error: "boom", nonce: createNonce(1) },
			getFrame().frameWindow,
		);

		expect(onRan).not.toHaveBeenCalled();
	});

	it("resets the frame when a run isn't acknowledged in time", () => {
		vi.useFakeTimers();
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frame } = getFrame();
		vi.spyOn(getFrame().frameWindow, "postMessage").mockImplementation(
			() => undefined,
		);

		clickRun();
		act(() => {
			vi.advanceTimersByTime(499);
		});

		expect(onRan).not.toHaveBeenCalled();

		act(() => {
			vi.advanceTimersByTime(1);
		});

		expect(onRan).toHaveBeenCalledExactlyOnceWith({
			error: "Run timed out, so the sandbox was reset.",
		});
		expect(getFrame().frame).not.toBe(frame);
	});

	it("doesn't reset the frame once a run is acknowledged", () => {
		vi.useFakeTimers();
		const onRan = vi.fn();
		render(<Harness onRan={onRan} />);

		const { frame } = getFrame();
		vi.spyOn(getFrame().frameWindow, "postMessage").mockImplementation(
			() => undefined,
		);

		clickRun();
		dispatchSandboxMessage({ error: undefined });
		act(() => {
			vi.advanceTimersByTime(1000);
		});

		expect(onRan).toHaveBeenCalledExactlyOnceWith({ error: undefined });
		expect(getFrame().frame).toBe(frame);
	});

	it("calls the latest onRan after rerendering", () => {
		const firstOnRan = vi.fn();
		const latestOnRan = vi.fn();
		const { rerender } = render(<Harness onRan={firstOnRan} />);

		rerender(<Harness onRan={latestOnRan} />);
		dispatchSandboxMessage({ error: undefined });

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
