import * as emojiBlastModule from "../index";

declare const window: Window & {
	emojiBlastModule: typeof emojiBlastModule;
};

window.emojiBlastModule = emojiBlastModule;
