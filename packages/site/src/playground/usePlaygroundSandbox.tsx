import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

import styles from "./PlaygroundSandbox.module.css";
import { createSandboxDocument } from "./sandboxDocument";
import {
	createSandboxChannel,
	type ParentPointerEventType,
	parentPointerEventTypes,
	type SandboxCursor,
} from "./sandboxProtocol";
import { useTimeout } from "./useTimeout";

/** How long the frame has to acknowledge a run before we reset it. */
const RUN_TIMEOUT_MS = 500;

/** Styled in playground.astro to show the cursor and block text selection. */
const setSandboxCursor = (cursor: SandboxCursor | undefined) => {
	if (cursor) {
		document.documentElement.dataset.sandboxCursor = cursor;
	} else {
		delete document.documentElement.dataset.sandboxCursor;
	}
};

/**
 * While the pointer is over (or dragging) an emoji, a press belongs to the emoji,
 * so keep the page from focusing, selecting text, or starting its own drag.
 * The frame's reply to the forwarded press arrives too late to stop these.
 */
const blockPageGrab = (event: Event) => {
	if (!document.documentElement.dataset.sandboxCursor) {
		return;
	}
	event.preventDefault();
};

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

	// a reset frame can't report that its pointer left an emoji
	useEffect(
		() => () => {
			setSandboxCursor(undefined);
		},
		[nonce],
	);

	const onPointerEvent = useEffectEvent((event: PointerEvent) => {
		const frameWindow = frame.current?.contentWindow;

		if (event.type === "pointerdown") {
			blockPageGrab(event);
		}

		if (frameWindow) {
			channel.send.parent(frameWindow, {
				clientX: event.clientX,
				clientY: event.clientY,
				type: event.type as ParentPointerEventType,
			});
		}
	});

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

		if ("cursor" in message) {
			setSandboxCursor(message.cursor);
			return;
		}

		runTimeout.clear();

		if (message.error) {
			resetSandbox(message.error);
			return;
		}

		onRan({ error: undefined });
	});

	useEffect(() => {
		window.addEventListener("message", onMessage);
		window.addEventListener("mousedown", blockPageGrab);
		for (const type of parentPointerEventTypes) {
			window.addEventListener(type, onPointerEvent);
		}

		return () => {
			window.removeEventListener("message", onMessage);
			window.removeEventListener("mousedown", blockPageGrab);
			for (const type of parentPointerEventTypes) {
				window.removeEventListener(type, onPointerEvent);
			}
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
