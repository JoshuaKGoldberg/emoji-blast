import { emojisplosion } from "emojisplosion"

export const name = "Gravity";

export const blurb = "hi";

export const codeSnippet = `emojisplosion({
	physics: {
		gravity: -0.35,
		initialVelocities: {
			y: {
				max: 14,
				min: 11.7,
			},
		},
	},
});`

export const handleClick = () => {
    emojisplosion({
        physics: {
            gravity: -0.35,
            initialVelocities: {
                y: {
                    max: 14,
                    min: 11.7,
                },
            },
            preserveOutOfBounds: true,
        },
    });
}