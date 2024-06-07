import { emojiBlast } from "emoji-blast";

export const name = "Lots of Emojis";

export const blurb =
	"emojiBlast with a random number of emojis per blast between 100-200.";

export const codeSnippet = `emojiBlast({
    emojiCount: () => Math.random() * 100 + 100,
});
`;

export const explosionFunction = () => {
	emojiBlast({
		emojiCount: () => Math.random() * 100 + 100,
	});
};
