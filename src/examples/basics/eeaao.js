import { emojisplosions } from "emojisplosion";

export const name = "Everything Everywhere all at Once (for 3 seconds)";

export const blurb = "Emojisplosions occuring randomly accross the page every 40 milliseconds for 3 seconds.";

export const codeSnippet = `const { cancel } = emojisplosions({
    interval: 40
});

setTimeout(cancel, 3000);
`;

export const explosionFunct = () => {
    const { cancel } = emojisplosions({
        interval: 40
    });

    setTimeout(cancel, 3000);
};

export const disableButtonTime = 6000;