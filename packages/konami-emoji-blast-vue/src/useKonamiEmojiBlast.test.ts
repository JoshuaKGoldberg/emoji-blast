import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { defineComponent } from "vue";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

const mockInitializeKonamiEmojiBlast = vi.fn();

vi.mock("konami-emoji-blast", () => ({
	get initializeKonamiEmojiBlast() {
		return mockInitializeKonamiEmojiBlast;
	},
}));

const mountWithComposable = (onActivate?: () => void) =>
	mount(
		defineComponent({
			setup() {
				useKonamiEmojiBlast(onActivate);

				return () => null;
			},
		}),
	);

describe("useKonamiEmojiBlast", () => {
	it("calls initializeKonamiEmojiBlast with onActivate on mount", () => {
		const onActivate = vi.fn();

		mountWithComposable(onActivate);

		expect(mockInitializeKonamiEmojiBlast).toHaveBeenCalledExactlyOnceWith(
			onActivate,
		);
	});

	it("calls the cleanup from initializeKonamiEmojiBlast on unmount", () => {
		const cleanup = vi.fn();
		mockInitializeKonamiEmojiBlast.mockReturnValueOnce(cleanup);

		const wrapper = mountWithComposable();

		expect(cleanup).not.toHaveBeenCalled();

		wrapper.unmount();

		expect(cleanup).toHaveBeenCalledOnce();
	});
});
