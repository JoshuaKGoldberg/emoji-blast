import { emojisplosion } from "emojisplosion";

export const name = "Set Position";

export const blurb = "Emojisplosion that only happens at a set position on the page";

export const codeSnippet = `emojisplosion({
    position: {
        x: 500,
        y: 500,
    },
});`

export const handleClick = () => {
    emojisplosion({
        position: {
            x: 500,
            y: 500,
        },
    });
};