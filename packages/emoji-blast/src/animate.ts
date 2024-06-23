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
	const tick = (currentTime: number): void => {
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
		requestAnimationFrame(tick);
	};

	requestAnimationFrame(tick);

	return {
		stop: () => {
			stopped = true;
		},
	};
}
