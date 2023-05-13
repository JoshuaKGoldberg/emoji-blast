import { emojisplosion, defaultPhysics } from "emojisplosion";

export const name = "Inverse Gravity";

export const blurb = "Emojisplosion with inverted gravity.";

export const codeSnippet = `emojisplosion({
    physics: {
        gravity: -0.35,
        initialVelocities: {
            y: {min: 11.7, max: 14},
        },
    },
});
`;

export const explosionFunct = () => {
    emojisplosion({
        physics: {
            gravity: -0.35,
            initialVelocities: {
                y: {min: 11.7, max: 14},
            },
        },
    });
};