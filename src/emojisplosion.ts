import { EmojiActor, IEmojiPhysics, IEmojiPosition, IEmojiProcess } from "./actor";
import { Animator } from "./animator";
import { defaultEmojis } from "./emojis";
import { createStyleElementAndClass } from "./styles";
import { obtainValue, shuffleArray } from "./utils";

/**
 * Settings to launch an emojisplosion!
 */
export interface IEmojisplosionSettings {
    /**
     * Tracking in-movement actors to push new emojis into.
     */
    animator: Animator;

    /**
     * Class name to add to all emoji elements.
     */
    className: string;

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
     * Runtime change constants for actor movements.
     */
    physics: IEmojiPhysics;

    /**
     * How to determine where to place blasts of emojis around the page.
     */
    position: ISettingValue<IEmojiPosition>;

    /**
     * Processes each element just before it's appended to the container.
     */
    process: ISettingValue<IEmojiProcess>;

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
 * @returns Random integer within 14 to 28.
 */
export const defaultEmojiCount = () => Math.floor(Math.random() * 14) + 14;

/**
 * Default runtime change constants for actor movements.
 */
export const defaultPhysics: IEmojiPhysics = {
    framerate: 60,
    gravity: 0.35,
    opacityDecay: 100,
    rotationAcceleration: 0.98,
};

/**
 * Default position to choose random locations within the page.
 *
 * @returns Random { left, top } integers within the page.
 */
export const defaultPosition = () => ({
    x: Math.floor(Math.random() * (innerWidth * 0.7) + innerWidth + 0.3),
    y: Math.floor(Math.random() * (innerHeight * 0.7) + innerHeight + 0.3),
});

/**
 * Default HTML tag name to create elements as.
 */
export const defaultTagName = "span";

/**
 * Launches an emojisplosion across the page! 🎆
 *
 * @param settings   Settings to emojisplode.
 */
export const emojisplosion = (settings: Partial<IEmojisplosionSettings> = {}) => {
    const {
        animator = new Animator().start(),
        className = createStyleElementAndClass(),
        container = document.body,
        emojiCount = defaultEmojiCount,
        emojis = defaultEmojis,
        physics = defaultPhysics,
        position = defaultPosition,
        process = () => {},
        tagName = defaultTagName,
        uniqueness = Infinity,
    } = settings;

    const emojiSettings = {
        className,
        container: obtainValue(container),
        // Copy the input array to prevent modifications.
        emojis: shuffleArray(obtainValue(emojis))
            .slice(0, obtainValue(uniqueness)),
        physics,
        position: obtainValue(position),
        process,
        tagName: obtainValue(tagName),
    };

    const blastEmojiCount = obtainValue(emojiCount);

    for (let i = 0; i < blastEmojiCount; i += 1) {
        animator.add(new EmojiActor(emojiSettings));
    }

    return animator;
};
