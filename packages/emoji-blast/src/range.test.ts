import { describe, expect, it, vi } from "vitest";

import { randomInRange } from "./range.js";

describe("randomInRange", () => {
	it("returns the number when given a number", () => {
		expect(randomInRange(7)).toBe(7);
	});

	it("returns the min when random is 0", () => {
		vi.spyOn(Math, "random").mockReturnValue(0);

		expect(randomInRange({ max: 10, min: -5 })).toBe(-5);
	});

	it("returns the max when random is just under 1", () => {
		vi.spyOn(Math, "random").mockReturnValue(0.9999);

		expect(randomInRange({ max: 10, min: -5 })).toBe(10);
	});

	it("returns an integer within the range", () => {
		for (let i = 0; i < 50; i += 1) {
			const actual = randomInRange({ max: 3, min: 1 });

			expect([1, 2, 3]).toContain(actual);
		}
	});
});
