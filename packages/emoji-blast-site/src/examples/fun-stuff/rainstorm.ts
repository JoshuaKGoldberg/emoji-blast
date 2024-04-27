import { emojiBlasts } from "emoji-blast";

export const name = "Rainstorm";

export const blurb =
	"emojiBlasts occurring from set points at the top of the page for 5 seconds emulating a rainstorm.";

export const codeSnippet = `const containerWidth = document.getElementById("explosion-container")!.offsetWidth;
    
// using a loop to set explosions to occur at steps of 25 between 0 & the explosion container width across the x axis
for (let i = 0; i < containerWidth; i += 25) {

    // define a random gravity for each of the raindrop explosions
    const randGravity = (Math.random() * 0.30) + 0.10

    const { cancel } = emojiBlasts({
        emojis: ["💧"],
        emojiCount: 1,
        position: {
            // using our step value as our starting x position
            x: i,
            y: 100,
        },
        physics: {
            rotationDeceleration: 0,
            fontSize: {min: 18, max: 30},
            gravity: randGravity,
            initialVelocities: {
                rotation: 0,
                x: 0,
                y: 0
            },
            rotation: 0,
        },
        // setting a random interval between 100 & 1000 for the explosion in each emojiBlasts to occur 
        interval() {
            return Math.floor(Math.random() * 1000) + 100
        }
    });

    // cancel the explosions after 5 seconds 
    setTimeout(cancel, 5000);
};
`;

export const explosionFunction = () => {
	const containerWidth = document.getElementById(
		"explosion-container",
	)!.offsetWidth;

	// using a loop to set explosions to occur at steps of 25 between 0 & the explosion container width across the x axis
	for (let i = 0; i < containerWidth; i += 25) {
		// define a random gravity for each of the raindrop explosions
		const randGravity = Math.random() * 0.3 + 0.1;

		const { cancel } = emojiBlasts({
			emojiCount: 1,
			emojis: ["💧"],
			physics: {
				fontSize: { max: 30, min: 18 },
				gravity: randGravity,
				initialVelocities: {
					rotation: 0,
					x: 0,
					y: 0,
				},
				rotation: 0,
				rotationDeceleration: 0,
			},
			position: {
				// using our step value as our starting x position
				x: i,
				y: 100,
			},
			// setting a random interval between 100 & 1000 for the explosion in each emojiBlasts to occur
			interval() {
				return Math.floor(Math.random() * 1000) + 100;
			},
		});

		// cancel the explosions after 5 seconds
		setTimeout(cancel, 5000);
	}
};

export const disableButtonTime = 5000;
