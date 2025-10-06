import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { KonamiEmojiBlast } from "./KonamiEmojiBlast.js";

const mockUseKonamiEmojiBlast = vi.fn();

vi.mock("./useKonamiEmojiBlast", () => ({
	get useKonamiEmojiBlast() {
		return mockUseKonamiEmojiBlast;
	},
}));

describe("KonamiEmojiBlast", () => {
	it("calls useKonamiEmojiBlast with onActivate on mount", () => {
		const onActivate = vi.fn();

		render(<KonamiEmojiBlast onActivate={onActivate} />);

		expect(mockUseKonamiEmojiBlast).toHaveBeenCalledExactlyOnceWith(onActivate);
	});
});
