import { emojisplosion } from "emojisplosion";

export const name = "Heart on Fire";

export const blurb = "An outline of a heart made up of emojis appears on the page. The heart is formed by itterating through a 2d array of x, y coordinates and creating an explosion containing a singular heart emoji using each coordinate.";

export const codeSnippet = `// 2d array of [x, y] coordinates to form an outline of a heart
const heartCoords = [
    [500, 600], // bottom point
    [500, 410], // center point
    // left line (y = x + 100)
    [350, 450],
    [375, 475],
    [400, 500],
    [425, 525],
    [450, 550],
    [475, 575],
    // right line (y = -x + 1100)
    [650, 450], 
    [623, 477],
    [600, 500],
    [550, 550],
    [574, 526],
    [526, 574],
    // left curve
    [340, 410],
    [340, 430],
    [350, 385],
    [370, 365],
    [400, 350],
    [430, 355],
    [460, 370],
    [480, 385],
    // right curve
    [520, 385],
    [540, 370],
    [570, 355],
    [600, 350],
    [630, 365],
    [650, 385],
    [660, 410],
    [660, 430],
];

// created random x & y values to set an initial velocity for all of the explosions
const randXVelocity = (Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1);
const randYVelocity = (Math.random() * -15) - 3;

// created x & y starting coordinates to add to our heart coords to randomize where the heart occurs on the page
const randStartXCoord = Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);
const randStartYCoord = Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);

// itterating through the heartCoords to set off a singular explosion for each coordinate
for (let i = 0; i < heartCoords.length; i++) {
    const xCoordinate = heartCoords[i][0];
    const yCoordinate = heartCoords[i][1];

    emojisplosion({
        emojis: ["❤️‍🔥"], 
        emojiCount: 1,
        position: {
            x: xCoordinate + randStartXCoord,
            y: yCoordinate + randStartYCoord,
        },
        physics: {
            rotationDeceleration: 0,
            fontSize: 35,
            gravity: 0.15,
            initialVelocities: {
                x: randXVelocity,
                y: randYVelocity
            },
            rotation: 0,
        }
    });
}
});
`;

export const explosionFunct = () => {
    // 2d array of [x, y] coordinates to form an outline of a heart
    const heartCoords = [
        [500, 600], // bottom point
        [500, 410], // center point
        // left line (y = x + 100)
        [350, 450],
        [375, 475],
        [400, 500],
        [425, 525],
        [450, 550],
        [475, 575],
        // right line (y = -x + 1100)
        [650, 450], 
        [623, 477],
        [600, 500],
        [550, 550],
        [574, 526],
        [526, 574],
        // left curve
        [340, 410],
        [340, 430],
        [350, 385],
        [370, 365],
        [400, 350],
        [430, 355],
        [460, 370],
        [480, 385],
        // right curve
        [520, 385],
        [540, 370],
        [570, 355],
        [600, 350],
        [630, 365],
        [650, 385],
        [660, 410],
        [660, 430],
    ];

    // created random x & y values to set an initial velocity for all of the explosions
    const randXVelocity = (Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1);
    const randYVelocity = (Math.random() * -15) - 3;

    // created x & y starting coordinates to add to our heart coords to randomize where the heart occurs on the page
    const randStartXCoord = Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);
    const randStartYCoord = Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);

    // itterating through the heartCoords to set off a singular explosion for each coordinate
    for (let i = 0; i < heartCoords.length; i++) {
        const xCoordinate = heartCoords[i][0];
        const yCoordinate = heartCoords[i][1];

        emojisplosion({
            emojis: ["❤️‍🔥"], 
            emojiCount: 1,
            position: {
                x: xCoordinate + randStartXCoord,
                y: yCoordinate + randStartYCoord,
            },
            physics: {
                rotationDeceleration: 0,
                fontSize: 35,
                gravity: 0.15,
                initialVelocities: {
                    x: randXVelocity,
                    y: randYVelocity
                },
                rotation: 0,
            }
        });
    }
};