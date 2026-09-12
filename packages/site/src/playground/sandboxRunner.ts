/** Playground iframe's runtime; bundled by `?iife` and inlined into frame's srcdoc */
import * as emojiBlast from "emoji-blast";
import { transform } from "sucrase";

import { readParentMessage, sendMessage } from "./sandboxProtocol";

const postRan = (error: string | undefined) => {
	sendMessage(parent, { error });
};

const toErrorMessage = (error: unknown) =>
	error instanceof Error
		? error.message
		: typeof error === "string"
			? error
			: "Unknown error";

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
	const executeCodeSnippet = new Function("require", transpiledCodeSnippet) as (
		require: typeof requireModule,
	) => void;

	executeCodeSnippet(requireModule);
};

window.addEventListener("message", (event: MessageEvent<unknown>) => {
	if (event.source !== parent) {
		return;
	}

	const message = readParentMessage(event.data);

	if (message) {
		try {
			runCodeSnippet(message.codeSnippet);
			postRan(undefined);
		} catch (error) {
			postRan(toErrorMessage(error));
		}
	}
});

// Errors the snippet throws later, such as from timers or emoji-blast callbacks
window.addEventListener("error", (event) => {
	postRan(event.message);
});

window.addEventListener("unhandledrejection", (event) => {
	postRan(toErrorMessage(event.reason));
});
