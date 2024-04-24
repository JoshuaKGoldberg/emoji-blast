import { emojisplosion } from "emojisplosion";

export const name = "Rainbow";

export const blurb = "A rainbow made up of hearts and clouds explodes as an arc across the page. The rainbow is made of columns, where each emoji within the column is a singular emojisplosion.";

export const codeSnippet = `// finding midpoint of the explosion container for our starting y value position
const containerHeight = document.getElementById("explosion-container").offsetHeight;
const containerMidPoint = Math.floor(containerHeight / 2);

// function to create each heart column of the rainbow
const rainbowCol = () => {
    const rainbowArr = ["❤️", "🧡", "💛", "💚", "💙", "💜"];
    const positionY = containerMidPoint;
    
    // creates an explosion for each heart color in the column, increasing the y cordinate position for each blast
    for (let i = 0; i < rainbowArr.length; i++) {
        emojisplosion({
            emojis: [rainbowArr[i]],
            emojiCount: 1,
            position: {
                x: 0,
                y: positionY,
            },
            physics: {
                fontSize: 35,
                gravity: 0.08,
                initialVelocities: {
                    rotation: 0,
                    x: 20,
                    y: -20
                },
                rotation: 0,
            }
        });
        positionY += 30;
    }
};

// function to create cloud columns
const clouds = () => {
    let positionY = containerMidPoint;

    // creates an explosion for each cloud in the column, increasing the y cordinate position for each blast
    for (let i = 0; i < 6; i++) {
        emojisplosion({
            emojis: ["☁️"],
            emojiCount: 1,
            position: {
                x: 0,
                y: positionY,
            },
            physics: {
                fontSize: 65,
                gravity: 0.08,
                initialVelocities: {
                    rotation: 0,
                    x: 20,
                    y: -20
                },
                rotation: 0,
            }
        });
        positionY += 30;
    }
};
// create one column of clouds before the rainbow
clouds();

// set off rainbow columns at intervals of 80 milliseconds for 3 seconds to create the rainbow
let intervalId = setInterval(rainbowCol, 80);
setTimeout(() => clearInterval(intervalId), 3000);

// create one column of clouds after the rainbow
setTimeout(clouds, 3000);
`;

export const explosionFunct = () => {
    // finding midpoint of the explosion container for our starting y value position
    const containerHeight = document.getElementById("explosion-container").offsetHeight;
    const containerMidPoint = Math.floor(containerHeight / 2);

    // function to create each heart column of the rainbow
    const rainbowCol = () => {
        const rainbowArr = ["❤️", "🧡", "💛", "💚", "💙", "💜"];
        let positionY = containerMidPoint;
        
        // creates an explosion for each heart color in the column, increasing the y cordinate position for each blast
        for (let i = 0; i < rainbowArr.length; i++) {
            emojisplosion({
                emojis: [rainbowArr[i]],
                emojiCount: 1,
                position: {
                    x: 0,
                    y: positionY,
                },
                physics: {
                    fontSize: 35,
                    gravity: 0.08,
                    initialVelocities: {
                        rotation: 0,
                        x: 20,
                        y: -20
                    },
                    rotation: 0,
                }
            });
            positionY += 30;
        }
    };

    // function to create cloud columns
    const clouds = () => {
        let positionY = containerMidPoint;

        // creates an explosion for each cloud in the column, increasing the y cordinate position for each blast
        for (let i = 0; i < 6; i++) {
            emojisplosion({
                emojis: ["☁️"],
                emojiCount: 1,
                position: {
                    x: 0,
                    y: positionY,
                },
                physics: {
                    fontSize: 65,
                    gravity: 0.08,
                    initialVelocities: {
                        rotation: 0,
                        x: 20,
                        y: -20
                    },
                    rotation: 0,
                }
            });
            positionY += 30;
        }
    };
    // create one column of clouds before the rainbow
    clouds();

    // set off rainbow columns at intervals of 80 milliseconds for 3 seconds to create the rainbow
    let intervalId = setInterval(rainbowCol, 80);
    setTimeout(() => clearInterval(intervalId), 3000);

    // create one column of clouds after the rainbow
    setTimeout(clouds, 3000);
};

export const disableButtonTime = 8000;