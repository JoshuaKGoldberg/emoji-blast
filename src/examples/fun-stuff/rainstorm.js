import { emojisplosions } from "emojisplosion";

export const name = "Rainstorm";

export const blurb = "Emojisplosions occuring from set points at the top of the page for 5 seconds emulating a rainstorm.";

export const codeSnippet = `// using a loop to set explosions to occur at steps of 25 between 0 & 1000 accross the x axis
for (let i = 0; i < 1000; i += 25) {

    // define a random gravity for each of the raindrop explosions
    let randGravity = (Math.random() * 0.30) + 0.10

    const { cancel } = emojisplosions({
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
        // setting a random interval between 100 & 1000 for the explosion in each emojisplosions to occur 
        interval() {
            return Math.floor(Math.random() * 1000) + 100
        }
    });

    // cancel the explosions after 5 seconds 
    setTimeout(cancel, 5000);
};
`;

export const handleClick = () => {
    // using a loop to set explosions to occur at steps of 25 between 0 & 1000 accross the x axis
    for (let i = 0; i < 1000; i += 25) {

        // define a random gravity for each of the raindrop explosions
        let randGravity = (Math.random() * 0.30) + 0.10

        const { cancel } = emojisplosions({
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
            // setting a random interval between 100 & 1000 for the explosion in each emojisplosions to occur 
            interval() {
                return Math.floor(Math.random() * 1000) + 100
            }
        });

        // cancel the explosions after 5 seconds 
        setTimeout(cancel, 5000);
    };
};