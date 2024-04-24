import { initializeKonamiEmojiBlast } from "../initializeKonamiEmojiBlast.js";

declare const window: {
	initializeKonamiEmojiBlast: typeof initializeKonamiEmojiBlast;
} & Window;

window.initializeKonamiEmojiBlast = initializeKonamiEmojiBlast;
