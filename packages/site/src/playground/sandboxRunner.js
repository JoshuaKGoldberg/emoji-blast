/** Playground iframes runtime; inlined into frame's srcdoc */
(() => {
	const MESSAGE_SOURCE = window.SANDBOX_MESSAGE_SOURCE;

	const post = (message) => {
		// parent is cross-origin
		parent.postMessage({ ...message, source: MESSAGE_SOURCE }, "*");
	};

	const postError = (error) => {
		post({
			message:
				error instanceof Error
					? error.message
					: typeof error === "string"
						? error
						: "Unknown error",
			type: "error",
		});
	};

	/**
	 * Stands in for bundler module resolution inside the frame. Snippets are
	 * transpiled by the parent with Sucrase's `imports` transform, so an
	 * `import { emojiBlast } from "emoji-blast"` arrives here as a require call.
	 */
	const require = (moduleName) => {
		if (moduleName === "emoji-blast") {
			return window.emojiBlastModule;
		}

		throw new Error(`Module "${moduleName}" not found in sandbox.`);
	};

	window.addEventListener("message", (event) => {
		if (event.source !== parent) {
			return;
		}

		const data = event.data;
		if (!data || data.source !== MESSAGE_SOURCE) {
			return;
		}

		if (data.type === "run") {
			try {
				new Function("require", data.code)(require);
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

	post({ type: "ready" });
})();
