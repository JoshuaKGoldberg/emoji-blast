import { emojisplosion } from "emojisplosion";

export const name = "Rocket";

export const blurb = "A singular rocket shoots out from a set spot on the page at an angle, followed by a burst of clouds and sparkles. Each set of emojis uses it's own emojisplosion function. The sparkle function is set to occur 400 milliseconds after the rocket and clouds go off.";

export const codeSnippet = `// finding the height of the explosion contianer to base y position of the blast around
const containerHeight = document.getElementById("explosion-container").offsetHeight;
const blastYPos = containerHeight - 10;

// function for the rocket
const rocket = () => {
    emojisplosion({
        emojis: ["🚀"], 
        emojiCount: 1,
        position: {
            x: 150,
            y: blastYPos,
        },
        physics: {
            rotationDeceleration: 0,
            fontSize: 45,
            gravity: 0,
            initialVelocities: {
                x: 12,
                y: -10
            },
            rotation: 0,
        }
    });
};

// function for the clouds
const clouds = () => {
    emojisplosion({
        emojis: ["☁️"], 
        emojiCount: 10,
        position: {
            x: 150,
            y: blastYPos,
        },
        physics: {
            rotationDeceleration: 0,
            fontSize: {min: 38, max: 50},
            gravity: 0.1,
            initialVelocities: {
                x: {min: -7, max: 7},
                y: {min: -5, max: -2}
            },
            rotation: 0,
        }
    }); 
};

// function for the sparkles
const sparkles = () => {
    emojisplosion({
        emojis: ["✨"], 
        emojiCount: 10,
        position: {
            x: 200,
            // y: 790,
            y: blastYPos - 60,
        },
        physics: {
            fontSize: {min: 10, max: 30},
            gravity: 0.2,
            initialVelocities: {
                x: {min: -15, max: 20},
                y: {min: -15, max: 20}
            },
        }
    });
};

rocket();
clouds();

// set sparkles to go off 400 milliseconds after the rocket & clouds
setTimeout(sparkles, 400);
`;

export const explosionFunct = () => {
    // finding the height of the explosion contianer to base y position of the blast around
    const containerHeight = document.getElementById("explosion-container").offsetHeight;
    const blastYPos = containerHeight - 10;

    // function for the rocket
    const rocket = () => {
        emojisplosion({
            emojis: ["🚀"], 
            emojiCount: 1,
            position: {
                x: 150,
                y: blastYPos,
            },
            physics: {
                rotationDeceleration: 0,
                fontSize: 45,
                gravity: 0,
                initialVelocities: {
                    x: 12,
                    y: -10
                },
                rotation: 0,
            }
        });
    };

    // function for the clouds
    const clouds = () => {
        emojisplosion({
            emojis: ["☁️"], 
            emojiCount: 10,
            position: {
                x: 150,
                y: blastYPos,
            },
            physics: {
                rotationDeceleration: 0,
                fontSize: {min: 38, max: 50},
                gravity: 0.1,
                initialVelocities: {
                    x: {min: -7, max: 7},
                    y: {min: -5, max: -2}
                },
                rotation: 0,
            }
        }); 
    };

    // function for the sparkles
    const sparkles = () => {
        emojisplosion({
            emojis: ["✨"], 
            emojiCount: 10,
            position: {
                x: 200,
                // y: 790,
                y: blastYPos - 60,
            },
            physics: {
                fontSize: {min: 10, max: 30},
                gravity: 0.2,
                initialVelocities: {
                    x: {min: -15, max: 20},
                    y: {min: -15, max: 20}
                },
            }
        });
    };

    rocket();
    clouds();

    // set sparkles to go off 400 milliseconds after the rocket & clouds
    setTimeout(sparkles, 400);
};
