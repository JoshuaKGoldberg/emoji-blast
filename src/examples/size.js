import { emojisplosions } from "emojisplosion"

export const name = "Size";

export const blurb = "hi";

export const codeSnippet = `emojisplosions({
    emojiCount: () => Math.random() * 20 + 20,
    emojis: ["💖", "💕", "💗", "💓", "💝"],
    physics: {
        fontSize: {
            max: 54,
            min: 24,
        },
    },
});`

export const handleClick = () => {
    const { cancel } = emojisplosions({
        emojiCount: () => Math.random() * 20 + 20,
        emojis: ["💖", "💕", "💗", "💓", "💝"],
        physics: {
            fontSize: {
                max: 54,
                min: 24,
            },
        },
    });
    setTimeout(cancel, 10000);
}