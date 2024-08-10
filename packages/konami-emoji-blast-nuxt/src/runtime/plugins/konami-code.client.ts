import { defineNuxtPlugin } from "#app";

import { useEmojiBlastKonamiCode } from "../composables/konami";

export default defineNuxtPlugin(() => {
	useEmojiBlastKonamiCode();
});
