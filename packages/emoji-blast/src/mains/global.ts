import { emojiBlast, emojiBlasts } from "../index";

declare const window: {
	emojiBlast: typeof emojiBlast;
	emojiBlasts: typeof emojiBlasts;
} & Window;

window.emojiBlast = emojiBlast;
window.emojiBlasts = emojiBlasts;
