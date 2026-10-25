import * as emojiBlast from "emoji-blast";
import { afterEach, describe, expect, it, vi } from "vitest";

import { MESSAGE_SOURCE } from "./sandboxProtocol";
import { createSandboxRunner } from "./sandboxRunner";

const nonce = "test-nonce";

// Outside a frame, jsdom's `parent` is the window itself
const postMessage = vi
	.spyOn(window, "postMessage")
	.mockImplementation(() => undefined);

createSandboxRunner(nonce);

const dispatchMessage = (
	data: unknown,
	source: MessageEventSource | null = window,
) => {
	window.dispatchEvent(new MessageEvent("message", { data, source }));
};

const runCodeSnippet = (codeSnippet: string) => {
	dispatchMessage({ codeSnippet, source: MESSAGE_SOURCE });
};

const posted = (message: object) =>
	[{ ...message, nonce, source: MESSAGE_SOURCE }, "*"] as const;

afterEach(() => {
	Reflect.deleteProperty(window, "snippetResult");
});

describe("createSandboxRunner", () => {
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
			...posted({ error: undefined }),
		);
	});

	it("reports errors the snippet throws while running", () => {
		runCodeSnippet(`throw new Error("boom");`);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({ error: "boom" }),
		);
	});

	it.each([
		[`throw "boom";`, "boom"],
		[`throw new Error("");`, "Unknown error"],
		[`throw "";`, "Unknown error"],
		[`throw 123;`, "Unknown error"],
	])("reports thrown values that aren't errors: %s", (codeSnippet, error) => {
		runCodeSnippet(codeSnippet);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(...posted({ error }));
	});

	it("reports syntax errors", () => {
		runCodeSnippet(`const = ;`);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({
				error: expect.stringContaining("Unexpected token") as string,
			}),
		);
	});

	it("reports imports of modules other than emoji-blast", () => {
		runCodeSnippet(`import leftPad from "left-pad";\nleftPad();`);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({ error: `Module "left-pad" not found in sandbox.` }),
		);
	});

	it("reports errors from error events during a run as the run's error", () => {
		runCodeSnippet(
			`window.dispatchEvent(new ErrorEvent("error", { error: new Error("during") }));`,
		);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({ error: "during" }),
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
			new ErrorEvent("error", { error: new Error("later") }),
		);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({ error: "later" }),
		);
	});

	it("falls back to the error event's message when it has no error", () => {
		window.dispatchEvent(
			new ErrorEvent("error", { message: "Uncaught Error: later" }),
		);

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({ error: "Uncaught Error: later" }),
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
			...posted({ error: "rejected" }),
		);
	});

	it("reports when the frame is navigated away", () => {
		window.dispatchEvent(new Event("pagehide"));

		expect(postMessage).toHaveBeenCalledExactlyOnceWith(
			...posted({ navigatedAway: true }),
		);
	});
});
