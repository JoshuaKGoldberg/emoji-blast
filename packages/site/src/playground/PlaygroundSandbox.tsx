import type React from "react";

import { useEffect, useImperativeHandle, useRef } from "react";

import styles from "./PlaygroundSandbox.module.css";
import { sandboxDocument } from "./sandboxDocument";
import { readMessage, sendMessage } from "./sandboxProtocol";

export interface PlaygroundSandboxHandle {
	run: (code: string) => void;
}

export interface PlaygroundSandboxProps {
	onError: (message: string) => void;
	ref?: React.Ref<PlaygroundSandboxHandle>;
}

const postCode = (frame: HTMLIFrameElement | null, code: string) => {
	if (frame?.contentWindow) {
		sendMessage(frame.contentWindow, { code, type: "run" });
	}
};

/**
 * Transparent full-viewport iframe that snippets execute inside.
 *
 * `sandbox="allow-scripts"` without `allow-same-origin` is what makes this safe:
 * the frame gets an opaque origin, so its `window`, `document`, and storage are
 * fully functional but belong to nobody. Withholding `allow-top-navigation`,
 * `allow-popups`, `allow-modals`, and `allow-forms` leaves it unable to navigate
 * the page, open windows, spam dialogs, or submit anywhere.
 */
export const PlaygroundSandbox = ({ onError, ref }: PlaygroundSandboxProps) => {
	const frameRef = useRef<HTMLIFrameElement>(null);
	const isReadyRef = useRef(false);
	const pendingCodeRef = useRef<string | undefined>(undefined);
	const onErrorRef = useRef(onError);

	useEffect(() => {
		onErrorRef.current = onError;
	}, [onError]);

	useImperativeHandle(
		ref,
		() => ({
			run: (code) => {
				// Posting before the frame's scripts have parsed would be dropped, so
				// hold the snippet until it announces itself.
				if (isReadyRef.current) {
					postCode(frameRef.current, code);
				} else {
					pendingCodeRef.current = code;
				}
			},
		}),
		[],
	);

	useEffect(() => {
		const onMessage = (event: MessageEvent<unknown>) => {
			// The frame's origin is the string "null", so identity has to come from
			// the window reference rather than from the origin.
			if (event.source !== frameRef.current?.contentWindow) {
				return;
			}

			const message = readMessage(event.data);

			switch (message?.type) {
				case "error":
					onErrorRef.current(message.message);
					break;

				case "ready":
					isReadyRef.current = true;

					if (pendingCodeRef.current !== undefined) {
						postCode(frameRef.current, pendingCodeRef.current);
						pendingCodeRef.current = undefined;
					}
					break;
			}
		};

		window.addEventListener("message", onMessage);

		return () => {
			window.removeEventListener("message", onMessage);
		};
	}, []);

	return (
		<iframe
			className={styles.sandbox}
			ref={frameRef}
			sandbox="allow-scripts"
			srcDoc={sandboxDocument}
			title="emoji-blast playground output"
		/>
	);
};
