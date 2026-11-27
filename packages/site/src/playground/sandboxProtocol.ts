/** Message tag for channel */
export const MESSAGE_SOURCE = "emoji-blast-playground";

/** Message parent sends to frame to run a snippet. */
export interface ParentCodeSnippetMessage {
	/** Raw editor contents */
	codeSnippet: string;
}

/** Pointer event types the parent forwards to the frame. */
export const parentPointerEventTypes = [
	"pointerdown",
	"pointermove",
	"pointerup",
] as const;

/** Type of a pointer event the parent forwards to the frame. */
export type ParentPointerEventType = (typeof parentPointerEventTypes)[number];

/** Whether value is a pointer event type the parent forwards to the frame. */
export const isParentPointerEventType = (
	value: unknown,
): value is ParentPointerEventType =>
	parentPointerEventTypes.includes(value as ParentPointerEventType);

/** Message parent sends to frame to replay a pointer event on the page. */
export interface ParentPointerEventMessage {
	clientX: number;
	clientY: number;
	type: ParentPointerEventType;
}

/** Message parent sends to frame. */
export type ParentMessage =
	| ParentCodeSnippetMessage
	| ParentPointerEventMessage;

/** Message frame sends to parent after running a snippet. */
export interface SandboxRanMessage {
	/** What the snippet threw, or undefined if it ran without throwing. */
	error: string | undefined;
}

/** Message frame sends to parent when a navigation is replacing it. */
export interface SandboxNavigatedAwayMessage {
	navigatedAway: true;
}

/** Cursors the parent shows for what's under the pointer in the frame. */
const sandboxCursors = ["grab", "grabbing"] as const;

/** Cursor the parent shows for what's under the pointer in the frame. */
export type SandboxCursor = (typeof sandboxCursors)[number];

/** Whether value is a cursor the parent can show for the frame. */
export const isSandboxCursor = (value: unknown): value is SandboxCursor =>
	sandboxCursors.includes(value as SandboxCursor);

/** Message frame sends to parent when the cursor under the pointer changes. */
export interface SandboxCursorMessage {
	/** Cursor to show, or undefined to leave the parent page's own. */
	cursor: SandboxCursor | undefined;
}

/** Message frame sends to parent. */
export type SandboxMessage =
	| SandboxCursorMessage
	| SandboxNavigatedAwayMessage
	| SandboxRanMessage;

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

		if (!message) {
			return undefined;
		}

		if ("codeSnippet" in message && typeof message.codeSnippet === "string") {
			return { codeSnippet: message.codeSnippet };
		}

		if (
			"type" in message &&
			isParentPointerEventType(message.type) &&
			"clientX" in message &&
			typeof message.clientX === "number" &&
			"clientY" in message &&
			typeof message.clientY === "number"
		) {
			return {
				clientX: message.clientX,
				clientY: message.clientY,
				type: message.type,
			};
		}

		return undefined;
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

		if ("cursor" in message) {
			return message.cursor === undefined || isSandboxCursor(message.cursor)
				? { cursor: message.cursor }
				: undefined;
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
