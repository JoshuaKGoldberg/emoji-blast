import { initializeKonamiEmojiBlast } from "../initializeKonamiEmojiBlast.js";

declare const window: Window & {
	initializeKonamiEmojiBlast: typeof initializeKonamiEmojiBlast;
};

window.initializeKonamiEmojiBlast = initializeKonamiEmojiBlast;
