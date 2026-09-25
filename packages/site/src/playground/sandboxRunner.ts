import * as emojiBlast from "emoji-blast";
import { transform } from "sucrase";

import { createSandboxChannel } from "./sandboxProtocol";

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

	const postRan = (error: string | undefined) => {
		channel.send(parent, { error });
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
		if (event.source !== parent) {
			return;
		}

		const message = channel.read.parent(event.data);
		if (message) {
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
};
