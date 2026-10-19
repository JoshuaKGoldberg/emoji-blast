import { beforeEach, describe, expect, it, vi } from "vitest";

import { EmojiActor } from "./actor.js";
import { animate } from "./animate.js";

const createFakeActor = (outOfBounds = false) => ({
	act: vi.fn(() => outOfBounds),
	dispose: vi.fn(),
});

type FakeActor = ReturnType<typeof createFakeActor>;

const asActors = (actors: FakeActor[]) => actors as unknown as EmojiActor[];

describe("animate", () => {
	let frames: FrameRequestCallback[];

	const runNextFrame = (time: number) => {
		const frame = frames.shift();
		frame?.(time);
	};

	beforeEach(() => {
		frames = [];
		vi.spyOn(performance, "now").mockReturnValue(0);
		vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
			frames.push(callback);
			return frames.length;
		});
	});

	it("calls beforeTick immediately and schedules a frame", () => {
		const actors = [createFakeActor()];
		const beforeTick = vi.fn();

		animate(asActors(actors), beforeTick);

		expect(beforeTick).toHaveBeenCalledExactlyOnceWith(actors);
		expect(frames).toHaveLength(1);
	});

	it("calls beforeTick again on each tick", () => {
		const actors = [createFakeActor()];
		const beforeTick = vi.fn();

		animate(asActors(actors), beforeTick);
		runNextFrame(16);

		expect(beforeTick).toHaveBeenCalledTimes(2);
	});

	it("does not act when beforeTick removes all actors", () => {
		const actor = createFakeActor();
		const actors = [actor];

		animate(asActors(actors), () => {
			actors.length = 0;
		});
		runNextFrame(16);

		expect(actor.act).not.toHaveBeenCalled();
		expect(frames).toHaveLength(0);
	});

	it("tells each actor to act with the time elapsed", () => {
		const actors = [createFakeActor(), createFakeActor()];

		animate(asActors(actors), undefined);
		runNextFrame(16);

		for (const actor of actors) {
			expect(actor.act).toHaveBeenCalledExactlyOnceWith(16);
		}
	});

	it("measures elapsed time from the previous tick", () => {
		const actor = createFakeActor();

		animate(asActors([actor]), undefined);
		runNextFrame(16);
		runNextFrame(40);

		expect(actor.act).toHaveBeenLastCalledWith(24);
	});

	it("disposes and removes actors that report being done", () => {
		const done = createFakeActor(true);
		const alive = createFakeActor();
		const actors = [done, alive];

		animate(asActors(actors), undefined);
		runNextFrame(16);

		expect(done.dispose).toHaveBeenCalledOnce();
		expect(alive.dispose).not.toHaveBeenCalled();
		expect(actors).toEqual([alive]);
		expect(frames).toHaveLength(1);
	});

	it("stops scheduling frames once all actors are removed", () => {
		const actors = [createFakeActor(true)];

		animate(asActors(actors), undefined);
		runNextFrame(16);

		expect(actors).toHaveLength(0);
		expect(frames).toHaveLength(0);
	});

	it("does not act after stop is called", () => {
		const actor = createFakeActor();

		const { stop } = animate(asActors([actor]), undefined);
		stop();
		runNextFrame(16);

		expect(actor.act).not.toHaveBeenCalled();
		expect(frames).toHaveLength(0);
	});
});
