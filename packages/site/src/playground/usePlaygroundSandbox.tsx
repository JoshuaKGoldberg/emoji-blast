import { useEffect, useEffectEvent, useRef } from "react";

import styles from "./PlaygroundSandbox.module.css";
import { sandboxDocument } from "./sandboxDocument";
import { readMessage, sendMessage } from "./sandboxProtocol";

export interface PlaygroundSandboxOptions {
	onError: (message: string) => void;
}

/**
 * Transparent full-viewport iframe for safely executing arbitrary code, and the
 * function that runs code in it.
 */
export const usePlaygroundSandbox = ({ onError }: PlaygroundSandboxOptions) => {
	const frame = useRef<HTMLIFrameElement>(null);

	const runCodeSnippet = (codeSnippet: string) => {
		const frameWindow = frame.current?.contentWindow;

		if (frameWindow) {
			sendMessage(frameWindow, { codeSnippet, type: "run" });
		}
	};

	const onMessage = useEffectEvent((event: MessageEvent<unknown>) => {
		// The frame's origin is the string "null", so identity has to come from
		// the window reference rather than from the origin.
		if (event.source !== frame.current?.contentWindow) {
			return;
		}

		const message = readMessage(event.data);

		if (message?.type === "error") {
			onError(message.message);
		}
	});

	useEffect(() => {
		window.addEventListener("message", onMessage);

		return () => {
			window.removeEventListener("message", onMessage);
		};
	}, []);

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
