import { applyStyles } from "./styles";
import { randomArrayMember } from "./utils";

/**
 * Sttings to create a single emoji within a container.
 */
export interface IEmojiCreationSettings {
    /**
     * Element container to append the element into.
     */
    container: Element;

    /**
     * Allowed potential emoji names to set as textContent.
     */
    emojis: string[];

    /**
     * How to determine where to place blasts of emojis around the page.
     */
    position: IEmojiPosition;

    /**
     * Processes each element just before it's appended to the container.
     */
    process: IEmojiProcess;

    /**
     * DOM element tag name to create elements as.
     */
    tagName: string;
}

/**
 * Absolute CSS position to place an emoji element at.
 */
export interface IEmojiPosition {
    /**
     * Pixels to offset by the left.
     */
    left: number;

    /**
     * Pixels to offset by the top.
     */
    top: number;
}

/**
 * Processes an element just before it's appended to the container.
 *
 * @param element   Element about to be appended to the container.
 */
export type IEmojiProcess = (element: Element) => void;

export const createEmoji = (settings: IEmojiCreationSettings) => {
    const element = document.createElement(settings.tagName);

    element.style.marginLeft = element.style.marginTop = "-1em";
    element.textContent = randomArrayMember(settings.emojis);

    applyStyles(element, {
        position: settings.position,
    });

    settings.process(element);

    settings.container.appendChild(element);
};
