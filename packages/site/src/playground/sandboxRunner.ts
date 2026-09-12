/** Playground iframe's runtime; bundled by `?iife` and inlined into frame's srcdoc */
import * as emojiBlast from "emoji-blast";
import { transform } from "sucrase";

import { readMessage, sendMessage } from "./sandboxProtocol";

const postError = (error: unknown) => {
	sendMessage(parent, {
		message:
			error instanceof Error
				? error.message
				: typeof error === "string"
					? error
					: "Unknown error",
		type: "error",
	});
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
	const executeCodeSnippet = new Function("require", transpiledCodeSnippet) as (
		require: typeof requireModule,
	) => void;

	executeCodeSnippet(requireModule);
};

window.addEventListener("message", (event: MessageEvent<unknown>) => {
	if (event.source !== parent) {
		return;
	}

	const message = readMessage(event.data);

	if (message?.type === "run") {
		try {
			runCodeSnippet(message.codeSnippet);
		} catch (error) {
			postError(error);
		}
	}
});

window.addEventListener("error", (event) => {
	postError(event.message);
});

window.addEventListener("unhandledrejection", (event) => {
	postError(event.reason);
});

sendMessage(parent, { type: "ready" });
