import { emojiBlast } from "emoji-blast";

export const name = "Large";

export const blurb = "emojiBlast with extra large emojis.";

export const codeSnippet = `emojiBlast({
    physics: {
        fontSize: {
            max: 54,
            min: 24,
        },
    },
});
`;

export const explosionFunction = () => {
	emojiBlast({
		physics: {
			fontSize: {
				max: 74,
				min: 64,
			},
		},
	});
};
