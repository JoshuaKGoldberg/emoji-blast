import { describe, expect, it, vi } from "vitest";

import { createSandboxChannel, MESSAGE_SOURCE } from "./sandboxProtocol";

const nonce = "test-nonce";
const channel = createSandboxChannel(nonce);

const createTarget = () => {
	const postMessage = vi.fn();

	return { postMessage, target: { postMessage } as unknown as Window };
};

describe("createSandboxChannel", () => {
	describe("read.parent", () => {
		it("returns the code snippet from data tagged with the channel's source", () => {
			expect(
				channel.read.parent({
					codeSnippet: "emojiBlast();",
					extra: true,
					source: MESSAGE_SOURCE,
				}),
			).toEqual({ codeSnippet: "emojiBlast();" });
		});

		it.each([undefined, null, MESSAGE_SOURCE, 123])(
			"returns undefined for non-object data: %s",
			(data) => {
				expect(channel.read.parent(data)).toBeUndefined();
			},
		);

		it.each([
			{ codeSnippet: "emojiBlast();" },
			{ codeSnippet: "emojiBlast();", source: "another-channel" },
		])(
			"returns undefined for data not tagged with the channel's source: %o",
			(data) => {
				expect(channel.read.parent(data)).toBeUndefined();
			},
		);

		it.each([
			{ source: MESSAGE_SOURCE },
			{ codeSnippet: 123, source: MESSAGE_SOURCE },
		])(
			"returns undefined for data without a string code snippet: %o",
			(data) => {
				expect(channel.read.parent(data)).toBeUndefined();
			},
		);

		it("returns the pointer event from data tagged with the channel's source", () => {
			expect(
				channel.read.parent({
					clientX: 12,
					clientY: 34,
					extra: true,
					source: MESSAGE_SOURCE,
					type: "pointermove",
				}),
			).toEqual({ clientX: 12, clientY: 34, type: "pointermove" });
		});

		it.each([
			{ clientX: 12, clientY: 34 },
			{ clientX: 12, clientY: 34, type: 123 },
			{ clientY: 34, type: "pointermove" },
			{ clientX: "12", clientY: 34, type: "pointermove" },
			{ clientX: 12, type: "pointermove" },
			{ clientX: 12, clientY: "34", type: "pointermove" },
		])("returns undefined for malformed pointer events: %o", (data) => {
			expect(
				channel.read.parent({ ...data, source: MESSAGE_SOURCE }),
			).toBeUndefined();
		});

		it("returns undefined for pointer events not tagged with the channel's source", () => {
			expect(
				channel.read.parent({ clientX: 12, clientY: 34, type: "pointermove" }),
			).toBeUndefined();
		});
	});

	describe("read.sandbox", () => {
		it.each([undefined, "boom"])(
			"returns the error from data with the channel's nonce: %s",
			(error) => {
				expect(
					channel.read.sandbox({ error, nonce, source: MESSAGE_SOURCE }),
				).toEqual({ error });
			},
		);

		it("returns navigated away messages with the channel's nonce", () => {
			expect(
				channel.read.sandbox({
					navigatedAway: true,
					nonce,
					source: MESSAGE_SOURCE,
				}),
			).toEqual({ navigatedAway: true });
		});

		it.each(["grab", "grabbing", undefined])(
			"returns cursor messages with the channel's nonce: %s",
			(cursor) => {
				expect(
					channel.read.sandbox({ cursor, nonce, source: MESSAGE_SOURCE }),
				).toEqual({ cursor });
			},
		);

		it.each(["pointer", "", null, 123])(
			"returns undefined for cursor messages with an unknown cursor: %s",
			(cursor) => {
				expect(
					channel.read.sandbox({
						cursor,
						error: "boom",
						nonce,
						source: MESSAGE_SOURCE,
					}),
				).toBeUndefined();
			},
		);

		it("returns undefined for cursor messages without the channel's nonce", () => {
			expect(
				channel.read.sandbox({
					cursor: "grab",
					nonce: "another-nonce",
					source: MESSAGE_SOURCE,
				}),
			).toBeUndefined();
		});

		it.each([undefined, null, MESSAGE_SOURCE, 123])(
			"returns undefined for non-object data: %s",
			(data) => {
				expect(channel.read.sandbox(data)).toBeUndefined();
			},
		);

		it.each([
			{ error: "boom", nonce },
			{ error: "boom", nonce, source: "another-channel" },
		])(
			"returns undefined for data not tagged with the channel's source: %o",
			(data) => {
				expect(channel.read.sandbox(data)).toBeUndefined();
			},
		);

		it.each([
			{ error: "boom", source: MESSAGE_SOURCE },
			{ error: "boom", nonce: 123, source: MESSAGE_SOURCE },
			{ error: "boom", nonce: "another-nonce", source: MESSAGE_SOURCE },
		])("returns undefined for data without the channel's nonce: %o", (data) => {
			expect(channel.read.sandbox(data)).toBeUndefined();
		});

		it.each([
			{ nonce, source: MESSAGE_SOURCE },
			{ error: 123, nonce, source: MESSAGE_SOURCE },
			{ navigatedAway: "yes", nonce, source: MESSAGE_SOURCE },
		])("returns undefined for malformed messages: %o", (data) => {
			expect(channel.read.sandbox(data)).toBeUndefined();
		});
	});

	describe("send.parent", () => {
		it("posts the message tagged with the channel's source, without the nonce, to any origin", () => {
			const { postMessage, target } = createTarget();

			channel.send.parent(target, { codeSnippet: "emojiBlast();" });

			expect(postMessage).toHaveBeenCalledExactlyOnceWith(
				{ codeSnippet: "emojiBlast();", source: MESSAGE_SOURCE },
				"*",
			);
		});

		it("posts pointer events tagged with the channel's source", () => {
			const { postMessage, target } = createTarget();

			channel.send.parent(target, {
				clientX: 12,
				clientY: 34,
				type: "pointerdown",
			});

			expect(postMessage).toHaveBeenCalledExactlyOnceWith(
				{
					clientX: 12,
					clientY: 34,
					source: MESSAGE_SOURCE,
					type: "pointerdown",
				},
				"*",
			);
		});
	});

	describe("send.sandbox", () => {
		it("posts the message tagged with the channel's source and nonce to any origin", () => {
			const { postMessage, target } = createTarget();

			channel.send.sandbox(target, { error: "boom" });

			expect(postMessage).toHaveBeenCalledExactlyOnceWith(
				{ error: "boom", nonce, source: MESSAGE_SOURCE },
				"*",
			);
		});

		it("sends messages only a channel with the same nonce can read", () => {
			const { postMessage, target } = createTarget();

			channel.send.sandbox(target, { error: "boom" });

			const [[data]] = postMessage.mock.calls as [[unknown]];

			expect(createSandboxChannel(nonce).read.sandbox(data)).toEqual({
				error: "boom",
			});
			expect(
				createSandboxChannel("another-nonce").read.sandbox(data),
			).toBeUndefined();
		});
	});
});
