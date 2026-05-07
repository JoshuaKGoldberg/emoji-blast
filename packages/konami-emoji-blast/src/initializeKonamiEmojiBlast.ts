import {
	emojiBlasts,
	type EmojiBlastsHandler,
	type EmojiBlastsSettings,
} from "emoji-blast";

// https://github.com/JoshuaKGoldberg/emoji-blast/issues/822#issuecomment-2532742672
// @ts-expect-error -- Working around CJS/ESM default interop
import * as KonamiCodeJS from "konami-code-js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const KonamiCode: typeof import("konami-code-js") =
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
	(KonamiCodeJS as any).default ?? KonamiCodeJS;

export type OnKonamiCodeActivated = () => void;

/**
 * Options bag to attach custom settings and event callbacks.
 */
export interface KonamiEmojiBlastOptions {
	/**
	 * Triggered when the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) is entered and blasting has begun.
	 */
	onKonamiCodeActivated?: OnKonamiCodeActivated;

	/**
	 * Settings for the resulting emoji blasts, such as emoji choice,
	 * physics, and frequency.
	 *
	 * Proxies {@link EmojiBlastsSettings}
	 */
	emojiBlastSettings?: Partial<EmojiBlastsSettings>;
}

/**
 * Initializes the Konami code listener to trigger emoji blasts.
 * @param optionsOrOnActivated Either a callback triggered on activation,
 * or full options bag.
 * @returns A cleanup function to disable the listener and cancel active explosions.
 * @example
 * // callback
 * const stop = initializeKonamiEmojiBlast(() => console.log("Activated!"));
 *
 * // options bag
 * const stop = initializeKonamiEmojiBlast({
 * 	onKonamiCodeActivated: () => console.log("Activated!"),
 * 	emojiBlastSettings: { emojis: ["🐙", "✨"] }
 * });
 */
export const initializeKonamiEmojiBlast = (
	optionsOrOnActivated?:
		| OnKonamiCodeActivated
		| Partial<KonamiEmojiBlastOptions>,
) => {
	const { emojiBlastSettings, onKonamiCodeActivated } =
		typeof optionsOrOnActivated === "function"
			? {
					emojiBlastSettings: undefined,
					onKonamiCodeActivated: optionsOrOnActivated,
				}
			: (optionsOrOnActivated ?? {});

	let explosions: EmojiBlastsHandler | undefined;

	const konamiCode = new KonamiCode(() => {
		if (explosions) {
			explosions.cancel();
			explosions = undefined;
		} else {
			explosions = emojiBlasts(emojiBlastSettings);
			onKonamiCodeActivated?.();
		}
	});

	return () => {
		explosions?.cancel();
		konamiCode.disable();
	};
};
