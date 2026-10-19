import { describe, expect, it } from "vitest";

import { emojiBlast } from "../emojiBlast.js";
import { emojiBlasts } from "../emojiBlasts.js";

describe("global", () => {
	it("exposes emojiBlast and emojiBlasts on window", async () => {
		await import("./global.js");

		expect(window).toHaveProperty("emojiBlast", emojiBlast);
		expect(window).toHaveProperty("emojiBlasts", emojiBlasts);
	});
});
