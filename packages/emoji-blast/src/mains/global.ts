import { emojiBlast, emojiBlasts } from "../index";

declare const window: Window & {
	emojiBlast: typeof emojiBlast;
	emojiBlasts: typeof emojiBlasts;
};

window.emojiBlast = emojiBlast;
window.emojiBlasts = emojiBlasts;
