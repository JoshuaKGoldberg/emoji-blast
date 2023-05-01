import { emojisplosion } from "emojisplosion";

export const name = "Large";

export const blurb = "Emojisplosion with extra large emojis";

export const codeSnippet = `emojisplosion({
    physics: {
        fontSize: {
            max: 54,
            min: 24,
        },
    },
});`

export const handleClick = () => {
    emojisplosion({
        physics: {
            fontSize: {
                max: 74,
                min: 64,
            },
        },
    });
};