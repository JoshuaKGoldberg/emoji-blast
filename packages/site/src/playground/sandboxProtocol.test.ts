import { describe, expect, it, vi } from "vitest";

import {
	MESSAGE_SOURCE,
	readParentMessage,
	readSandboxMessage,
	sendMessage,
} from "./sandboxProtocol";

describe.each([
	["readParentMessage", readParentMessage],
	["readSandboxMessage", readSandboxMessage],
])("%s", (_, readMessage) => {
	it("returns data tagged with the channel's source", () => {
		const data = { codeSnippet: "emojiBlast();", source: MESSAGE_SOURCE };

		expect(readMessage(data)).toBe(data);
	});

	it.each([undefined, null, MESSAGE_SOURCE, 123])(
		"returns undefined for non-object data: %s",
		(data) => {
			expect(readMessage(data)).toBeUndefined();
		},
	);

	it.each([{ error: "boom" }, { error: "boom", source: "another-channel" }])(
		"returns undefined for data not tagged with the channel's source: %o",
		(data) => {
			expect(readMessage(data)).toBeUndefined();
		},
	);
});

describe("sendMessage", () => {
	it("posts the message tagged with the channel's source to any origin", () => {
		const postMessage = vi.fn();

		sendMessage({ postMessage } as unknown as Window, {
			codeSnippet: "emojiBlast();",
		});

		expect(postMessage).toHaveBeenCalledWith(
			{ codeSnippet: "emojiBlast();", source: MESSAGE_SOURCE },
			"*",
		);
	});

	it("sends messages the receiving side can read", () => {
		const postMessage = vi.fn();

		sendMessage({ postMessage } as unknown as Window, { error: "boom" });

		expect(readSandboxMessage(postMessage.mock.calls[0][0])).toEqual({
			error: "boom",
			source: MESSAGE_SOURCE,
		});
	});
});
