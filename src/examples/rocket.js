import { emojisplosion } from "emojisplosion"

export const name = "Rocket";

export const blurb = "A singluar rocket shoots out from a set spot on the page at an angle, followed by a burst of clouds and sparkles. Each set of emojis uses it's own emojisplosion function. The sparkle function is set to occur 400 milliseconds after the rocket and clouds go off.";

export const codeSnippet = `// function for the rocket
emojisplosion({
    emojis: ["🚀"], 
    emojiCount: 1,
    position: {
        x: 150,
        y: 850,
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
})

// function for the clouds
emojisplosion({
    emojis: ["☁️"], 
    emojiCount: 10,
    position: {
        x: 150,
        y: 850,
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

// function for the sparkles
const sparkles = () => {
    emojisplosion({
        emojis: ["✨"], 
        emojiCount: 10,
        position: {
            x: 200,
            y: 790,
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
}

// set sparkles to go off 400 milliseconds after the rocket shoots
setTimeout(sparkles, 400);
`

export const handleClick = () => {
    emojisplosion({
        emojis: ["🚀"], 
        emojiCount: 1,
        position: {
            x: 150,
            y: 850,
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
    })

    emojisplosion({
        emojis: ["☁️"], 
        emojiCount: 10,
        position: {
            x: 150,
            y: 850,
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

    const sparkles = () => {
        emojisplosion({
            emojis: ["✨"], 
            emojiCount: 10,
            position: {
                x: 200,
                y: 790,
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
    }

    setTimeout(sparkles, 400);
}
