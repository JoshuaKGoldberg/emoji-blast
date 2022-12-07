import { emojisplosions } from "../emojisplosions";

emojisplosions({
	emojiCount: () => Math.random() * 20 + 20,
	emojis: ["💖", "💕", "💗", "💓", "💝"],
	physics: {
		fontSize: {
			max: 54,
			min: 24,
		},
	},
});
