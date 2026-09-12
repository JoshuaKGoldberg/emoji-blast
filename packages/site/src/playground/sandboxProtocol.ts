/** Message tag for channel */
export const MESSAGE_SOURCE = "emoji-blast-playground";

/** Message parent sends to frame. */
export interface ParentMessage {
	/** Raw editor contents */
	codeSnippet: string;
}

/** Message frame sends to parent. */
export interface SandboxMessage {
	/** What the snippet threw, or undefined if it ran without throwing. */
	error: string | undefined;
}

const readMessage = (data: unknown): object | undefined => {
	if (typeof data !== "object" || data === null) {
		return undefined;
	}

	return "source" in data && data.source === MESSAGE_SOURCE ? data : undefined;
};

export const readParentMessage = (data: unknown) =>
	readMessage(data) as ParentMessage | undefined;

export const readSandboxMessage = (data: unknown) =>
	readMessage(data) as SandboxMessage | undefined;

export const sendMessage = (
	target: Window,
	message: ParentMessage | SandboxMessage,
) => {
	// frame's origin is opaque, so target must be "*"
	target.postMessage({ ...message, source: MESSAGE_SOURCE }, "*");
};
