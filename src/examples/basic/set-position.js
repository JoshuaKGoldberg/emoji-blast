import { emojisplosion } from "emojisplosion";

export const name = "Set Position";

export const blurb = "Emojisplosion that only happens at a set position on the page";

export const codeSnippet = `// using the explosion container to base the initial explosion positions around
const containerWidth = document.getElementById("explosion-container").offsetWidth;
const containerHeight = document.getElementById("explosion-container").offsetHeight;

emojisplosion({
    position: {
        x: containerWidth / 2,
        y: containerHeight / 2,
    },
});
`;

export const explosionFunct = () => {
    // using the explosion container to base the initial explosion positions around
    const containerWidth = document.getElementById("explosion-container").offsetWidth;
    const containerHeight = document.getElementById("explosion-container").offsetHeight;

    emojisplosion({
        position: {
            x: containerWidth / 2,
            y: containerHeight / 2,
        },
    });
};