import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";

import styles from "./PlaygroundSandbox.module.css";
import { createSandboxDocument } from "./sandboxDocument";
import { createSandboxChannel } from "./sandboxProtocol";

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
	const loadedNonce = useRef<string>(undefined);

	const channel = useMemo(() => createSandboxChannel(nonce), [nonce]);

	const onFrameLoad = (frameNonce: string) => {
		if (loadedNonce.current !== frameNonce) {
			loadedNonce.current = frameNonce;
			return;
		}

		setNonce(crypto.randomUUID());
		onRan({ error: "Snippet navigated the sandbox away, so it was reset." });
	};

	const runCodeSnippet = (codeSnippet: string) => {
		const frameWindow = frame.current?.contentWindow;

		if (frameWindow) {
			channel.send(frameWindow, { codeSnippet });
		}
	};

	const onMessage = useEffectEvent((event: MessageEvent<unknown>) => {
		// The frame's origin is the string "null", so identity has to come from
		// the window reference rather than from the origin.
		if (event.source !== frame.current?.contentWindow) {
			return;
		}

		const message = channel.read.sandbox(event.data);

		if (message) {
			onRan({ error: message.error });
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
			key={nonce}
			onLoad={() => {
				onFrameLoad(nonce);
			}}
			ref={frame}
			sandbox="allow-scripts"
			srcDoc={createSandboxDocument(nonce)}
			title="emoji-blast playground output"
		/>
	);

	return { runCodeSnippet, sandbox };
};
