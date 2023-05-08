import { emojisplosion } from "emojisplosion";

export const name = "Fish";

export const blurb = "fishes";

export const codeSnippet = `emojisplosion({
    container: document.getElementById("explosion-container")
})
`;

export const handleClick = () => {
    emojisplosion({
        emojis: ["🐠", "🐟", "🐡"],
        emojiCount: () => Math.random() * 10 + 20,
        position: {
            x: 1000,
            y: Math.random() * 1000,
        },
        physics: {
            rotationDeceleration: 0,
            fontSize: {min: 38, max: 50},
            gravity: 0.0,
            initialVelocities: {
                rotation: {min: -1, max: 1},
                x: {min: -14 , max: -6},
                y: {min: -2 , max: 1}
            },
            rotation: 0,
            // opacityDelay: 100,
        }
    })
};