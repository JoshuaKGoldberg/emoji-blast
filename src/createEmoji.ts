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
	x: number;

	/**
	 * Pixels to offset by the top.
	 */
	y: number;
}

/**
 * Processes an element just before it's appended to the container.
 *
 * @param element   Element about to be appended to the container.
 */
export type IEmojiProcess = (element: Element) => void;

/**
 * Creates a single emoji, animated from a point.
 *
 * @param settings   Settings to create the emoji.
 */
export const createEmoji = (settings: IEmojiCreationSettings) => {
	const element = document.createElement(settings.tagName);

	element.style.left = `${settings.position.x}px`;
	element.style.position = "absolute";
	element.style.top = `${settings.position.y}px`;
	element.style.marginLeft = element.style.marginTop = "-1em";
	element.textContent = randomArrayMember(settings.emojis);

	settings.process(element);

	settings.container.appendChild(element);
};
