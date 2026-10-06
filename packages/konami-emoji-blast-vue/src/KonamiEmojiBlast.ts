import { type DefineComponent, defineComponent, type PropType } from "vue";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

export interface KonamiEmojiBlastProps {
	onActivate?: () => void;
}

// Keeps runtime props in sync with KonamiEmojiBlastProps,
// since the explicit DefineComponent annotation below doesn't check them
const props = {
	onActivate: {
		required: false,
		type: Function as PropType<() => void>,
	},
} satisfies {
	[K in keyof KonamiEmojiBlastProps]-?: {
		required: false;
		type: PropType<NonNullable<KonamiEmojiBlastProps[K]>>;
	};
};

// Explicitly typed so the emitted .d.ts doesn't depend on Vue 3.5's DefineComponent arity
export const KonamiEmojiBlast: DefineComponent<KonamiEmojiBlastProps> =
	defineComponent({
		name: "KonamiEmojiBlast",
		props,
		setup(props) {
			useKonamiEmojiBlast(() => props.onActivate?.());

			return () => null;
		},
	});
