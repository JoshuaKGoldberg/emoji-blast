import { IRandomRange, randomInRange } from "./range";
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
     * Runtime change constants for actor movements.
     */
    physics: IEmojiPhysics;

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
 * Runtime change constants for actor movements.
 */
export interface IEmojiPhysics {
    /**
     * Individual emojis' font size range.
     */
    fontSize: IRandomRange;

    /**
     * Expected frames per second to adjust position and velocity changes by.
     */
    framerate: number;

    /**
     * How much to increase y-velocity downward each tick.
     */
    gravity: number;

    /**
     * Initial velocity ranges for individual emojis.
     */
    initialVelocities: IInitialVelocities;

    /**
     * How much to slow down the (time elapsed / framerate) opacity reduction each tick.
     */
    opacityDecay?: number;

    /**
     * Whether to skip removing emojis that move outside of the visible screen.
     */
    preserveOutOfBounds?: boolean;
    
    /**
     * Individual emojis' initial rotation range.
     */
    rotation: IRandomRange;

    /**
     * How much to decrease rotation ammount each tick.
     */
    rotationDeceleration: number;
}

/**
 * Initial velocity ranges for individual emojis.
 */
export interface IInitialVelocities {
    /**
     * Range of initial rotation amount.
     */
    rotation: IRandomRange;

    /**
     * Range of initial horizontal velocity.
     */
    x: IRandomRange;

    /**
     * Range of initial vertical velocity.
     */
    y: IRandomRange;
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
 * In-progress tracking for an actor's position.
 */
interface IEmojiVelocity extends IEmojiPosition {
    /**
     * How much the actor's element is rotated.
     */
    rotation: number;
}

/**
 * Processes an element just before it's appended to the container.
 *
 * @param element   Element about to be appended to the container.
 */
export type IEmojiProcess = (element: Element) => void;

/**
 * Pixel distance out of the screen bounds to treat actors as out-of-bounds.
 */
const outOfBounds = 350;

/**
 * Contains the position state and DOM element for a single displayed emoji.
 *
 * @remarks
 * This creates and keeps a single DOM element span in the DOM.
 * Text content for the span is determined by the provided actors.
 *
 * On each game tick, this actor will:
 *  1. Dispose itself if it's moved past out of the game screen
 *  2. Reduce opacity a little bit
 *  3. Dispose itself if it's no longer visible at all
 *  4. Adjust position and velocity as per its physics constants
 *  5. Update the DOM element's opacity and position to reflect those changes
 *
 * "Disposing" an actor means removing its element from the document.
 */
export class EmojiActor {
    /**
     * Attached element kept in the DOM.
     */
    private readonly element: HTMLSpanElement;

    /**
     * CSS opacity style, starting at 1 for fully visible.
     */
    private opacity = 1;

    /**
     * Runtime change constants for actor movements.
     */
    private readonly physics: IEmojiPhysics;

    /**
     * Current element coordinates and rotation.
     */
    private readonly position: IEmojiVelocity;

    /**
     * Change ammounts for element position.
     */
    private readonly velocity: IEmojiVelocity;

    public constructor(settings: IEmojiActorSettings) {
        this.element = document.createElement(settings.tagName);
        this.element.className = settings.className;
        this.element.style.transition = "16ms opacity, 16ms transform";
        this.element.textContent = randomArrayMember(settings.emojis);

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
        this.element.setAttribute("aria-label", "Random emoji");
        this.element.setAttribute("role", "img");
        this.element.style.fontSize = `${randomInRange(settings.physics.fontSize)}px`;

        this.physics = settings.physics;
        this.position = {
            rotation: randomInRange(settings.physics.rotation),
            x: settings.position.x,
            y: settings.position.y,
        };

        this.velocity = {
            rotation: randomInRange(settings.physics.initialVelocities.rotation),
            x: randomInRange(settings.physics.initialVelocities.x),
            y: randomInRange(settings.physics.initialVelocities.y),
        };

        this.updateElement();
        settings.process(this.element);
        settings.container.appendChild(this.element);
    }

    /**
     * Moves the actor forward one tick.
     *
     * @param timeElapsed   How many milliseconds have passed since the last action.
     * @returns Whether this is now dead.
     */
    public act(timeElapsed: number): boolean {
        if (this.physics.opacityDecay) {
            this.opacity -= timeElapsed / (this.physics.opacityDecay * this.physics.framerate);
            if (this.opacity <= 0) {
                return true;
            }
        }

        this.velocity.rotation *= this.physics.rotationDeceleration;
        this.velocity.y += this.physics.gravity;

        this.position.rotation += this.velocity.rotation;
        this.position.x += this.velocity.x * timeElapsed / this.physics.framerate;
        this.position.y += this.velocity.y * timeElapsed / this.physics.framerate;

        if (!this.physics.preserveOutOfBounds) {
            if (this.position.y - this.element.clientHeight > window.outerHeight + outOfBounds) {
                return true;
            }

            if (this.position.y + this.element.clientHeight < -outOfBounds) {
                return true;
            }

            if (this.position.x - this.element.clientWidth > window.outerWidth + outOfBounds) {
                return true;
            }

            if (this.position.x + this.element.clientWidth < -outOfBounds) {
                return true;
            }
        }

        this.updateElement();

        return false;
    }

    /**
     * Disposes of the attached DOM element upon actor death.
     */
    public dispose() {
        if (this.element.parentElement !== null) {
            this.element.parentElement.removeChild(this.element);
        }
    }

    /**
     * Updates the attached DOM element to match tracking position.
     */
    private updateElement(): void {
        this.element.style.opacity = `${this.opacity}`;
        this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px) rotate(${Math.round(this.position.rotation)}deg)`;
    }
}
