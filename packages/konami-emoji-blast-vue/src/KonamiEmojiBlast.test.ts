import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import { KonamiEmojiBlast } from "./KonamiEmojiBlast.js";

const mockUseKonamiEmojiBlast = vi.fn<(onActivate?: () => void) => void>();

vi.mock("./useKonamiEmojiBlast", () => ({
	get useKonamiEmojiBlast() {
		return mockUseKonamiEmojiBlast;
	},
}));

describe("KonamiEmojiBlast", () => {
	it("calls useKonamiEmojiBlast with a callback that calls onActivate on mount", () => {
		const onActivate = vi.fn();

		mount(KonamiEmojiBlast, { props: { onActivate } });

		expect(mockUseKonamiEmojiBlast).toHaveBeenCalledOnce();

		mockUseKonamiEmojiBlast.mock.calls[0][0]?.();

		expect(onActivate).toHaveBeenCalledOnce();
	});

	it("calls the latest onActivate after the prop changes", async () => {
		const original = vi.fn();
		const updated = vi.fn();

		const wrapper = mount(KonamiEmojiBlast, {
			props: { onActivate: original },
		});
		await wrapper.setProps({ onActivate: updated });

		mockUseKonamiEmojiBlast.mock.calls[0][0]?.();

		expect(original).not.toHaveBeenCalled();
		expect(updated).toHaveBeenCalledOnce();
	});
});
