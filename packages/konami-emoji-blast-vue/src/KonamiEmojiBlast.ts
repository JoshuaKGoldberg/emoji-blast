import { type DefineComponent, defineComponent, type PropType } from "vue";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

export interface KonamiEmojiBlastProps {
	onActivate?: () => void;
}

// Explicitly typed so the emitted .d.ts doesn't depend on Vue 3.5's DefineComponent arity
export const KonamiEmojiBlast: DefineComponent<KonamiEmojiBlastProps> =
	defineComponent({
		name: "KonamiEmojiBlast",
		props: {
			onActivate: {
				required: false,
				type: Function as PropType<() => void>,
			},
		},
		setup(props) {
			useKonamiEmojiBlast(() => props.onActivate?.());

			return () => null;
		},
	});
