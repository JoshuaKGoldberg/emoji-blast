import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { defaultCreateContainer, emojiBlast } from "./emojiBlast.js";

describe("emojiBlast", () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		vi.stubGlobal("requestAnimationFrame", vi.fn());
	});

	afterEach(() => {
		container.remove();
	});

	it("throws when physics.gravity is a number", () => {
		expect(() =>
			emojiBlast({
				container,
				// @ts-expect-error -- testing the legacy number form
				physics: { gravity: 1 },
			}),
		).toThrow(TypeError);
	});

	it("creates emojiCount emoji elements in the container", () => {
		emojiBlast({ container, emojiCount: 5 });

		expect(container.children).toHaveLength(5);
	});

	it("accepts settings as functions", () => {
		emojiBlast({
			container: () => container,
			emojiCount: () => 3,
			emojis: () => ["🎉"],
		});

		expect(container.children).toHaveLength(3);
		expect(container.textContent).toBe("🎉🎉🎉");
	});

	it("only uses the provided emojis", () => {
		emojiBlast({ container, emojiCount: 20, emojis: ["🎉", "✨"] });

		for (const element of container.children) {
			expect(["🎉", "✨"]).toContain(element.textContent);
		}
	});

	it("limits the number of different emojis to uniqueness", () => {
		emojiBlast({
			container,
			emojiCount: 30,
			emojis: ["🎉", "✨", "🎆", "🎇"],
			uniqueness: 1,
		});

		const used = new Set(
			[...container.children].map((element) => element.textContent),
		);

		expect(used.size).toBe(1);
	});

	it("applies the class name and registers its styles", () => {
		emojiBlast({ className: "blast-test", container, emojiCount: 1 });

		expect(container.children[0].className).toBe("blast-test");
		expect(document.head.textContent).toContain(".blast-test {");
	});

	it("places emojis at the provided position", () => {
		emojiBlast({
			container,
			emojiCount: 1,
			physics: { rotation: 0 },
			position: { x: 12, y: 34 },
		});

		expect((container.children[0] as HTMLElement).style.transform).toBe(
			"translate(12px, 34px) rotate(0deg)",
		);
	});

	it("calls process for each emoji element", () => {
		const process = vi.fn();

		emojiBlast({ container, emojiCount: 2, process });

		expect(process).toHaveBeenCalledTimes(2);
	});

	it("starts animating and returns a stop handler", () => {
		const tick = vi.fn();

		emojiBlast({ container, emojiCount: 1, tick });

		expect(tick).toHaveBeenCalledOnce();
		expect(requestAnimationFrame).toHaveBeenCalledOnce();
	});

	it("uses a default container prepended to the body", () => {
		emojiBlast({ emojiCount: 1 });

		const defaultContainer = defaultCreateContainer();

		expect(document.body.firstElementChild).toBe(defaultContainer);
		expect(defaultContainer.children.length).toBeGreaterThan(0);

		defaultContainer.remove();
	});
});

describe("defaultCreateContainer", () => {
	it("reuses the container while it is in the body", () => {
		const first = defaultCreateContainer();

		expect(defaultCreateContainer()).toBe(first);

		first.remove();
	});

	it("creates a new container after the previous one was removed", () => {
		const first = defaultCreateContainer();
		first.remove();

		const second = defaultCreateContainer();

		expect(second).not.toBe(first);
		expect(second.parentNode).toBe(document.body);

		second.remove();
	});
});
