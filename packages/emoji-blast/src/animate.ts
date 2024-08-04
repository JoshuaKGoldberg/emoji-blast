import { EmojiActor } from "./actor.js";

/**
 * Returned handler for an ongoing blasts of emojis run.
 */
export interface EmojiBlastHandler {
	/**
	 * Stops physics in the emojiBlast ticks.
	 */
	stop: () => void;
}

export type EmojiTick = (actors: EmojiActor[]) => void;

/**
 * Starts the regular gameplay loop of telling actors to animate.
 *
 * Each game "tick" is scheduled using `requestAnimationFrame`.
 * During each tick, each actor is told to `act` with the time elapsed.
 * If it indicates that it's out of bounds, it's removed from the actors array.
 */
export function animate(
	/**
	 * Actors that have been added and not yet marked themselves as out of bounds.
	 */
	actors: EmojiActor[],

	/**
	 * Handler to run before each tick, if provided
	 */
	beforeTick: EmojiTick | undefined,
) {
	/**
	 * Most recently time recorded by `requestAnimationFrame`.
	 */
	let previousTime = performance.now();

	let stopped = false;

	/**
	 * Runs game logic for one tick.
	 * @param currentTime   Current time, in milliseconds since page load.
	 */
	const runTick = (currentTime: number): void => {
		if (stopped) {
			return;
		}

		beforeTick?.(actors);

		// TypeScript doesn't know that beforeTick() might change stopped.
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (stopped) {
			return;
		}

		const timeElapsed = currentTime - previousTime;

		for (let i = 0; i < actors.length; i += 1) {
			const actor = actors[i];

			if (actor.act(timeElapsed)) {
				actor.dispose();
				actors.splice(i, 1);
				i -= 1;
				continue;
			}
		}

		if (actors.length === 0) {
			return;
		}

		previousTime = currentTime;
		requestAnimationFrame(runTick);
	};

	requestAnimationFrame(runTick);

	return {
		stop: () => {
			stopped = true;
		},
	};
}
