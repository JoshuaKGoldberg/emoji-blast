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

const run = (source: string) => {
	// The imports transform turns import statements into require calls
	const { code } = transform(source, {
		transforms: ["typescript", "imports"],
	});

	// eslint-disable-next-line @typescript-eslint/no-implied-eval -- running snippets is this frame's purpose
	const snippet = new Function("require", code) as (
		require: typeof requireModule,
	) => void;

	snippet(requireModule);
};

window.addEventListener("message", (event: MessageEvent<unknown>) => {
	if (event.source !== parent) {
		return;
	}

	const message = readMessage(event.data);

	if (message?.type === "run") {
		try {
			run(message.code);
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
