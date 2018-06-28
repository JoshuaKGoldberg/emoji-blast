import { IEmojiPosition } from "./createEmoji";

export interface IStylesSettings {
    position: IEmojiPosition;
}

const createUniqueName = (() => {
    let count = 0;

    return () => `a${count += 1}`;
})();

const animationEndNames = [
    "animationend",
    "MSAnimationEnd",
    "oanimationend",
    "webkitAnimationEnd",
];

const createStyleElement = (className: string, position: IEmojiPosition): HTMLStyleElement => {
    const animationName = `${className}-a`;
    const { left, top } = position;
    const peakHeight = Math.random() * 50 + 50;
    const horizontal = Math.random() * 200 - 100;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
        .${className} {
            animation-duration: 3.5s;
            animation-name: ${animationName};
            position: fixed;
        }
        @keyframes ${animationName} {
            0% {
                margin-left: ${left}px;
                margin-top: ${top}px;
            }

            10% {
                margin-top: ${top - peakHeight}px;
                opacity: 1;
            }

            50% {
                margin-left: ${left + horizontal * 0.75}px;
            }

            100% {
                margin-left: ${left + horizontal}px;
                margin-top: ${top + peakHeight + 350}px;
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(styleElement);

    return styleElement;
};

const removeElementsOnAnimationEnd = (emojiElement: HTMLElement, styleElement: HTMLElement): void => {
    let removed = false;
    const onAnimationEnd = () => {
        if (removed) {
            return;
        }

        removed = true;

        if (emojiElement.parentNode !== null) {
            emojiElement.parentNode.removeChild(emojiElement);
        }

        if (styleElement.parentNode !== null) {
            styleElement.parentNode.removeChild(styleElement);
        }
    };

    for (const eventName of animationEndNames) {
        emojiElement.addEventListener(eventName, onAnimationEnd);
    }
};

/**
 * CSS animates an element to explode and fade out.
 *
 * @param emojiElement   Element to animate.
 */
export const applyStyles = (emojiElement: HTMLElement, settings: IStylesSettings): void => {
    const opacityClassName = createUniqueName();
    const styleElement = createStyleElement(opacityClassName, settings.position);

    emojiElement.className = [
        opacityClassName,
    ].join(" ");

    removeElementsOnAnimationEnd(emojiElement, styleElement);
};
