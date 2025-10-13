import { describe, expect, it, vi } from "vitest";

import { EmojiEventData, EmojiEvents } from "./events";
import { mergeFunctionObjects } from "./mergeFunctions";

describe("mergeFunctionObjects", () => {
	it("runs all merged functions", () => {
		const eventObject1: EmojiEvents = { onClick: vi.fn() };
		const eventObject2: EmojiEvents = { onClick: vi.fn() };

		const event = {} as EmojiEventData<PointerEvent>;
		mergeFunctionObjects(eventObject1, eventObject2).onClick?.(event);

		expect(eventObject1.onClick).toHaveBeenCalledExactlyOnceWith(event);
		expect(eventObject2.onClick).toHaveBeenCalledExactlyOnceWith(event);
	});

	it("handles undefined fields", () => {
		const eventObject1: EmojiEvents = {
			onClick: vi.fn(),
			onPointerdown: undefined,
		};
		const eventObject2: EmojiEvents = {
			onClick: undefined,
			onPointerdown: vi.fn(),
		};

		const clickEvent = {} as EmojiEventData<PointerEvent>;
		mergeFunctionObjects(eventObject1, eventObject2).onClick?.(clickEvent);

		const pointerDownEvent = {} as EmojiEventData<PointerEvent>;
		mergeFunctionObjects(eventObject1, eventObject2).onPointerdown?.(
			pointerDownEvent,
		);

		expect(eventObject1.onClick).toHaveBeenCalledExactlyOnceWith(clickEvent);
		expect(eventObject2.onPointerdown).toHaveBeenCalledExactlyOnceWith(
			pointerDownEvent,
		);
	});

	it("handles when nothing is in objects", () => {
		expect(mergeFunctionObjects({}, {})).toEqual({});
	});
});
