import { initializeKonamiEmojiBlast } from "konami-emoji-blast";
import { useEffect } from "react";

export const useKonamiEmojiBlast = (onActivate?: () => void) => {
	useEffect(() => {
		return initializeKonamiEmojiBlast(onActivate);
	}, [onActivate]);
};
