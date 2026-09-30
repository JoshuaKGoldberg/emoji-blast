import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

import styles from "./PlaygroundSandbox.module.css";
import { createSandboxDocument } from "./sandboxDocument";
import { createSandboxChannel } from "./sandboxProtocol";
import { useTimeout } from "./useTimeout";

/** How long the frame has to acknowledge a run before we reset it. */
const RUN_TIMEOUT_MS = 500;

export interface PlaygroundSandboxOptions {
	/** Called after each run, and again if snippet contains async code that throws */
	onRan: (result: { error: string | undefined }) => void;
}

/**
 * Transparent full-viewport iframe for safely executing arbitrary code, and the
 * function that runs code in it.
 */
export const usePlaygroundSandbox = ({ onRan }: PlaygroundSandboxOptions) => {
	const frame = useRef<HTMLIFrameElement>(null);

	const [nonce, setNonce] = useState(() => crypto.randomUUID());

	const channel = useMemo(() => createSandboxChannel(nonce), [nonce]);

	const resetSandbox = (error: string) => {
		// commits now, so messages from the old frame can't overwrite the error below
		flushSync(() => {
			setNonce(crypto.randomUUID());
		});
		onRan({ error });
	};

	const runTimeout = useTimeout(() => {
		resetSandbox("Run timed out, so the sandbox was reset.");
	}, RUN_TIMEOUT_MS);

	const runCodeSnippet = (codeSnippet: string) => {
		const frameWindow = frame.current?.contentWindow;

		if (frameWindow) {
			channel.send.parent(frameWindow, { codeSnippet });
			runTimeout.start();
		}
	};

	const onMessage = useEffectEvent((event: MessageEvent<unknown>) => {
		const message = channel.read.sandbox(event.data);

		if (!message) {
			return;
		}

		if ("navigatedAway" in message) {
			runTimeout.clear();
			resetSandbox("Snippet navigated the sandbox away, so it was reset.");
			return;
		}

		if (event.source !== frame.current?.contentWindow) {
			return;
		}

		runTimeout.clear();
		onRan({ error: message.error });
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
			key={nonce}
			ref={frame}
			sandbox="allow-scripts"
			srcDoc={createSandboxDocument(nonce)}
			title="emoji-blast playground output"
		/>
	);

	return { runCodeSnippet, sandbox };
};
