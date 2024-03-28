import { emojiBlasts } from "../emojiBlasts";

emojiBlasts({
	emojiCount: () => Math.random() * 20 + 20,
	emojis: ["💖", "💕", "💗", "💓", "💝"],
	physics: {
		fontSize: {
			max: 54,
			min: 24,
		},
	},
});
