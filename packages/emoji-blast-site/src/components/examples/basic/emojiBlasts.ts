import { emojiBlasts } from "emoji-blast";

export const name = "Multiple Explosions";

export const blurb =
	"Multiple emojiBlasts using setTimeout to cancel the explosions after 5 seconds.";

export const codeSnippet = `const { cancel } = emojiBlasts();
setTimeout(cancel, 5000);
`;

export const explosionFunction = () => {
	const { cancel } = emojiBlasts();
	setTimeout(cancel, 5000);
};
