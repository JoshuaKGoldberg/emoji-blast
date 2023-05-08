import { emojisplosion } from "emojisplosion";

export const name = "Spinnin";

export const blurb = "Emojisplosion with very quickly spinning spiral emojis.";

export const codeSnippet = `emojisplosion({
    emojis: ["🌀"],
    physics: {
        fontSize: {min: 20, max: 38},
        gravity: 0.1,
        initialVelocities: {
            rotation: {min: -14, max: -14},
        },
        rotationDeceleration: 1.01,
    }
});
`;

export const explosionFunct = () => {
    emojisplosion({
        emojis: ["🌀"],
        physics: {
            fontSize: {min: 20, max: 48},
            gravity: 0.1,
            initialVelocities: {
                rotation: {min: -14, max: -14},
            },
            rotationDeceleration: 1.01,
        }
    });
};