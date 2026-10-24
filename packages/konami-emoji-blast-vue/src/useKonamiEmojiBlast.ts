import { initializeKonamiEmojiBlast } from "konami-emoji-blast";
import { onMounted, onUnmounted } from "vue";

export const useKonamiEmojiBlast = (onActivate?: () => void) => {
	let cleanup: (() => void) | undefined;

	onMounted(() => {
		cleanup = initializeKonamiEmojiBlast(onActivate);
	});

	onUnmounted(() => {
		cleanup?.();
	});
};
