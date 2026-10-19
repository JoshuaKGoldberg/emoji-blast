import { describe, expect, it } from "vitest";

import { createStyleElementAndClass } from "./styles.js";

const getStylesFor = (className: string) =>
	[...document.head.querySelectorAll("style")].filter((style) =>
		style.textContent.includes(`.${className} {`),
	);

describe("createStyleElementAndClass", () => {
	it("appends a style element for the class name to the head", () => {
		createStyleElementAndClass("styles-test-new");

		const styles = getStylesFor("styles-test-new");

		expect(styles).toHaveLength(1);
		expect(styles[0].getAttribute("type")).toBe("text/css");
		expect(styles[0].textContent).toContain("position: fixed;");
	});

	it("does not create a second style element for the same class name", () => {
		createStyleElementAndClass("styles-test-repeated");
		createStyleElementAndClass("styles-test-repeated");

		expect(getStylesFor("styles-test-repeated")).toHaveLength(1);
	});
});
