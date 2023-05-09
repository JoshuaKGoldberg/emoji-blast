import { emojisplosion } from "emojisplosion";

export const name = "Nope";

export const blurb = `A UFO appears on the page and briefly stops to abduct up a lone cow. 
    The example consists of three stages defined by time, each with their 
    own set of emojisplosions. The first stage consists of the UFO flying 
    onto the page, the second consists of the UFO stopping to abduct the cow, 
    and the third consists of the UFO flying off the page.
    **this example looks best on a computer`;

export const codeSnippet = `// finding the midpoint of the height of the explosion contianer to base the y positions of the emojisplosions around
const midContainerHeight = (document.getElementById("explosion-container").offsetHeight) / 2;

// function for the ufo 
const ufo = (pos, vel, className) => {
    emojisplosion({
        className: className,
        emojis: ["🛸"], 
        emojiCount: 1,
        position: {
            x: pos[0],
            y: pos[1],
        },
        physics: {
            fontSize: 75,
            gravity: 0,
            initialVelocities: {
                rotation: 0,
                x: vel[0],
                y: vel[1]
            },
            rotation: 20,
        }
    })
};

// function for the cow 
const cow = (velY, className) => {
    emojisplosion({
        className: className,
        emojis: ["🐄"], 
        emojiCount: 1,
        position: {
            x: 480,
            y: midContainerHeight + 100,
        },
        physics: {
            fontSize: 35,
            gravity: 0,
            initialVelocities: {
                rotation: 0,
                x: 0,
                y: velY
            },
            rotation: 0,
        }
    })
};

// function for the wind 
const wind = () => {
    emojisplosion({
        className: "mid", // setting the className to mid as the wind only occurs in the "mid" stage
        emojis: ["🌪️"],
        emojiCount: 1,
        position: {
            x: 535,
            y: midContainerHeight + 70,
        },
        physics: {
            fontSize: 120,
            gravity: 0,
            initialVelocities: {
                rotation: 0,
                x: 0,
                y: 0
            },
            rotation: 180,
        }
    })
};

// the stages of the example set as classnames to pass to the emojis
const classNames = [
    "start",
    "mid",
    "end",
];

// starting positions as [x, y] coordinates for the ufo at each stage
const ufoPos = [
    [0, midContainerHeight - 200],  // start stage
    [500, midContainerHeight],      // mid stage & end stage
];

// initial velocities as [x, y] for the ufo at each stage
const ufoVel = [
    [15, 6],    // start stage
    [0, 0],     // mid stage
    [15, -6],   // end stage
];

// initial y value velocities for the cow at each stage 
const cowYVel = [
    0,      // start stage
    -3,     // mid stage
];

// function to remove emojis with a specified className from the page 
// https://stackoverflow.com/a/14066534
const removeEmoji = (className) => {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

// set off starting explosions for ufo and cow
ufo(ufoPos[0], ufoVel[0], classNames[0]);
cow(cowYVel[0], classNames[0]);

// set off mid explosions for ufo, cow & wind after 2 seconds
setTimeout(wind, 2000);
setTimeout(() => {cow(cowYVel[1], classNames[1])}, 2000);
setTimeout(() => {ufo(ufoPos[1], ufoVel[1], classNames[1])}, 2000);
// remove starting explosion emojis after 2 seconds
setTimeout(() => {removeEmoji(classNames[0])}, 2000);

// remove mid explosion emojis after 4350 milliseconds
setTimeout(() => {removeEmoji(classNames[1])}, 4350);
// set off last explosion for ufo after 4350 milliseconds
setTimeout(() => {ufo(ufoPos[1], ufoVel[2], classNames[2])}, 4350);
`;

export const explosionFunct = () => {
    // finding the midpoint of the height of the explosion contianer to base the y positions of the emojisplosions around
    const midContainerHeight = (document.getElementById("explosion-container").offsetHeight) / 2;
    
    // function for the ufo 
    const ufo = (pos, vel, className) => {
        emojisplosion({
            className: className,
            emojis: ["🛸"], 
            emojiCount: 1,
            position: {
                x: pos[0],
                y: pos[1],
            },
            physics: {
                fontSize: 75,
                gravity: 0,
                initialVelocities: {
                    rotation: 0,
                    x: vel[0],
                    y: vel[1]
                },
                rotation: 20,
            }
        })
    };

    // function for the cow 
    const cow = (velY, className) => {
        emojisplosion({
            className: className,
            emojis: ["🐄"], 
            emojiCount: 1,
            position: {
                x: 480,
                y: midContainerHeight + 100,
            },
            physics: {
                fontSize: 35,
                gravity: 0,
                initialVelocities: {
                    rotation: 0,
                    x: 0,
                    y: velY
                },
                rotation: 0,
            }
        })
    };

    // function for the wind 
    const wind = () => {
        emojisplosion({
            className: "mid", // setting the className to mid as the wind only occurs in the "mid" stage
            emojis: ["🌪️"],
            emojiCount: 1,
            position: {
                x: 535,
                y: midContainerHeight + 70,
            },
            physics: {
                fontSize: 120,
                gravity: 0,
                initialVelocities: {
                    rotation: 0,
                    x: 0,
                    y: 0
                },
                rotation: 180,
            }
        })
    };

    // the stages of the example set as classnames to pass to the emojis
    const classNames = [
        "start",
        "mid",
        "end",
    ];

    // starting positions as [x, y] coordinates for the ufo at each stage
    const ufoPos = [
        [0, midContainerHeight - 200],  // start stage
        [500, midContainerHeight],      // mid stage & end stage
    ];

    // initial velocities as [x, y] for the ufo at each stage
    const ufoVel = [
        [15, 6],    // start stage
        [0, 0],     // mid stage
        [15, -6],   // end stage
    ];

    // initial y value velocities for the cow at each stage 
    const cowYVel = [
        0,      // start stage
        -3,     // mid stage
    ];

    // function to remove emojis with a specified className from the page 
    // https://stackoverflow.com/a/14066534
    const removeEmoji = (className) => {
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    };

    // set off starting explosions for ufo and cow
    ufo(ufoPos[0], ufoVel[0], classNames[0]);
    cow(cowYVel[0], classNames[0]);

    // set off mid explosions for ufo, cow & wind after 2 seconds
    setTimeout(wind, 2000);
    setTimeout(() => {cow(cowYVel[1], classNames[1])}, 2000);
    setTimeout(() => {ufo(ufoPos[1], ufoVel[1], classNames[1])}, 2000);
    // remove starting explosion emojis after 2 seconds
    setTimeout(() => {removeEmoji(classNames[0])}, 2000);

    // remove mid explosion emojis after 4350 milliseconds
    setTimeout(() => {removeEmoji(classNames[1])}, 4350);
    // set off last explosion for ufo after 4350 milliseconds
    setTimeout(() => {ufo(ufoPos[1], ufoVel[2], classNames[2])}, 4350);
};

export const disableButtonTime = 4000;