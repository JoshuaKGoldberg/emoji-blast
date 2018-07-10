import { EmojiActor } from "./actor";

export class Animator {
    private readonly actors: EmojiActor[] = [];

    private previousTime = -Infinity;

    public add(actor: EmojiActor) {
        this.actors.push(actor);
    }

    public start(): this {
        this.previousTime = performance.now();

        requestAnimationFrame(this.tick);

        return this;
    }

    private readonly tick = (currentTime: number): void => {
        const timeElapsed = currentTime - this.previousTime;

        for (let i = 0; i < this.actors.length; i += 1) {
            const actor = this.actors[i];

            // Todo: this.screen?
            if (actor.act(timeElapsed, window)) {
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
