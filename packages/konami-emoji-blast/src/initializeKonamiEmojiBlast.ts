import { EmojiBlastsHandler, emojiBlasts } from "emoji-blast";
import KonamiCode from "konami-code-js";

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
