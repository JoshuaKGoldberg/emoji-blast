import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { EmojiActor } from "./actor.js";
import { grabAndToss } from "./grabAndToss.js";

describe("grabAndToss", () => {
	let container: HTMLDivElement;

	const createActor = () =>
		new EmojiActor({
			className: "grab-test",
			container,
			emojis: ["🎆"],
			physics: {
				fontSize: 20,
				framerate: 60,
				gravity: { acceleration: 0.35, angle: 180 },
				initialVelocities: { rotation: 0, x: 3, y: -4 },
				rotation: 0,
				rotationDeceleration: 1,
			},
			position: { x: 100, y: 100 },
		});

	const pointer = (type: string, clientX: number, clientY: number) =>
		new MouseEvent(type, { clientX, clientY }) as PointerEvent;

	const grab = (actor: EmojiActor, clientX: number, clientY: number) => {
		grabAndToss.onPointerdown?.({
			actor,
			event: pointer("pointerdown", clientX, clientY),
		});
	};

	const move = (clientX: number, clientY: number) => {
		document.dispatchEvent(pointer("pointermove", clientX, clientY));
	};

	const release = () => {
		document.dispatchEvent(pointer("pointerup", 0, 0));
	};

	beforeEach(() => {
		vi.useFakeTimers();
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		// Make sure no drag leaks into the next test.
		vi.advanceTimersByTime(5);
		release();
		container.remove();
		vi.useRealTimers();
	});

	it("freezes the actor and shows a grabbing cursor on pointerdown", () => {
		const actor = createActor();

		grab(actor, 10, 10);

		expect(actor.gravity.acceleration).toBe(0);
		expect(actor.velocity).toMatchObject({ x: 0, y: 0 });
		expect(actor.element.style.cursor).toBe("grabbing");
	});

	it("moves the actor along with the pointer", () => {
		const actor = createActor();

		grab(actor, 10, 10);
		move(15, 30);
		move(20, 25);

		expect(actor.position).toMatchObject({ x: 110, y: 115 });
	});

	it("ignores pointer moves when nothing is grabbed", () => {
		const actor = createActor();

		move(50, 50);

		expect(actor.position).toMatchObject({ x: 100, y: 100 });
	});

	it("restores gravity and cursor on release", () => {
		const actor = createActor();

		grab(actor, 10, 10);
		vi.advanceTimersByTime(5);
		release();

		expect(actor.gravity.acceleration).toBe(0.35);
		expect(actor.element.style.cursor).toBe("grab");
	});

	it("tosses the actor in the direction it was dragged, clamped to a max velocity", () => {
		const actor = createActor();

		grab(actor, 100, 100);
		move(120, 100);
		vi.advanceTimersByTime(5);
		release();

		expect(actor.velocity.x).toBe(50);
		expect(actor.velocity.y).toBe(0);
	});

	it("stops following the pointer after release", () => {
		const actor = createActor();

		grab(actor, 10, 10);
		vi.advanceTimersByTime(5);
		release();
		move(100, 100);

		expect(actor.position).toMatchObject({ x: 100, y: 100 });
	});

	it("ignores a second grab while one is in progress", () => {
		const first = createActor();
		const second = createActor();

		grab(first, 10, 10);
		grab(second, 10, 10);

		expect(second.element.style.cursor).toBe("");
		expect(second.velocity).toMatchObject({ x: 3, y: -4 });
	});
});
