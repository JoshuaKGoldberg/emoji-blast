import { EmojiActor, EmojiPhysics, EmojiPosition, EmojiProcess } from "./actor";
import { Animator } from "./animator";
import { defaultEmojis } from "./emojis";
import { createStyleElementAndClass } from "./styles";
import { obtainValue, shuffleArray } from "./utils";

/**
 * Settings to launch an emojisplosion!
 */
export interface EmojisplosionSettings {
    /**
     * Tracking in-movement actors to push new emojis into.
     *
     * @internal
     */
    animator: Animator;

    /**
     * Class name to add to all emoji elements.
     */
    className: string;

    /**
     * Element container to append elements into.
     */
    container: SettingValue<Element>;

    /**
     * How many emojis to create per blast.
     */
    emojiCount: SettingValue<number>;

    /**
     * Allowed potential emoji names to set as textContent.
     */
    emojis: SettingValue<string[]>;

    /**
     * Runtime change constants for emoji element movements.
     */
    physics: Partial<EmojiPhysics>;

    /**
     * How to determine where to place blasts of emojis around the page.
     */
    position: SettingValue<EmojiPosition>;

    /**
     * Processes each element just before it's appended to the container.
     */
    process: EmojiProcess;

    /**
     * DOM element tag name to create elements as.
     */
    tagName: SettingValue<string>;

    /**
     * How many different types of emojis are allowed within a blast.
     */
    uniqueness: SettingValue<number>;
}

/**
 * Setting value or a method to create it.
 *
 * @template T   Type of the setting value.
 */
export type SettingValue<T> = T | (() => T);

/**
 * Default class name to add to emoji elements.
 */
export const defaultClassName = "emoji-styles";

/**
 * Default creator for a container element.
 * 
 * @returns <div /> element prepended to document.body.
 */
export const defaultCreateContainer = (() => {
    let container: HTMLElement;

    return () => {
        if (container?.parentNode === document.body) {
            return container;
        }

        container = document.createElement("div");

        document.body.prepend(container);

        return container;
    };
})();

/**
 * Default emojiCount to choose a random number of emoji per blast.
 *
 * @returns Random integer within 14 to 28.
 */
export const defaultEmojiCount = () => Math.floor(Math.random() * 14) + 14;

/**
 * Default runtime change constants for actor movements.
 */
export const defaultPhysics: EmojiPhysics = {
    fontSize: {
        max: 28,
        min: 14,
    },
    framerate: 60,
    gravity: 0.35,
    initialVelocities: {
        rotation: {
            max: 7,
            min: -7,
        },
        x: {
            max: 7,
            min: -7,
        },
        y: {
            max: -7,
            min: -21,
        },
    },
    preserveOutOfBounds: false,
    rotation: {
        max: 45,
        min: -45,
    },
    rotationDeceleration: 0.98,
};

/**
 * Default position to choose random locations within the page.
 *
 * @returns Random { left, top } integers within the page.
 */
export const defaultPosition = () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
});

/**
 * Default emoji processor, which does nothing.
 */
const defaultProcess = () => { };

/**
 * Default HTML tag name to create elements as.
 */
export const defaultTagName = "span";

/**
 * Launches an emojisplosion across the page! 🎆
 *
 * @param settings   Settings to emojisplode.
 */
export const emojisplosion = (settings: Partial<EmojisplosionSettings> = {}) => {
    const {
        animator = new Animator().start(),
        className = defaultClassName,
        container = defaultCreateContainer,
        emojiCount = defaultEmojiCount,
        emojis = defaultEmojis,
        position = defaultPosition,
        process = defaultProcess,
        tagName = defaultTagName,
        uniqueness = Infinity,
    } = settings;

    createStyleElementAndClass(className);

    const physics = {
        ...defaultPhysics,
        ...settings.physics,
        initialVelocities: {
            ...defaultPhysics.initialVelocities,
            ...(settings.physics !== undefined ? settings.physics.initialVelocities : {}),
        },
    };

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
