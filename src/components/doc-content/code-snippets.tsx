export const classNameSnippet = `emojisplosion({
    className: "my-emoji-styles",
});
`;

export const containerSnippet = `emojisplosion({
    container: document.getElementById("fun"),
});
`;

export const emojiCountSnippet1 = `emojisplosion({
    emojiCount: 9001,
});
`;

export const emojiCountSnippet2 = `emojisplosion({
    emojiCount: () => Math.random() * 100 + 100,
});
`;

export const emojisSnippet1 = `emojisplosion({
    emojis: ["💖"],
})
`;

export const emojisSnippet2 = `emojisplosion({
    emojis: ["💖", "💕", "💗", "💓", "💝"],
});
`;

export const physicsSnippet1 = `emojisplosion({
    physics: {
        initialVelocities: {
            rotation: {
                max: 14,
                min: -14,
            },
        },
        rotationDeceleration: 1.01,
    },
});
`;

export const physicsSnippet2 = `emojisplosion({
    physics: {
        gravity: -0.35,
        initialVelocities: {
            y: {
                max: 14,
                min: 11.7,
            },
        },
    },
});
`;

export const physicsSnippet3 = `import { emojisplosions, defaultPhysics } from "emojisplosion";

emojisplosion({
    physics: {
        gravity: -defaultPhysics.gravity,
        initialVelocities: {
            y: {
                max: -defaultPhysics.initialVelocities.max,
                min: -defaultPhysics.initialVelocities.min,
            },
        },
    },
});
`;

export const positionSnippet1 = `emojisplosion({
    position: () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
    }),
});
`;

export const positionSnippet2 = `emojisplosion({
    position: {
        x: 35,
        y: 35,
    },
});
`;

export const positionSnippet3 = `const element = document.querySelector("#my-face");

emojisplosion({
    position() {
        // https://stackoverflow.com/questions/1480133
        const offset = cumulativeOffset(element);

        return {
            x: offset.left + element.clientWidth / 2,
            y: offset.top + element.clientHeight / 2,
        };
    },
}); 
`;

export const processSnippet = `emojisplosion({
    process(element) {
        element.className = "emoji";
    },
});
`;

export const tagNameSnippet = `emojisplosion({
    tagName: "div",
});
`;

export const uniquenessSnippet1 = `emojisplosion({
    uniqueness: 1,
});
`;

export const uniquenessSnippet2 = `let count = 0;

emojisplosion({
    uniqueness() {
        count += 1;
        return count;
    },
});
`;

export const emojisplosionsSnippet = `// Commence explosions!...
const { cancel } = emojisplosions();

// ...but stop after ten seconds.
setTimeout(cancel, 10000);
`;

export const intervalSnippet1 = `emojisplosions({
    interval: 0,
});
`;

export const intervalSnippet2 = `emojisplosions({
    interval: 1000,
});
`;

export const intervalSnippet3 = `let scheduled = false;

emojisplosions({
    interval() {
        if (!scheduled) {
            scheduled = true;
            return 0;
        }

        return 1000;
    },
});
`;

export const schedulerSnippet = `emojisplosions({
    scheduler(action, delay) {
        console.log(\`Will emoji in \${delay} ms!\`);
        action();
    },
});
`;
