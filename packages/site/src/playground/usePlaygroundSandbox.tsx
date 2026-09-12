import { useEffect, useRef } from "react";

import styles from "./PlaygroundSandbox.module.css";
import { sandboxDocument } from "./sandboxDocument";
import { readMessage, sendMessage } from "./sandboxProtocol";

export interface PlaygroundSandboxOptions {
	onError: (message: string) => void;
}

const postCodeSnippet = (
	frame: HTMLIFrameElement | null,
	codeSnippet: string,
) => {
	if (frame?.contentWindow) {
		sendMessage(frame.contentWindow, { codeSnippet, type: "run" });
	}
};

/**
 * Transparent full-viewport iframe for safely executing arbitrary code, and the
 * function that runs code in it.
 */
export const usePlaygroundSandbox = ({ onError }: PlaygroundSandboxOptions) => {
	const frame = useRef<HTMLIFrameElement>(null);
	const isFrameReady = useRef(false);
	const pendingCodeSnippet = useRef<string | undefined>(undefined);

	const runCodeSnippet = (codeSnippet: string) => {
		// Posting before the frame's scripts have parsed would be dropped, so
		// hold the snippet until it announces itself.
		if (isFrameReady.current) {
			postCodeSnippet(frame.current, codeSnippet);
		} else {
			pendingCodeSnippet.current = codeSnippet;
		}
	};

	useEffect(() => {
		const onMessage = (event: MessageEvent<unknown>) => {
			// The frame's origin is the string "null", so identity has to come from
			// the window reference rather than from the origin.
			if (event.source !== frame.current?.contentWindow) {
				return;
			}

			const message = readMessage(event.data);

			switch (message?.type) {
				case "error":
					onError(message.message);
					break;

				case "ready":
					isFrameReady.current = true;

					if (pendingCodeSnippet.current !== undefined) {
						postCodeSnippet(frame.current, pendingCodeSnippet.current);
						pendingCodeSnippet.current = undefined;
					}
					break;
			}
		};

		window.addEventListener("message", onMessage);

		return () => {
			window.removeEventListener("message", onMessage);
		};
	}, [onError]);

	const sandbox = (
		<iframe
			className={styles.sandbox}
			ref={frame}
			sandbox="allow-scripts"
			srcDoc={sandboxDocument}
			title="emoji-blast playground output"
		/>
	);

	return { runCodeSnippet, sandbox };
};
