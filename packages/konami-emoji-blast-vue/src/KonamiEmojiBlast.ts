import { defineComponent, type PropType } from "vue";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

export interface KonamiEmojiBlastProps {
	onActivate?: () => void;
}

export const KonamiEmojiBlast = defineComponent({
	name: "KonamiEmojiBlast",
	props: {
		onActivate: {
			required: false,
			type: Function as PropType<() => void>,
		},
	},
	setup(props: KonamiEmojiBlastProps) {
		useKonamiEmojiBlast(() => props.onActivate?.());

		return () => null;
	},
});
