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

/**
 * Hook to call on each tick.
 * @param actors   Each actor in play at the time.
 */
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
	let timeStart = performance.now();
	let stopped = false;

	const stop = () => {
		stopped = true;
	};

	beforeTick?.(actors);

	// TypeScript doesn't know that beforeTick() might change stopped.
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (stopped) {
		return { stop };
	}

	/**
	 * Runs game logic for one tick.
	 * @param timeCurrent   Current time, in milliseconds since page load.
	 */
	const runTick = (timeCurrent: number): void => {
		if (stopped) {
			return;
		}

		beforeTick?.(actors);
		if (actors.length === 0) {
			return;
		}

		const timeElapsed = timeCurrent - timeStart;

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

		timeStart = timeCurrent;

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (!stopped) {
			requestAnimationFrame(runTick);
		}
	};

	requestAnimationFrame(runTick);

	return { stop };
}
