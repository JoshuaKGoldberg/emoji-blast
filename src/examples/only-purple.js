import { emojisplosion } from "emojisplosion";

export const name = "Only Purple";

export const blurb = "Emojisplosion with only purple emojis";

export const codeSnippet = `emojisplosion({
    emojisplosion({
        emojis: ["😈", "👿", "👾", "🧞", "🕺", "🌂", "🦄", "🍆", "🔮", "💜", "💟", "🚺", "🟣", "🟪"],
    });
});`

export const handleClick = () => {
    emojisplosion({
        emojis: ["😈", "👿", "👾", "🧞", "🕺", "🌂", "🦄", "🍆", "🔮", "💜", "💟", "🚺", "🟣", "🟪"],
    });
};