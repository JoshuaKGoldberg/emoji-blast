import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

export interface KonamiEmojiBlastProps {
	onActivate?: () => void;
}

export const KonamiEmojiBlast = ({ onActivate }: KonamiEmojiBlastProps) => {
	useKonamiEmojiBlast(onActivate);

	return null;
};
