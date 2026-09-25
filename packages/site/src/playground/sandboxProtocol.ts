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
	const readMessage = (data: unknown): object | undefined => {
		if (typeof data !== "object" || data === null) {
			return undefined;
		}

		if (!("source" in data) || data.source !== MESSAGE_SOURCE) {
			return undefined;
		}

		return "nonce" in data &&
			typeof data.nonce === "string" &&
			data.nonce === nonce
			? data
			: undefined;
	};

	const sendMessage = (
		target: Window,
		message: ParentMessage | SandboxMessage,
	) => {
		// frame's origin is opaque, so target must be "*"
		target.postMessage({ ...message, nonce, source: MESSAGE_SOURCE }, "*");
	};

	const readParentMessage = (data: unknown): ParentMessage | undefined => {
		const message = readMessage(data);

		if (!message || !("codeSnippet" in message)) {
			return undefined;
		}

		if (typeof message.codeSnippet !== "string") {
			return undefined;
		}

		return { codeSnippet: message.codeSnippet };
	};

	const readSandboxMessage = (data: unknown): SandboxMessage | undefined => {
		const message = readMessage(data);

		if (!message || !("error" in message)) {
			return undefined;
		}

		return message.error === undefined || typeof message.error === "string"
			? { error: message.error }
			: undefined;
	};

	return {
		read: {
			parent: readParentMessage,
			sandbox: readSandboxMessage,
		},
		send: sendMessage,
	};
};
