import { describe, expect, it } from "vitest";
import { obtainValue } from "./utils";

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
