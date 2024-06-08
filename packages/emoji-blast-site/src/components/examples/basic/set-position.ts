import { emojiBlast } from "emoji-blast";

export const name = "Set Position";

export const blurb =
	"emojiBlast that only happens at a set position on the page";

export const codeSnippet = `// using the explosion container to base the initial explosion positions around
const containerWidth = document.getElementById("explosion-container")!.offsetWidth;
const containerHeight = document.getElementById("explosion-container")!.offsetHeight;

emojiBlast({
    position: {
        x: containerWidth / 2,
        y: containerHeight / 2,
    },
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
		position: {
			x: containerWidth / 2,
			y: containerHeight / 2,
		},
	});
};
