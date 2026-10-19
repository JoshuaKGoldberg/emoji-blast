import { describe, expect, it, vi } from "vitest";

import { obtainValue, randomArrayMember, shuffleArray } from "./utils.js";

describe("randomArrayMember", () => {
	it("returns the member at the random index", () => {
		vi.spyOn(Math, "random").mockReturnValue(0.5);

		expect(randomArrayMember(["a", "b", "c", "d"])).toBe("c");
	});

	it("returns the only member of a single-item array", () => {
		expect(randomArrayMember(["a"])).toBe("a");
	});
});

describe("shuffleArray", () => {
	it("does not modify the input array", () => {
		const array = [1, 2, 3, 4, 5];

		const actual = shuffleArray(array);

		expect(actual).not.toBe(array);
		expect(array).toEqual([1, 2, 3, 4, 5]);
	});

	it("swaps each item with the index chosen by Math.random", () => {
		vi.spyOn(Math, "random").mockReturnValue(0);

		expect(shuffleArray([1, 2, 3])).toEqual([2, 3, 1]);
	});
});

describe("obtainValue", () => {
	it("returns the value when provided as a non-function", () => {
		const value = 123;

		const actual = obtainValue(value);

		expect(actual).toBe(value);
	});

	it("returns the value when provided as a function", () => {
		const value = 123;

		const actual = obtainValue(() => value);

		expect(actual).toBe(value);
	});
});
