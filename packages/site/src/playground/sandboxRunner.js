/**
 * Runtime for the playground's sandboxed iframe.
 *
 * Inlined verbatim into the frame's srcdoc as a classic <script>, so it must be
 * self-contained: no imports, no exports, no TypeScript. It is never processed
 * by Vite beyond `?raw`, which is why eslint.config.js ignores it — the
 * type-aware rules have no project to resolve it against.
 *
 * The frame has an opaque origin, so `parent` is cross-origin from here: every
 * postMessage must use "*" as the target origin, and the parent identifies us by
 * `event.source` rather than by origin, which is the string "null".
 *
 * `window.SANDBOX_MESSAGE_SOURCE` is injected by `sandboxDocument`, which is how
 * the channel's name stays defined in exactly one place.
 */
(() => {
	const MESSAGE_SOURCE = window.SANDBOX_MESSAGE_SOURCE;

	const post = (message) => {
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
