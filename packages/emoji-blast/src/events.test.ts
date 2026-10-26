import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { EmojiActor } from "./actor.js";
import { initializeEvents } from "./events.js";

describe("initializeEvents", () => {
	let container: HTMLDivElement;

	const createActor = () =>
		new EmojiActor({
			className: "events-test",
			container,
			emojis: ["🎆"],
			physics: {
				fontSize: 20,
				framerate: 60,
				gravity: { acceleration: 0, angle: 180 },
				initialVelocities: { rotation: 0, x: 0, y: 0 },
				rotation: 0,
				rotationDeceleration: 1,
			},
			position: { x: 0, y: 0 },
		});

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		container.remove();
	});

	it("marks the container as initialized", () => {
		initializeEvents([], container, {});

		expect(container.getAttribute("data-emoji-blast-events-initialized")).toBe(
			"true",
		);
	});

	it("calls onClick with the actor when its element is clicked", () => {
		const actor = createActor();
		const onClick = vi.fn();

		initializeEvents([actor], container, { onClick });
		actor.element.click();

		expect(onClick).toHaveBeenCalledOnce();
		expect(onClick.mock.calls[0][0]).toMatchObject({
			actor,
		});
	});

	it("calls onPointerdown with the actor on pointerdown", () => {
		const actor = createActor();
		const onPointerdown = vi.fn();

		initializeEvents([actor], container, { onPointerdown });
		actor.element.dispatchEvent(new Event("pointerdown", { bubbles: true }));

		expect(onPointerdown).toHaveBeenCalledOnce();
		expect(onPointerdown.mock.calls[0][0]).toMatchObject({
			actor,
		});
	});

	it("does not call handlers for elements that are not actors", () => {
		const onClick = vi.fn();
		const other = document.createElement("span");
		container.appendChild(other);

		initializeEvents([], container, { onClick });
		other.click();
		container.click();

		expect(onClick).not.toHaveBeenCalled();
	});

	it("registers new actors without adding duplicate listeners", () => {
		const first = createActor();
		const second = createActor();
		const onClick = vi.fn();

		initializeEvents([first], container, { onClick });
		initializeEvents([second], container, { onClick });
		second.element.click();

		expect(onClick).toHaveBeenCalledOnce();
		expect(onClick.mock.calls[0][0]).toMatchObject({
			actor: second,
		});
	});
});
