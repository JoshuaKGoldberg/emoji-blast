/** Message tag for channel */
export const MESSAGE_SOURCE = "emoji-blast-playground";

/** Message parent sends to frame. */
export interface ParentMessage {
	/** Raw editor contents */
	codeSnippet: string;
}

/** Message frame sends to parent after running a snippet. */
export interface SandboxRanMessage {
	/** What the snippet threw, or undefined if it ran without throwing. */
	error: string | undefined;
}

/** Message frame sends to parent when a navigation is replacing it. */
export interface SandboxNavigatedAwayMessage {
	navigatedAway: true;
}

/** Message frame sends to parent. */
export type SandboxMessage = SandboxNavigatedAwayMessage | SandboxRanMessage;

export const createSandboxChannel = (nonce: string) => {
	const readMessage = (data: unknown): object | undefined => {
		if (typeof data !== "object" || data === null) {
			return undefined;
		}

		if (!("source" in data) || data.source !== MESSAGE_SOURCE) {
			return undefined;
		}

		return data;
	};

	// frame's origin is opaque, so target must be "*"
	const sendParentMessage = (target: Window, message: ParentMessage) => {
		// no nonce, so that snippets reading the parent's messages can't learn it
		target.postMessage({ ...message, source: MESSAGE_SOURCE }, "*");
	};

	const sendSandboxMessage = (target: Window, message: SandboxMessage) => {
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

		if (
			!message ||
			!("nonce" in message) ||
			typeof message.nonce !== "string" ||
			message.nonce !== nonce
		) {
			return undefined;
		}

		if ("navigatedAway" in message && message.navigatedAway === true) {
			return { navigatedAway: true };
		}

		if (!("error" in message)) {
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
		send: {
			parent: sendParentMessage,
			sandbox: sendSandboxMessage,
		},
	};
};
