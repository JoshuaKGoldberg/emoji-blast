import { emojiBlast } from "emoji-blast";

export const name = "Only One";

export const blurb = "emojiBlast with only one type of emoji per explosion.";

export const codeSnippet = `emojiBlast({
    uniqueness: 1,
});
`;

export const explosionFunction = () => {
	emojiBlast({
		uniqueness: 1,
	});
};
