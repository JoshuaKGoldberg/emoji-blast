/**
 * Tags messages as belonging to this channel, so neither side confuses them
 * with unrelated postMessage traffic.
 *
 * The frame's runner is a classic script and cannot import, so rather than
 * redeclaring this, it reads `window.SANDBOX_MESSAGE_SOURCE` — which
 * `sandboxDocument` injects from this constant.
 */
export const MESSAGE_SOURCE = "emoji-blast-playground";

/**
 * Messages the frame sends to the parent.
 */
export type SandboxMessage =
	| { message: string; type: "error" }
	| { type: "ready" };
