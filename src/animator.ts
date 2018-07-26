import { EmojiActor } from "./actor";

/**
 * Runs the regular gameplay loop of telling actors to animate.
 *
 * Each game "tick" is scheduled using `requestAnimationFrame`.
 * During each tick, each actor is told to `act` with the time elapsed.
 * If it indicates that it's out of bounds, it's removed from the actors array.
 */
export class Animator {
    /**
     * Actors that have been added and not yet marked themselves as out of bounds.
     */
    private readonly actors: EmojiActor[] = [];

    /**
     * Most recently time recorded by `requestAnimationFrame`.
     */
    private previousTime!: number;

    /**
     * Adds a new actor to act on each tick.
     *
     * @param actor   Newly created actor to add.
     */
    public add(actor: EmojiActor) {
        this.actors.push(actor);
    }

    /**
     * Starts gameplay and requests the first tick.
     */
    public start(): this {
        this.previousTime = performance.now();

        requestAnimationFrame(this.tick);

        return this;
    }

    /**
     * Runs game logic for one tick.
     *
     * @param currentTime   Current time, in milliseconds since page load.
     */
    private readonly tick = (currentTime: number): void => {
        const timeElapsed = currentTime - this.previousTime;

        for (let i = 0; i < this.actors.length; i += 1) {
            const actor = this.actors[i];

            if (actor.act(timeElapsed)) {
                actor.dispose();
                this.actors.splice(i, 1);
                i -= 1;
                continue;
            }
        }

        this.previousTime = currentTime;
        requestAnimationFrame(this.tick);
    }
}
