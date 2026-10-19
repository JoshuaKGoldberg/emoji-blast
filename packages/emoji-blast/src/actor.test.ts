import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { EmojiActor, EmojiActorSettings, EmojiPhysics } from "./actor.js";

describe("EmojiActor", () => {
	let container: HTMLDivElement;

	const createPhysics = (
		overrides: Partial<EmojiPhysics> = {},
	): EmojiPhysics => ({
		fontSize: 20,
		framerate: 60,
		gravity: { acceleration: 0, angle: 180 },
		initialVelocities: { rotation: 0, x: 0, y: 0 },
		rotation: 0,
		rotationDeceleration: 1,
		...overrides,
	});

	const createActor = (
		overrides: Partial<Omit<EmojiActorSettings, "physics">> & {
			physics?: Partial<EmojiPhysics>;
		} = {},
	) =>
		new EmojiActor({
			className: "emoji-test",
			container,
			emojis: ["🎆"],
			position: { x: 100, y: 200 },
			...overrides,
			physics: createPhysics(overrides.physics),
		});

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		container.remove();
	});

	describe("constructor", () => {
		it("creates a button element with the provided settings", () => {
			const actor = createActor({ physics: { fontSize: 32 } });

			expect(actor.element).toBeInstanceOf(HTMLButtonElement);
			expect(actor.element.className).toBe("emoji-test");
			expect(actor.element.textContent).toBe("🎆");
			expect(actor.element.getAttribute("role")).toBe("img");
			expect(actor.element.style.fontSize).toBe("32px");
			expect(actor.element.style.transition).toBe(
				"16ms opacity, 16ms transform",
			);
		});

		it("appends the element into the container", () => {
			const actor = createActor();

			expect(actor.element.parentElement).toBe(container);
			expect(container.children).toHaveLength(1);
		});

		it("picks a random emoji from the provided emojis", () => {
			vi.spyOn(Math, "random").mockReturnValue(0.5);

			const actor = createActor({ emojis: ["🎆", "🎇", "✨", "🎉"] });

			expect(actor.element.textContent).toBe("✨");
		});

		it("calls process with the element before it is appended", () => {
			const process = vi.fn((element: Element) => {
				expect(element.parentElement).toBeNull();
				element.setAttribute("data-processed", "true");
			});

			const actor = createActor({ process });

			expect(process).toHaveBeenCalledExactlyOnceWith(actor.element);
			expect(actor.element.getAttribute("data-processed")).toBe("true");
		});

		it("sets initial position, velocity, and gravity from fixed numbers", () => {
			const actor = createActor({
				physics: {
					gravity: { acceleration: 0.5, angle: 90 },
					initialVelocities: { rotation: 3, x: 4, y: -5 },
					rotation: 45,
				},
				position: { x: 10, y: 20 },
			});

			expect(actor.opacity).toBe(1);
			expect(actor.position).toEqual({ rotation: 45, x: 10, y: 20 });
			expect(actor.velocity).toEqual({ rotation: 3, x: 4, y: -5 });
			expect(actor.gravity).toEqual({ acceleration: 0.5, angle: 90 });
		});

		it("sets initial values from random ranges", () => {
			vi.spyOn(Math, "random").mockReturnValue(0);

			const actor = createActor({
				physics: {
					fontSize: { max: 30, min: 10 },
					initialVelocities: {
						rotation: { max: 7, min: -7 },
						x: { max: 5, min: -5 },
						y: { max: -1, min: -10 },
					},
					rotation: { max: 90, min: -90 },
				},
			});

			expect(actor.element.style.fontSize).toBe("10px");
			expect(actor.position).toHaveProperty("rotation", -90);
			expect(actor.velocity).toEqual({ rotation: -7, x: -5, y: -10 });
		});

		it("renders the initial opacity and transform", () => {
			const actor = createActor({
				physics: { rotation: 12.6 },
				position: { x: 15, y: 25 },
			});

			expect(actor.element.style.opacity).toBe("1");
			expect(actor.element.style.transform).toBe(
				"translate(15px, 25px) rotate(13deg)",
			);
		});
	});

	describe("act", () => {
		it("does not reduce opacity when opacityDecay is not provided", () => {
			const actor = createActor();

			expect(actor.act(1000)).toBe(false);
			expect(actor.opacity).toBe(1);
		});

		it("reduces opacity by timeElapsed relative to opacityDecay and framerate", () => {
			const actor = createActor({
				physics: { framerate: 60, opacityDecay: 10 },
			});

			expect(actor.act(60)).toBe(false);
			expect(actor.opacity).toBeCloseTo(0.9);
			expect(actor.element.style.opacity).toBe(`${actor.opacity}`);
		});

		it("returns true once opacity reaches zero", () => {
			const actor = createActor({
				physics: { framerate: 60, opacityDecay: 1 },
			});

			expect(actor.act(60)).toBe(true);
			expect(actor.opacity).toBeLessThanOrEqual(0);
		});

		it("does not update the element when opacity reaches zero", () => {
			const actor = createActor({
				physics: { framerate: 60, opacityDecay: 1 },
			});
			const transform = actor.element.style.transform;

			actor.act(60);

			expect(actor.element.style.opacity).toBe("1");
			expect(actor.element.style.transform).toBe(transform);
		});

		it("decelerates rotation velocity and applies it to rotation", () => {
			const actor = createActor({
				physics: {
					initialVelocities: { rotation: 10, x: 0, y: 0 },
					rotation: 0,
					rotationDeceleration: 0.5,
				},
			});

			actor.act(16);

			expect(actor.velocity.rotation).toBe(5);
			expect(actor.position).toHaveProperty("rotation", 5);

			actor.act(16);

			expect(actor.velocity.rotation).toBe(2.5);
			expect(actor.position).toHaveProperty("rotation", 7.5);
		});

		it("moves position by velocity scaled by timeElapsed over framerate", () => {
			const actor = createActor({
				physics: {
					framerate: 60,
					initialVelocities: { rotation: 0, x: 6, y: -3 },
				},
				position: { x: 100, y: 200 },
			});

			actor.act(30);

			expect(actor.position.x).toBe(103);
			expect(actor.position.y).toBe(198.5);
		});

		it("applies downwards gravity when the angle is 180", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: 2, angle: 180 } },
			});

			actor.act(60);

			expect(actor.velocity.x).toBeCloseTo(0);
			expect(actor.velocity.y).toBeCloseTo(2);
			expect(actor.position.y).toBeCloseTo(202);
		});

		it("applies upwards gravity when the angle is 0", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: 2, angle: 0 } },
			});

			actor.act(60);

			expect(actor.velocity.x).toBeCloseTo(0);
			expect(actor.velocity.y).toBeCloseTo(-2);
		});

		it("applies rightwards gravity when the angle is 90", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: 2, angle: 90 } },
			});

			actor.act(60);

			expect(actor.velocity.x).toBeCloseTo(2);
			expect(actor.velocity.y).toBeCloseTo(0);
		});

		it("applies diagonal gravity when the angle is 225", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: Math.SQRT2, angle: 225 } },
			});

			actor.act(60);

			expect(actor.velocity.x).toBeCloseTo(-1);
			expect(actor.velocity.y).toBeCloseTo(1);
		});

		it("accumulates gravity over multiple ticks", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: 1, angle: 180 } },
			});

			actor.act(60);
			actor.act(60);
			actor.act(60);

			expect(actor.velocity.y).toBeCloseTo(3);
			expect(actor.position.y).toBeCloseTo(206);
		});

		it("updates the element to reflect the new position", () => {
			const actor = createActor({
				physics: {
					framerate: 60,
					initialVelocities: { rotation: 20, x: 10, y: 5 },
				},
				position: { x: 0, y: 0 },
			});

			actor.act(60);

			expect(actor.element.style.transform).toBe(
				"translate(10px, 5px) rotate(20deg)",
			);
		});

		it.each([
			["below", { x: 0, y: 100_000 }],
			["above", { x: 0, y: -100_000 }],
			["right of", { x: 100_000, y: 0 }],
			["left of", { x: -100_000, y: 0 }],
		])("returns true when moved %s the screen", (_, position) => {
			const actor = createActor({ position });

			expect(actor.act(16)).toBe(true);
		});

		it("returns false when slightly outside of the screen but within bounds", () => {
			const actor = createActor({ position: { x: -100, y: -100 } });

			expect(actor.act(16)).toBe(false);
		});

		it("returns false when out of bounds and preserveOutOfBounds is true", () => {
			const actor = createActor({
				physics: { preserveOutOfBounds: true },
				position: { x: 100_000, y: 100_000 },
			});

			expect(actor.act(16)).toBe(false);
			expect(actor.element.style.transform).toBe(
				"translate(100000px, 100000px) rotate(0deg)",
			);
		});
	});

	describe("dispose", () => {
		it("removes the element from its parent", () => {
			const actor = createActor();

			actor.dispose();

			expect(actor.element.parentElement).toBeNull();
			expect(container.children).toHaveLength(0);
		});

		it("does not throw when the element was already removed", () => {
			const actor = createActor();

			actor.dispose();

			expect(() => {
				actor.dispose();
			}).not.toThrow();
		});
	});

	describe("update", () => {
		it("does not change anything when given no updates", () => {
			const actor = createActor({
				physics: {
					gravity: { acceleration: 1, angle: 90 },
					initialVelocities: { rotation: 1, x: 2, y: 3 },
				},
			});

			actor.update({});

			expect(actor.opacity).toBe(1);
			expect(actor.position).toEqual({ rotation: 0, x: 100, y: 200 });
			expect(actor.velocity).toEqual({ rotation: 1, x: 2, y: 3 });
			expect(actor.gravity).toEqual({ acceleration: 1, angle: 90 });
		});

		it("updates opacity", () => {
			const actor = createActor();

			actor.update({ opacity: 0.25 });

			expect(actor.opacity).toBe(0.25);
		});

		it("updates opacity to zero", () => {
			const actor = createActor();

			actor.update({ opacity: 0 });

			expect(actor.opacity).toBe(0);
		});

		it("updates only the provided velocity fields", () => {
			const actor = createActor({
				physics: { initialVelocities: { rotation: 1, x: 2, y: 3 } },
			});

			actor.update({ velocity: { x: 20 } });

			expect(actor.velocity).toEqual({ rotation: 1, x: 20, y: 3 });

			actor.update({ velocity: { rotation: 10, y: 30 } });

			expect(actor.velocity).toEqual({ rotation: 10, x: 20, y: 30 });
		});

		it("updates only the provided position fields", () => {
			const actor = createActor();

			actor.update({ position: { y: 50 } });

			expect(actor.position).toEqual({ rotation: 0, x: 100, y: 50 });

			actor.update({ position: { rotation: 90, x: 5 } });

			expect(actor.position).toEqual({ rotation: 90, x: 5, y: 50 });
		});

		it("updates only the provided gravity fields", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: 1, angle: 180 } },
			});

			actor.update({ gravity: { angle: 90 } });

			expect(actor.gravity).toEqual({ acceleration: 1, angle: 90 });

			actor.update({ gravity: { acceleration: 3 } });

			expect(actor.gravity).toEqual({ acceleration: 3, angle: 90 });
		});

		it("applies updated gravity on subsequent ticks", () => {
			const actor = createActor({
				physics: { gravity: { acceleration: 1, angle: 180 } },
			});

			actor.update({ gravity: { acceleration: 2, angle: 270 } });
			actor.act(60);

			expect(actor.velocity.x).toBeCloseTo(-2);
			expect(actor.velocity.y).toBeCloseTo(0);
		});

		it("does not re-render the element until the next tick", () => {
			const actor = createActor({ position: { x: 0, y: 0 } });

			actor.update({ opacity: 0.5, position: { x: 40, y: 50 } });

			expect(actor.element.style.opacity).toBe("1");
			expect(actor.element.style.transform).toBe(
				"translate(0px, 0px) rotate(0deg)",
			);

			actor.act(16);

			expect(actor.element.style.opacity).toBe("0.5");
			expect(actor.element.style.transform).toBe(
				"translate(40px, 50px) rotate(0deg)",
			);
		});
	});
});
