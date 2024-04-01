import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

const mockInitializeKonamiEmojiBlast = vi.fn();

vi.mock("konami-emoji-blast", () => ({
	get initializeKonamiEmojiBlast() {
		return mockInitializeKonamiEmojiBlast;
	},
}));

describe("useKonamiEmojiBlast", () => {
	it("calls initializeKonamiEmojiBlast with onActivate on mount", () => {
		const onActivate = vi.fn();

		renderHook(() => {
			useKonamiEmojiBlast(onActivate);
		});

		expect(mockInitializeKonamiEmojiBlast).toHaveBeenCalledWith(onActivate);
	});
});
