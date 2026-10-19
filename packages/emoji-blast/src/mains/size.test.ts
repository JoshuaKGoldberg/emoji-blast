import { describe, expect, it, vi } from "vitest";

import { emojiBlasts } from "../emojiBlasts.js";

vi.mock("../emojiBlasts.js");

describe("size", () => {
	it("starts heart emoji blasts with larger sizes and counts on import", async () => {
		await import("./size.js");

		expect(emojiBlasts).toHaveBeenCalledOnce();

		const settings = vi.mocked(emojiBlasts).mock.calls[0][0];

		const emojiCount = settings?.emojiCount as () => number;

		vi.spyOn(Math, "random").mockReturnValue(0);
		expect(emojiCount()).toBe(20);

		vi.spyOn(Math, "random").mockReturnValue(0.9999);
		expect(emojiCount()).toBeCloseTo(40, 2);
	});
});
