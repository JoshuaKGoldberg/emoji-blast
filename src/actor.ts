import { randomArrayMember } from "./utils";

/**
 * Sttings to create a single emoji within a container.
 */
export interface IEmojiActorSettings {
    /**
     * Class name to add to the actor's element.
     */
    className: string;

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

interface IEmojiVelocity extends IEmojiPosition {
    /**
     * How much to rotate each tick.
     */
    rotation: number;
}

/**
 * Processes an element just before it's appended to the container.
 *
 * @param element   Element about to be appended to the container.
 */
export type IEmojiProcess = (element: Element) => void;

const DECAY = 100;

const FRAMERATE = 60;

const GRAVITY = 0.2981;

const ROTATION_CHANGE = 0.98;

export class EmojiActor {
    private readonly element: HTMLElement;

    private opacity = 1;

    private readonly position: IEmojiVelocity;

    private readonly velocity: IEmojiVelocity;

    public constructor(settings: IEmojiActorSettings) {
        this.element = document.createElement(settings.tagName);
        this.element.className = settings.className;
        this.element.textContent = randomArrayMember(settings.emojis);

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
        this.element.setAttribute("aria-label", "Random emoji");
        this.element.setAttribute("role", "img");
        this.element.style.fontSize = `${Math.random() * 1.4 + 0.7}em`;

        settings.process(this.element);
        settings.container.appendChild(this.element);

        this.position = {
            rotation: Math.floor(Math.random() * 90) - 45,
            x: settings.position.x,
            y: settings.position.y,
        };

        this.velocity = {
            rotation: Math.random() * 5 - 2.5,
            x: Math.random() * 7 - 1,
            y: Math.random() * -14 - 3.5,
        };
    }

    public dispose() {
        if (this.element.parentElement !== null) {
            this.element.parentElement.removeChild(this.element);
        }
    }

    public isOutOfBounds(screen: Pick<Window, "innerHeight">): boolean {
        return this.position.y >= screen.innerHeight  + this.element.clientHeight;
    }

    /**
     *
     * @param timeElapsed
     * @returns Whether this is now dead.
     */
    public tick(timeElapsed: number): boolean {
        this.opacity -= timeElapsed / (DECAY * FRAMERATE);
        if (this.opacity <= 0) {
            return true;
        }

        this.velocity.rotation *= ROTATION_CHANGE;
        this.velocity.y += GRAVITY;

        this.position.rotation += this.velocity.rotation;
        this.position.x += this.velocity.x * timeElapsed / FRAMERATE;
        this.position.y += this.velocity.y * timeElapsed / FRAMERATE;

        this.element.style.left = `${this.position.x}px`;
        this.element.style.opacity = `${this.opacity}`;
        this.element.style.top = `${this.position.y}px`;
        this.element.style.transform = `rotate(${Math.round(this.position.rotation)}deg)`;

        return false;
    }
}
