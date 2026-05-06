import {
	emojiBlasts,
	EmojiBlastsHandler,
	EmojiBlastsSettings,
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
export type KonamiEmojiBlastOptions = {
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
};

/**
 * @returns Function that stops emojis when called.
 */
export const initializeKonamiEmojiBlast = (
	optionsOrOnActivated?:
		| OnKonamiCodeActivated
		| Partial<KonamiEmojiBlastOptions>,
) => {
	const { onKonamiCodeActivated, emojiBlastSettings } =
		typeof optionsOrOnActivated === "function"
			? {
					onKonamiCodeActivated: optionsOrOnActivated,
					emojiBlastSettings: undefined,
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
