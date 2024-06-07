import { emojiBlast } from "emoji-blast";

export const name = "Shooting Stars";

export const blurb =
	"Stars shoot across the page with trails of sparkles. An emojiBlast is used for each individual emoji and set off in intervals.";

export const codeSnippet = `// function for the star
const star = (yPos) => {
    emojiBlast({
        emojis: ["⭐️"],
        emojiCount: 1,
        position: {
            x: 0,
            y: yPos,
        },
        physics: {
            fontSize: {min: 20, max: 32},
            gravity: 0.05,
            initialVelocities: {
                x: 45,
                y: -10
            },
        }
    });
};

// function for the trailing sparkles
const sparkles = (yPos, size) => {
    emojiBlast({
        emojis: ["✨"],
        emojiCount: 1,
        position: {
            x: 0,
            y: yPos,
        },
        physics: {
            fontSize: size,
            gravity: 0.05,
            initialVelocities: {
                rotation: 0,
                x: 45,
                y: -10
            },
        }
    });
};

// finding height of the explosion container to base our random y value positions off of
const containerHeight = document.getElementById("explosion-container")!.offsetHeight;

// function for a singular shooting star 
const shootingStar = () => {
    let randYPos = (Math.random() * containerHeight) + 100;
    let emojiSize = 18;

    star(randYPos);

    // set off sparkle explosions at intervals of 60 milliseconds for 400 milliseconds to create the sparkle trail
    let intervalId = setInterval(() => {
        sparkles(randYPos, emojiSize); 

        // decreasing the size of the trailing sparkle emoji by 3 for each explosion
        emojiSize -= 3;
    }, 60);
    setTimeout(() => clearInterval(intervalId), 400);
}

// set off a shooting star at intervals of 60 milliseconds for 2 seconds 
let intervalId = setInterval(shootingStar, 60);
setTimeout(() => clearInterval(intervalId), 2000);
`;

export const explosionFunction = () => {
	// function for the star
	const star = (yPos: number) => {
		emojiBlast({
			emojiCount: 1,
			emojis: ["⭐️"],
			physics: {
				fontSize: { max: 32, min: 20 },
				gravity: 0.05,
				initialVelocities: {
					x: 45,
					y: -10,
				},
			},
			position: {
				x: 0,
				y: yPos,
			},
		});
	};

	// function for the trailing sparkles
	const sparkles = (yPos: number, size: number) => {
		emojiBlast({
			emojiCount: 1,
			emojis: ["✨"],
			physics: {
				fontSize: size,
				gravity: 0.05,
				initialVelocities: {
					rotation: 0,
					x: 45,
					y: -10,
				},
			},
			position: {
				x: 0,
				y: yPos,
			},
		});
	};

	// finding height of the explosion container to base our random y value positions off of
	const containerHeight = document.getElementById(
		"explosion-container",
	)!.offsetHeight;

	// function for a singular shooting star
	const shootingStar = () => {
		const randYPos = Math.random() * containerHeight + 100;
		let emojiSize = 18;

		star(randYPos);

		// set off sparkle explosions at intervals of 60 milliseconds for 400 milliseconds to create the sparkle trail
		const intervalId = setInterval(() => {
			sparkles(randYPos, emojiSize);

			// decreasing the size of the trailing sparkle emoji by 3 for each explosion
			emojiSize -= 3;
		}, 60);
		setTimeout(() => {
			clearInterval(intervalId);
		}, 400);
	};

	// set off a shooting star at intervals of 60 milliseconds for 2 seconds
	const intervalId = setInterval(shootingStar, 60);
	setTimeout(() => {
		clearInterval(intervalId);
	}, 2000);
};

export const disableButtonTime = 4000;
