import * as emojiBlast from "emoji-blast";
import { transform } from "sucrase";

import {
	createSandboxChannel,
	type ParentPointerEventType,
	type SandboxCursor,
} from "./sandboxProtocol";

const ERROR_FALLBACK = "Unknown error";

const toErrorMessage = (error: unknown) => {
	if (error instanceof Error) {
		return error.message || ERROR_FALLBACK;
	}
	if (typeof error === "string") {
		return error || ERROR_FALLBACK;
	}
	return ERROR_FALLBACK;
};

const toEventErrorMessage = (event: ErrorEvent) =>
	toErrorMessage(event.error ?? event.message);

export const createSandboxRunner = (nonce: string) => {
	const channel = createSandboxChannel(nonce);

	// captured before any snippet runs, since snippets can reassign window.parent
	const parentWindow = parent;

	const postRan = (error: string | undefined) => {
		channel.send.sandbox(parentWindow, { error });
	};

	let isPointerDown = false;
	let cursor: SandboxCursor | undefined;

	// the frame ignores pointer events, so the parent has to show its cursor
	const postCursor = (type: ParentPointerEventType, target: Element | null) => {
		let next: SandboxCursor | undefined;
		if (type === "pointerdown" && target?.tagName === "BUTTON") {
			next = "grabbing";
			isPointerDown = true;
		} else if (type === "pointermove") {
			if (isPointerDown) {
				next = "grabbing";
			} else if (target?.tagName === "BUTTON") {
				next = "grab";
			}
		} else if (type === "pointerup") {
			isPointerDown = false;
		}
		if (next !== cursor) {
			cursor = next;
			channel.send.sandbox(parentWindow, { cursor });
		}
	};

	const modules: Record<string, unknown> = {
		"emoji-blast": emojiBlast,
	};

	const requireModule = (moduleName: string) => {
		if (moduleName in modules) {
			return modules[moduleName];
		}

		throw new Error(`Module "${moduleName}" not found in sandbox.`);
	};

	const runCodeSnippet = (codeSnippet: string) => {
		// turns import statements into require calls
		const { code: transpiledCodeSnippet } = transform(codeSnippet, {
			transforms: ["typescript", "imports"],
		});

		// eslint-disable-next-line @typescript-eslint/no-implied-eval -- in iframe
		const executeCodeSnippet = new Function(
			"require",
			transpiledCodeSnippet,
		) as (require: typeof requireModule) => void;

		executeCodeSnippet(requireModule);
	};

	let errorReported: string | undefined;
	let running = false;

	window.addEventListener("message", (event: MessageEvent<unknown>) => {
		if (event.source !== parentWindow) {
			return;
		}

		const message = channel.read.parent(event.data);
		if (!message) {
			return;
		}
		if ("codeSnippet" in message) {
			try {
				errorReported = undefined;
				running = true;
				runCodeSnippet(message.codeSnippet);
				postRan(errorReported);
			} catch (error) {
				postRan(toErrorMessage(error));
			} finally {
				running = false;
			}
		} else {
			const target = document.elementFromPoint(
				message.clientX,
				message.clientY,
			);
			const event = new PointerEvent(message.type, {
				bubbles: true,
				cancelable: true,
				clientX: message.clientX,
				clientY: message.clientY,
			});
			(target ?? document).dispatchEvent(event);
			postCursor(message.type, target);
		}
	});

	window.addEventListener("error", (event) => {
		const errorMessage = toEventErrorMessage(event);
		if (running) {
			errorReported = errorMessage;
			return;
		}
		postRan(errorMessage);
	});

	window.addEventListener("unhandledrejection", (event) => {
		postRan(toErrorMessage(event.reason));
	});

	window.addEventListener("pagehide", () => {
		channel.send.sandbox(parentWindow, { navigatedAway: true });
	});
};
