import { defineComponent } from "vue";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

export const KonamiEmojiBlast = defineComponent({
	emits: {
		activate: () => true,
	},
	name: "KonamiEmojiBlast",
	setup(_props, { emit }) {
		useKonamiEmojiBlast(() => {
			emit("activate");
		});

		return () => null;
	},
});
