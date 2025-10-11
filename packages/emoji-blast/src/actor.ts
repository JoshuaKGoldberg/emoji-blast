import { randomInRange, RandomRange } from "./range.js";
import { randomArrayMember } from "./utils.js";

/**
 * Settings to create a single emoji within a container.
 */
export interface EmojiActorSettings {
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
	physics: EmojiPhysics;

	/**
	 * How to determine where to place blasts of emojis around the page.
	 */
	position: EmojiPosition;

	/**
	 * Processes each element just before it's appended to the container.
	 */
	process?: EmojiProcess;
}

/**
 * Runtime change constants for actor movements.
 */
export interface EmojiPhysics {
	/**
	 * Individual emojis' font size range.
	 */
	fontSize: RandomRange;

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
	initialVelocities: InitialVelocities;

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
	rotation: RandomRange;

	/**
	 * How much to decrease rotation amount each tick.
	 */
	rotationDeceleration: number;
}

/**
 * Initial velocity ranges for individual emojis.
 */
export interface InitialVelocities {
	/**
	 * Range of initial rotation amount.
	 */
	rotation: RandomRange;

	/**
	 * Range of initial horizontal velocity.
	 */
	x: RandomRange;

	/**
	 * Range of initial vertical velocity.
	 */
	y: RandomRange;
}

/**
 * Absolute CSS position to place an emoji element at.
 */
export interface EmojiPosition {
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
export type EmojiVelocity = EmojiPosition & {
	/**
	 * How much the actor's element is rotated.
	 */
	rotation: number;
};

/**
 * Processes an element just before it's appended to the container.
 * @param element Element about to be appended to the container.
 */
export type EmojiProcess = (element: Element) => void;

/**
 * Updates to apply to an emoji's position.
 */
export interface EmojiUpdates {
	/**
	 * Updated emoji opacity, if it should change.
	 */
	opacity?: number;

	/**
	 * Any position changes, if they should change.
	 */
	position?: Partial<EmojiVelocity>;

	/**
	 * Any velocity changes, if they should change.
	 */
	velocity?: Partial<EmojiVelocity>;

	/**
	 * Gravitation changes, if it should change.
	 */
	gravity?: number;
}

/**
 * Pixel distance out of the screen bounds to treat actors as out-of-bounds.
 */
const outOfBounds = 350;

/**
 * Contains the position, velocity, and DOM element for a single emoji.
 *
 * This creates and keeps a single DOM element button in the DOM.
 * Text content for the button is determined by the provided actors.
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
	 * CSS opacity style, starting at 1 for fully visible.
	 */
	#opacity = 1;

	/**
	 * Runtime change constants for actor movements.
	 */
	#physics: EmojiPhysics;

	/**
	 * Current element coordinates and rotation.
	 */
	#position: EmojiVelocity;

	/**
	 * Change amounts for element position.
	 */
	#velocity: EmojiVelocity;

	/**
	 * Change amounts for elements y-axis
	 */
	#gravity: number;

	/**
	 * Attached element kept in the DOM.
	 */
	public readonly element: HTMLSpanElement;

	public constructor(settings: EmojiActorSettings) {
		this.element = document.createElement("button");
		this.element.className = settings.className;
		this.element.textContent = randomArrayMember(settings.emojis);
		this.element.setAttribute("role", "img");
		this.element.style.fontSize = `${randomInRange(
			settings.physics.fontSize,
		)}px`;
		this.element.style.transition = "16ms opacity, 16ms transform";

		this.#physics = settings.physics;

		this.#position = {
			rotation: randomInRange(settings.physics.rotation),
			x: settings.position.x,
			y: settings.position.y,
		};

		this.#velocity = {
			rotation: randomInRange(settings.physics.initialVelocities.rotation),
			x: randomInRange(settings.physics.initialVelocities.x),
			y: randomInRange(settings.physics.initialVelocities.y),
		};

		this.#gravity = randomInRange(settings.physics.gravity);

		this.updateElement();
		settings.process?.(this.element);
		settings.container.appendChild(this.element);
	}

	/**
	 * Updates the attached DOM element to match tracking position.
	 */
	private updateElement(): void {
		this.element.style.opacity = `${this.#opacity}`;
		this.element.style.transform = `translate(${this.#position.x}px, ${
			this.#position.y
		}px) rotate(${Math.round(this.#position.rotation)}deg)`;
	}

	/**
	 * Moves the actor forward one tick.
	 * @param timeElapsed How many milliseconds have passed since the last action.
	 * @returns Whether this is now dead.
	 */
	public act(timeElapsed: number): boolean {
		if (this.#physics.opacityDecay) {
			this.#opacity -=
				timeElapsed / (this.#physics.opacityDecay * this.#physics.framerate);
			if (this.#opacity <= 0) {
				return true;
			}
		}

		this.#velocity.rotation *= this.#physics.rotationDeceleration;
		this.#velocity.y += this.#gravity;

		this.#position.rotation += this.#velocity.rotation;
		this.#position.x +=
			(this.#velocity.x * timeElapsed) / this.#physics.framerate;
		this.#position.y +=
			(this.#velocity.y * timeElapsed) / this.#physics.framerate;

		const windowHeight =
			window.outerHeight || document.documentElement.clientHeight;
		const windowWidth =
			window.outerWidth || document.documentElement.clientWidth;

		if (!this.#physics.preserveOutOfBounds) {
			if (
				this.#position.y - this.element.clientHeight >
				windowHeight + outOfBounds
			) {
				return true;
			}

			if (this.#position.y + this.element.clientHeight < -outOfBounds) {
				return true;
			}

			if (
				this.#position.x - this.element.clientWidth >
				windowWidth + outOfBounds
			) {
				return true;
			}

			if (this.#position.x + this.element.clientWidth < -outOfBounds) {
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
	 * Updates the emoji for being moved.
	 */
	public update(updates: EmojiUpdates) {
		if (updates.opacity !== undefined) {
			this.#opacity = updates.opacity;
		}

		if (updates.velocity !== undefined) {
			if (updates.velocity.rotation !== undefined) {
				this.#velocity.rotation = updates.velocity.rotation;
			}

			if (updates.velocity.x !== undefined) {
				this.#velocity.x = updates.velocity.x;
			}

			if (updates.velocity.y !== undefined) {
				this.#velocity.y = updates.velocity.y;
			}
		}

		if (updates.position !== undefined) {
			if (updates.position.rotation !== undefined) {
				this.#position.rotation = updates.position.rotation;
			}

			if (updates.position.x !== undefined) {
				this.#position.x = updates.position.x;
			}

			if (updates.position.y !== undefined) {
				this.#position.y = updates.position.y;
			}
		}

		if (updates.gravity !== undefined) {
			this.#gravity = updates.gravity;
		}
	}

	/**
	 * CSS opacity style, starting at 1 for fully visible.
	 */
	public get opacity() {
		return this.#opacity;
	}

	/**
	 * Current element coordinates and rotation.
	 */
	public get position(): Readonly<EmojiPosition> {
		return this.#position;
	}

	/**
	 * Change amounts for element's y-axis.
	 */
	public get gravity(): Readonly<number> {
		return this.#gravity;
	}

	/**
	 * Change amounts for element position.
	 */
	public get velocity(): Readonly<EmojiVelocity> {
		return this.#velocity;
	}
}
