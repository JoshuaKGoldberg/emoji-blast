/**
 * Tags messages as belonging to this channel, so neither side confuses them
 * with unrelated postMessage traffic.
 */
export const MESSAGE_SOURCE = "emoji-blast-playground";

/**
 * Messages the parent sends to the frame.
 */
export interface ParentMessage {
	/** Raw editor contents; the frame transpiles them itself. */
	code: string;
	type: "run";
}

/**
 * Messages the frame sends to the parent.
 */
export type SandboxMessage =
	| { message: string; type: "error" }
	| { type: "ready" };

type ChannelMessage = ParentMessage | SandboxMessage;

export const readMessage = (data: unknown) => {
	if (typeof data !== "object" || data === null) {
		return undefined;
	}

	const message = data as ChannelMessage & { source?: unknown };

	return message.source === MESSAGE_SOURCE ? message : undefined;
};

export const sendMessage = (target: Window, message: ChannelMessage) => {
	// The frame's opaque origin cannot be named, so "*" is the only possible target.
	target.postMessage({ ...message, source: MESSAGE_SOURCE }, "*");
};
