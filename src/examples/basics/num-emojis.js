import { emojisplosion } from "emojisplosion";

export const name = "Lots of Emojis";

export const blurb = "Emojisplosion with a random number of emojis per blast between 100-200.";

export const codeSnippet = `emojisplosion({
    emojiCount: () => Math.random() * 100 + 100,
});`;

export const explosionFunct = () => {
    emojisplosion({
        emojiCount: () => Math.random() * 100 + 100,
    });
}