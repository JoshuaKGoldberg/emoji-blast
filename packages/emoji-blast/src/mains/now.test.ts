import { describe, expect, it, vi } from "vitest";

import { emojiBlast } from "../emojiBlast.js";

vi.mock("../emojiBlast.js");

describe("now", () => {
	it("blasts emojis once with default settings on import", async () => {
		await import("./now.js");

		expect(emojiBlast).toHaveBeenCalledExactlyOnceWith();
	});
});
