import * as emojiBlast from "emoji-blast";
import { afterEach, describe, expect, it, vi } from "vitest";

import { MESSAGE_SOURCE } from "./sandboxProtocol";
import "./sandboxRunner";

// Outside a frame, jsdom's `parent` is the window itself
const postMessage = vi
	.spyOn(window, "postMessage")
	.mockImplementation(() => undefined);

const dispatchMessage = (
	data: unknown,
	source: MessageEventSource | null = window,
) => {
	window.dispatchEvent(new MessageEvent("message", { data, source }));
};

const runCodeSnippet = (codeSnippet: string) => {
	dispatchMessage({ codeSnippet, source: MESSAGE_SOURCE });
};

afterEach(() => {
	Reflect.deleteProperty(window, "snippetResult");
});

describe("sandboxRunner", () => {
	it("runs TypeScript snippets that import emoji-blast and reports no error", () => {
		runCodeSnippet(
			[
				`import { emojiBlast } from "emoji-blast";`,
				`const ran: boolean = true;`,
				`Object.assign(window, { snippetResult: { emojiBlast, ran } });`,
			].join("\n"),
		);

		expect(window).toHaveProperty("snippetResult", {
			emojiBlast: emojiBlast.emojiBlast,
			ran: true,
		});
		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{ error: undefined, source: MESSAGE_SOURCE },
			"*",
		);
	});

	it("reports errors the snippet throws while running", () => {
		runCodeSnippet(`throw new Error("boom");`);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{ error: "boom", source: MESSAGE_SOURCE },
			"*",
		);
	});

	it("reports syntax errors", () => {
		runCodeSnippet(`const = ;`);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{
				error: expect.stringContaining("Unexpected token") as string,
				source: MESSAGE_SOURCE,
			},
			"*",
		);
	});

	it("reports imports of modules other than emoji-blast", () => {
		runCodeSnippet(`import leftPad from "left-pad";\nleftPad();`);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{
				error: `Module "left-pad" not found in sandbox.`,
				source: MESSAGE_SOURCE,
			},
			"*",
		);
	});

	it("ignores messages that don't come from its parent", () => {
		dispatchMessage(
			{
				codeSnippet: `Object.assign(window, { snippetResult: true });`,
				source: MESSAGE_SOURCE,
			},
			null,
		);

		expect(window).not.toHaveProperty("snippetResult");
		expect(postMessage).not.toHaveBeenCalled();
	});

	it("ignores messages not tagged with the channel's source", () => {
		dispatchMessage({
			codeSnippet: `Object.assign(window, { snippetResult: true });`,
		});

		expect(window).not.toHaveProperty("snippetResult");
		expect(postMessage).not.toHaveBeenCalled();
	});

	it("reports errors thrown later by async code", () => {
		window.dispatchEvent(
			new ErrorEvent("error", { message: "Uncaught Error: later" }),
		);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{ error: "Uncaught Error: later", source: MESSAGE_SOURCE },
			"*",
		);
	});

	it("reports unhandled promise rejections", () => {
		// jsdom doesn't implement PromiseRejectionEvent
		window.dispatchEvent(
			Object.assign(new Event("unhandledrejection"), {
				reason: new Error("rejected"),
			}),
		);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			{ error: "rejected", source: MESSAGE_SOURCE },
			"*",
		);
	});
});
