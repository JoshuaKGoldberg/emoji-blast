import { beforeAll, describe, expect, it, vi } from "vitest";

import { emojiBlast } from "../emojiBlast.js";

vi.mock("../emojiBlast.js");

const createTouchMove = (touches: { clientX: number; clientY: number }[]) => {
	const event = new Event("touchmove");

	Object.defineProperty(event, "touches", {
		value: {
			item: (index: number) => touches[index] ?? null,
			length: touches.length,
		},
	});

	return event;
};

describe("onclick", () => {
	beforeAll(async () => {
		await import("./onclick.js");
	});

	it("does not blast until the user interacts", () => {
		expect(emojiBlast).not.toHaveBeenCalled();
	});

	it("blasts at the click position", () => {
		document.dispatchEvent(
			new MouseEvent("click", { clientX: 10, clientY: 20 }),
		);

		expect(emojiBlast).toHaveBeenCalledExactlyOnceWith({
			position: { x: 10, y: 20 },
		});
	});

	it("blasts at the drag position", () => {
		document.dispatchEvent(
			new MouseEvent("drag", { clientX: 30, clientY: 40 }),
		);

		expect(emojiBlast).toHaveBeenCalledExactlyOnceWith({
			position: { x: 30, y: 40 },
		});
	});

	it("blasts once per touch on touchmove", () => {
		document.dispatchEvent(
			createTouchMove([
				{ clientX: 1, clientY: 2 },
				{ clientX: 3, clientY: 4 },
			]),
		);

		expect(emojiBlast).toHaveBeenCalledTimes(2);
		expect(emojiBlast).toHaveBeenNthCalledWith(1, { position: { x: 1, y: 2 } });
		expect(emojiBlast).toHaveBeenNthCalledWith(2, { position: { x: 3, y: 4 } });
	});
});
