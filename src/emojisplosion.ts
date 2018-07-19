import { createEmoji, IEmojiPosition, IEmojiProcess } from "./createEmoji";
import { defaultEmojis } from "./emojis";
import { obtainValue, shuffleArray } from "./utils";

/**
 * Settings to launch an emojisplosion!
 */
export interface IEmojisplosionSettings {
    /**
     * Element container to append elements into.
     */
    container: ISettingValue<Element>;

    /**
     * How many emojis to create per blast.
     */
    emojiCount: ISettingValue<number>;

    /**
     * Allowed potential emoji names to set as textContent.
     */
    emojis: ISettingValue<string[]>;

    /**
     * How to determine where to place blasts of emojis around the page.
     */
    position: ISettingValue<IEmojiPosition>;

    /**
     * Processes each element just before it's appended to the container.
     */
    process: IEmojiProcess;

    /**
     * DOM element tag name to create elements as.
     */
    tagName: ISettingValue<string>;

    /**
     * How many different types of emojis are allowed within a blast.
     */
    uniqueness: ISettingValue<number>;
}

/**
 * Setting value or a method to create it.
 *
 * @template T   Type of the setting value.
 */
export type ISettingValue<T> = T | (() => T);

/**
 * Default emojiCount to choose a random number of emoji per blast.
 *
 * @returns Random integer within 7 to 14.
 */
const defaultEmojiCount = () => Math.floor(Math.random() * 7) + 8;

/**
 * Default position to choose random locations within the page.
 *
 * @returns Random { left, top } integers within the page.
 */
const defaultPosition = () => ({
    left: Math.floor(Math.random() * (innerWidth + 1)),
    top: Math.floor(Math.random() * (innerHeight + 1)),
});

/**
 * Default emoji processor, which does nothing.
 */
const defaultProcess = () => {};

/**
 * Default HTML tag name to create elements as.
 */
const defaultTagName = "span";

/**
 * Launches an emojisplosion across the page! 🎆
 *
 * @param settings   Settings to emojisplode.
 */
export const emojisplosion = (settings: Partial<IEmojisplosionSettings> = {}): void => {
    const {
        container = document.body,
        emojiCount = defaultEmojiCount,
        emojis = defaultEmojis,
        position = defaultPosition,
        process = defaultProcess,
        tagName = defaultTagName,
        uniqueness = Infinity,
    } = settings;

    const emojiSettings = {
        container: obtainValue(container),
        // Copy the input array to prevent modifications.
        emojis: shuffleArray(obtainValue(emojis))
            .slice(0, obtainValue(uniqueness)),
        position: obtainValue(position),
        process,
        tagName: obtainValue(tagName),
    };

    const blastEmojiCount = obtainValue(emojiCount);

    for (let i = 0; i < blastEmojiCount; i += 1) {
        createEmoji(emojiSettings);
    }
};
