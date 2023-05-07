import { emojisplosion } from "emojisplosion";

export const name = "Speed Racer";

export const blurb = "Emojisplosion with three biker emojis racing across the page. Only the x value for the initialVelocity property is set.";

export const codeSnippet = `emojisplosion({
    emojis: ["🚴‍♀️", "🚴", "🚴‍♂️"],
    emojiCount: 3,
    position: {
        x: 1000,
        y: 500,
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
});`;

export const handleClick = () => {
    emojisplosion({
        emojis: ["🚴‍♀️", "🚴", "🚴‍♂️"],
        emojiCount: 3,
        position: {
            x: 1000,
            y: 500,
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