import { defaultEmojis, emojiBlast } from "emoji-blast";

export const name = "Firework";

export const blurb =
	"A firework of emojiBlasts comprised of a singular random emoji is set off at a random position on the page.";

export const codeSnippet = `// finding the explosion container width and height to base our starting coordinates off of
const containerWidth = document.getElementById("explosion-container")!.offsetWidth;
const containerHeight = document.getElementById("explosion-container")!.offsetHeight;

// created x & y starting coordinates to randomize where the firework occurs on the page
const randStartXCoord = Math.random() * containerWidth;
const randStartYCoord = Math.random() * containerHeight;

// function for the initial sparkles in the firework
const sparkles = () => {

    // a 2d array of initial velocity [x, y] coordinates to pass into each sparkle explosion 
    const velocityCoords = [
        [0, -15], 
        [0, 15], 
        [-15, 0],
        [15, 0],
        [10, 10],
        [-10, -10],
        [10, -10],
        [-10, 10]
    ];

    // set off a sparkle explosion for each of the differing initial velocity coordinates
    for (let i = 0; i < velocityCoords.length; i++) {
        emojiBlast({
            className: "sparkles",
            emojis: ["✨"],
            emojiCount: 1,
            position: {
                x: randStartXCoord,
                y: randStartYCoord,
            },
            physics: {
                rotationDeceleration: 0,
                fontSize: 20,
                gravity: 0,
                initialVelocities: {
                    rotation: 0,
                    x: velocityCoords[i][0],
                    y: velocityCoords[i][1]
                },
                rotation: 0,
            }
        })
    }

};

// function for blast parts of the firework 
const blast = () => {

    // choose a random emoji from imported defaultEmojis to set as the emoji for all blasts
    const randEmoji = defaultEmojis[Math.floor(Math.random() * defaultEmojis.length)];

    // a 2d array of [x, y] coordinates to add to the random starting coordinates to set the position for each blast
    const coordDiff = [
        [0, -150], 
        [0, 150], 
        [-150, 0],
        [150, 0],
        [106, 106],
        [-106, -106],
        [106, -106],
        [-106, 106]
    ];

    // set off a blast at each coordinate calculated using the coordDiff array
    for (let i = 0; i < coordDiff.length; i++) {
        emojiBlast({
            emojis: [randEmoji],
            uniqueness: 1,
            position: {
                x: randStartXCoord + coordDiff[i][0],
                y: randStartYCoord + coordDiff[i][1],
            },
            physics: {
                gravity: 0.2,
                initialVelocities: {
                    rotation: 0,
                    x: {min: -10, max: 10},
                    y: {min: -15, max: 15}
                },
            }
        })
    }
};

// remove the sparkles from the page after the blasts go off
// https://stackoverflow.com/a/14066534
const removeSparkles = () => {
    const elements = document.getElementsByClassName("sparkles");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

sparkles();

// remove the sparkles and set off the blasts 630 milliseconds after the sparkles go off
setTimeout(removeSparkles, 630);
setTimeout(blast, 630);
`;

export const explosionFunction = () => {
	// finding the explosion container width and height to base our starting coordinates off of
	const containerWidth = document.getElementById(
		"explosion-container",
	)!.offsetWidth;
	const containerHeight = document.getElementById(
		"explosion-container",
	)!.offsetHeight;

	// created x & y starting coordinates to randomize where the firework occurs on the page
	const randStartXCoord = Math.random() * containerWidth;
	const randStartYCoord = Math.random() * containerHeight;

	// function for the initial sparkles in the firework
	const sparkles = () => {
		// a 2d array of initial velocity [x, y] coordinates to pass into each sparkle explosion
		const velocityCoords = [
			[0, -15],
			[0, 15],
			[-15, 0],
			[15, 0],
			[10, 10],
			[-10, -10],
			[10, -10],
			[-10, 10],
		];

		// set off a sparkle explosion for each of the differing initial velocity coordinates
		for (const [xCoordinate, yCoordinate] of velocityCoords) {
			emojiBlast({
				className: "sparkles",
				emojiCount: 1,
				emojis: ["✨"],
				physics: {
					fontSize: 20,
					gravity: 0,
					initialVelocities: {
						rotation: 0,
						x: xCoordinate,
						y: yCoordinate,
					},
					rotation: 0,
					rotationDeceleration: 0,
				},
				position: {
					x: randStartXCoord,
					y: randStartYCoord,
				},
			});
		}
	};

	// function for blast parts of the firework
	const blast = () => {
		// choose a random emoji from imported defaultEmojis to set as the emoji for all blasts
		const randEmoji =
			defaultEmojis[Math.floor(Math.random() * defaultEmojis.length)];

		// a 2d array of [x, y] coordinates to add to the random starting coordinates to set the position for each blast
		const coordDiff = [
			[0, -150],
			[0, 150],
			[-150, 0],
			[150, 0],
			[106, 106],
			[-106, -106],
			[106, -106],
			[-106, 106],
		];

		// set off a blast at each coordinate calculated using the coordDiff array
		for (const [xCoordinateDiff, yCoordinateDiff] of coordDiff) {
			emojiBlast({
				emojis: [randEmoji],
				physics: {
					gravity: 0.2,
					initialVelocities: {
						rotation: 0,
						x: { max: 10, min: -10 },
						y: { max: 15, min: -15 },
					},
				},
				position: {
					x: randStartXCoord + xCoordinateDiff,
					y: randStartYCoord + yCoordinateDiff,
				},
				uniqueness: 1,
			});
		}
	};

	// remove the sparkles from the page after the blasts go off
	// https://stackoverflow.com/a/14066534
	const removeSparkles = () => {
		const elements = document.getElementsByClassName("sparkles");
		while (elements.length > 0) {
			elements[0].parentNode!.removeChild(elements[0]);
		}
	};

	sparkles();

	// remove the sparkles and set off the blasts 630 milliseconds after the sparkles go off
	setTimeout(removeSparkles, 630);
	setTimeout(blast, 630);
};

export const disableButtonTime = 1000;
