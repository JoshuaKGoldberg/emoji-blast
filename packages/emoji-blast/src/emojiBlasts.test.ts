import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { emojiBlasts, EmojiScheduler } from "./emojiBlasts.js";

describe("emojiBlasts", () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		vi.stubGlobal("requestAnimationFrame", vi.fn());
		vi.spyOn(document, "visibilityState", "get").mockReturnValue("visible");
	});

	afterEach(() => {
		container.remove();
	});

	const createScheduler = () => {
		const scheduled: (() => void)[] = [];
		const scheduler = vi.fn<EmojiScheduler>((action) => {
			scheduled.push(action);
		});
		const runNext = () => scheduled.shift()?.();

		return { runNext, scheduler };
	};

	it("schedules the first blast immediately", () => {
		const { scheduler } = createScheduler();

		emojiBlasts({ container, emojiCount: 1, scheduler });

		expect(scheduler).toHaveBeenCalledOnce();
		expect(scheduler.mock.lastCall?.[1]).toBe(0);
		expect(container.children).toHaveLength(0);
	});

	it("blasts and schedules the next blast with the interval", () => {
		const { runNext, scheduler } = createScheduler();

		emojiBlasts({ container, emojiCount: 2, interval: 500, scheduler });
		runNext();

		expect(container.children).toHaveLength(2);
		expect(scheduler.mock.lastCall?.[1]).toBe(500);

		runNext();

		expect(container.children).toHaveLength(4);
	});

	it("does not blast while the page is hidden, but keeps scheduling", () => {
		vi.spyOn(document, "visibilityState", "get").mockReturnValue("hidden");
		const { runNext, scheduler } = createScheduler();

		emojiBlasts({ container, emojiCount: 2, interval: 500, scheduler });
		runNext();

		expect(container.children).toHaveLength(0);
		expect(scheduler).toHaveBeenCalledTimes(2);
	});

	it("stops blasting and scheduling after cancel", () => {
		const { runNext, scheduler } = createScheduler();

		const { cancel } = emojiBlasts({ container, emojiCount: 2, scheduler });
		cancel();
		runNext();

		expect(container.children).toHaveLength(0);
		expect(scheduler).toHaveBeenCalledOnce();
	});

	it("blasts on demand with blast()", () => {
		const { scheduler } = createScheduler();

		const { blast } = emojiBlasts({ container, emojiCount: 3, scheduler });
		blast();

		expect(container.children).toHaveLength(3);
	});

	it("uses setTimeout by default", () => {
		try {
			vi.useFakeTimers();

			const { cancel } = emojiBlasts({
				container,
				emojiCount: 1,
				interval: 100,
			});
			vi.advanceTimersByTime(0);

			expect(container.children).toHaveLength(1);

			vi.advanceTimersByTime(100);

			expect(container.children).toHaveLength(2);

			cancel();
		} finally {
			vi.useRealTimers();
		}
	});
});
