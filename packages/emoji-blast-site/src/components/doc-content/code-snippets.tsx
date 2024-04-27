export const classNameSnippet = `emojiBlast({
    className: "my-emoji-styles",
});
`;

export const containerSnippet = `emojiBlast({
    container: document.getElementById("fun"),
});
`;

export const emojiCountSnippet1 = `emojiBlast({
    emojiCount: 9001,
});
`;

export const emojiCountSnippet2 = `emojiBlast({
    emojiCount: () => Math.random() * 100 + 100,
});
`;

export const emojisSnippet1 = `emojiBlast({
    emojis: ["💖"],
})
`;

export const emojisSnippet2 = `emojiBlast({
    emojis: ["💖", "💕", "💗", "💓", "💝"],
});
`;

export const physicsSnippet1 = `emojiBlast({
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

export const physicsSnippet2 = `emojiBlast({
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

export const physicsSnippet3 = `import { emojiBlasts, defaultPhysics } from "emoji-blast";

emojiBlast({
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

export const positionSnippet1 = `emojiBlast({
    position: () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
    }),
});
`;

export const positionSnippet2 = `emojiBlast({
    position: {
        x: 35,
        y: 35,
    },
});
`;

export const positionSnippet3 = `const element = document.querySelector("#my-face");

emojiBlast({
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

export const processSnippet = `emojiBlast({
    process(element) {
        element.className = "emoji";
    },
});
`;

export const tagNameSnippet = `emojiBlast({
    tagName: "div",
});
`;

export const uniquenessSnippet1 = `emojiBlast({
    uniqueness: 1,
});
`;

export const uniquenessSnippet2 = `let count = 0;

emojiBlast({
    uniqueness() {
        count += 1;
        return count;
    },
});
`;

export const emojiBlastsSnippet = `// Commence explosions!...
const { cancel } = emojiBlasts();

// ...but stop after ten seconds.
setTimeout(cancel, 10000);
`;

export const intervalSnippet1 = `emojiBlasts({
    interval: 0,
});
`;

export const intervalSnippet2 = `emojiBlasts({
    interval: 1000,
});
`;

export const intervalSnippet3 = `let scheduled = false;

emojiBlasts({
    interval() {
        if (!scheduled) {
            scheduled = true;
            return 0;
        }

        return 1000;
    },
});
`;

export const schedulerSnippet = `emojiBlasts({
    scheduler(action, delay) {
        console.log(\`Will emoji in \${delay} ms!\`);
        action();
    },
});
`;
