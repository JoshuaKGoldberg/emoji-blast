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

export const createSandboxChannel = (nonce: string) => {
	const NONCE_FIELD = "nonce";

	const readMessage = (data: unknown): object | undefined => {
		if (typeof data !== "object" || data === null) {
			return undefined;
		}

		if (!(NONCE_FIELD in data) || data.nonce !== nonce) {
			throw new Error("Missing or bad nonce");
		}

		return "source" in data && data.source === MESSAGE_SOURCE
			? data
			: undefined;
	};

	const sendMessage = (
		target: Window,
		message: ParentMessage | SandboxMessage,
	) => {
		// frame's origin is opaque, so target must be "*"
		target.postMessage(
			{ ...message, [NONCE_FIELD]: nonce, source: MESSAGE_SOURCE },
			"*",
		);
	};

	const readParentMessage = (data: unknown) =>
		readMessage(data) as ParentMessage | undefined;

	const readSandboxMessage = (data: unknown) =>
		readMessage(data) as SandboxMessage | undefined;

	return {
		read: {
			parent: readParentMessage,
			sandbox: readSandboxMessage,
		},
		send: sendMessage,
	};
};
