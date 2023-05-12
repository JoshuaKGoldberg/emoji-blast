import { emojisplosion } from "emojisplosion";

export const name = "Tour de France";

export const blurb = "Emojisplosion with three biker emojis racing across the page. Only the x value for the initialVelocity property is set.";

export const codeSnippet = `// using the explosion container to base the initial explosion positions around
const containerWidth = document.getElementById("explosion-container").offsetWidth;
const containerHeight = document.getElementById("explosion-container").offsetHeight;

emojisplosion({
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

export const explosionFunct = () => {
    // using the explosion container to base the initial explosion positions around
    const containerWidth = document.getElementById("explosion-container")?.offsetWidth ?? 1000;
    const containerHeight = document.getElementById("explosion-container")?.offsetHeight ?? 1000;

    emojisplosion({
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
};