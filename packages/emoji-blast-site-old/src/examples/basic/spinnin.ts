import { emojiBlast } from "emoji-blast";

export const name = "Spinnin";

export const blurb = "emojiBlast with very quickly spinning spiral emojis.";

export const codeSnippet = `emojiBlast({
    emojis: ["🌀"],
    physics: {
        fontSize: {min: 20, max: 38},
        gravity: 0.1,
        initialVelocities: {
            rotation: {min: -14, max: -14},
        },
        rotationDeceleration: 1.01,
    }
});
`;

export const explosionFunction = () => {
	emojiBlast({
		emojis: ["🌀"],
		physics: {
			fontSize: { max: 48, min: 20 },
			gravity: 0.1,
			initialVelocities: {
				rotation: { max: -14, min: -14 },
			},
			rotationDeceleration: 1.01,
		},
	});
};
