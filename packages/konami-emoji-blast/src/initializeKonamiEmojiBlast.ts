import { emojiBlasts, EmojiBlastsHandler } from "emoji-blast";

// https://github.com/JoshuaKGoldberg/emoji-blast/issues/822#issuecomment-2532742672
// @ts-expect-error -- Working around CJS/ESM default interop
import * as KonamiCodeJS from "konami-code-js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const KonamiCode: typeof import("konami-code-js") =
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
	(KonamiCodeJS as any).default ?? KonamiCodeJS;

/**
 * @returns Function that stops emojis when called.
 */
export const initializeKonamiEmojiBlast = (onActivate?: () => void) => {
	let explosions: EmojiBlastsHandler | undefined;

	const konamiCode = new KonamiCode(() => {
		if (explosions) {
			explosions.cancel();
			explosions = undefined;
		} else {
			explosions = emojiBlasts();
			onActivate?.();
		}
	});

	return () => {
		explosions?.cancel();
		konamiCode.disable();
	};
};
