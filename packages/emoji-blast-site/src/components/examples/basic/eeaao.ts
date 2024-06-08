import { emojiBlasts } from "emoji-blast";

export const name = "Everything Everywhere all at Once (for 3 seconds)";

export const blurb =
	"emojiBlasts occurring randomly across the page every 40 milliseconds for 3 seconds.";

export const codeSnippet = `const { cancel } = emojiBlasts({
    interval: 40
});

setTimeout(cancel, 3000);
`;

export const explosionFunction = () => {
	const { cancel } = emojiBlasts({
		interval: 40,
	});

	setTimeout(cancel, 3000);
};

export const disableButtonTime = 6000;
// fix this to work on firefox
