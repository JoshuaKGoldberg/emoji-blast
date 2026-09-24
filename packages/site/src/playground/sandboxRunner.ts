import * as emojiBlast from "emoji-blast";
import { transform } from "sucrase";

import { createSandboxChannel } from "./sandboxProtocol";

export const createSandboxRunner = (nonce: string) => {
	const channel = createSandboxChannel(nonce);

	const postRan = (error: string | undefined) => {
		channel.send(parent, { error });
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

	const toEventErrorMessage = (event: Event) =>
		event instanceof ErrorEvent && event.message
			? event.message
			: "Unknown error";

	window.addEventListener("error", (event) => {
		const errorMessage = toEventErrorMessage(event);
		if (running) {
			errorReported = toEventErrorMessage(event);
			return;
		}
		postRan(errorMessage);
	});

	window.addEventListener("unhandledrejection", (event) => {
		postRan(toErrorMessage(event.reason));
	});
};
