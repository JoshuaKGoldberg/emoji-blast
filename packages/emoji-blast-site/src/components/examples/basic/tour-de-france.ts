import { emojiBlast } from "emoji-blast";

export const name = "Tour de France";

export const blurb =
	"emojiBlast with three biker emojis racing across the page. Only the x value for the initialVelocity property is set.";

export const codeSnippet = `// using the explosion container to base the initial explosion positions around
const containerWidth = document.getElementById("explosion-container")!.offsetWidth;
const containerHeight = document.getElementById("explosion-container")!.offsetHeight;

emojiBlast({
    emojis: ["🚴‍♀️", "🚴", "🚴‍♂️"],
    emojiCount: 3,
    position: {
        x: containerWidth,
        y: Math.floor(containerHeight / 2) + 100,
    },
    physics: {
        fontSize: 68,
        gravity: 0,
        initialVelocities: {
            rotation: 0,
            x: {min: -20, max: -35},
            y: 0,
        },
        rotation: 0,
        rotationDeceleration: 0,
    }
});
`;

export const explosionFunction = () => {
	// using the explosion container to base the initial explosion positions around
	const containerWidth = document.getElementById(
		"explosion-container",
	)!.offsetWidth;
	const containerHeight = document.getElementById(
		"explosion-container",
	)!.offsetHeight;

	emojiBlast({
		emojiCount: 3,
		emojis: ["🚴‍♀️", "🚴", "🚴‍♂️"],
		physics: {
			fontSize: 68,
			gravity: 0,
			initialVelocities: {
				rotation: 0,
				x: { max: -35, min: -20 },
				y: 0,
			},
			rotation: 0,
			rotationDeceleration: 0,
		},
		position: {
			x: containerWidth,
			y: Math.floor(containerHeight / 2) + 100,
		},
	});
};
