import { onNuxtReady } from "#app";
import { initializeKonamiEmojiBlast } from "konami-emoji-blast";
import { onScopeDispose, onUnmounted } from "vue";

export function useEmojiBlastKonamiCode() {
	if (import.meta.server) {
		return;
	}

	let unsubscribe: () => void;
	onNuxtReady(() => {
		unsubscribe = initializeKonamiEmojiBlast();
	});
	onScopeDispose(() => {
		unsubscribe();
	});
	onUnmounted(() => {
		unsubscribe();
	});
}
