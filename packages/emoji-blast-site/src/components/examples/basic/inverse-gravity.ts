import { emojiBlast } from "emoji-blast";

export const name = "Inverse Gravity";

export const blurb = "emojiBlast with inverted gravity.";

export const codeSnippet = `
emojiBlast({
    physics: {
        gravity: -0.35,
        initialVelocities: {
            y: {min: 11.7, max: 14},
        },
    },
});
`;

export const explosionFunction = () => {
	console.log("chris josh test");
	emojiBlast({
		physics: {
			gravity: -0.35,
			initialVelocities: {
				y: { max: 14, min: 11.7 },
			},
		},
	});
};
