import { describe, expect, it, vi } from "vitest";

import { EmojiEventData, EmojiEvents } from "./events";
import { mergeFunctionObjects } from "./mergeFunctions";

describe("mergeFunctionObjects", () => {
	it("runs all merged functions", () => {
		const eventObject1: EmojiEvents = { onClick: vi.fn() };
		const eventObject2: EmojiEvents = { onClick: vi.fn() };

		mergeFunctionObjects(eventObject1, eventObject2).onClick?.(
			{} as EmojiEventData<PointerEvent>,
		);

		expect(eventObject1.onClick).toHaveBeenCalledTimes(1);
		expect(eventObject2.onClick).toHaveBeenCalledTimes(1);
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

		mergeFunctionObjects(eventObject1, eventObject2).onClick?.(
			{} as EmojiEventData<PointerEvent>,
		);

		mergeFunctionObjects(eventObject1, eventObject2).onPointerdown?.(
			{} as EmojiEventData<PointerEvent>,
		);

		expect(eventObject1.onClick).toHaveBeenCalledTimes(1);
		expect(eventObject2.onPointerdown).toHaveBeenCalledTimes(1);
	});

	it("handles when nothing is in objects", () => {
		expect(mergeFunctionObjects({}, {})).toEqual({});
	});
});
