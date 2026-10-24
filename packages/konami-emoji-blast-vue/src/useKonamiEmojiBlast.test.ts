import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { createSSRApp, defineComponent } from "vue";
import { renderToString } from "vue/server-renderer";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

const mockInitializeKonamiEmojiBlast = vi.fn();

vi.mock("konami-emoji-blast", () => ({
	get initializeKonamiEmojiBlast() {
		return mockInitializeKonamiEmojiBlast;
	},
}));

const createComposableComponent = (onActivate?: () => void) =>
	defineComponent({
		setup() {
			useKonamiEmojiBlast(onActivate);

			return () => null;
		},
	});

const mountWithComposable = (onActivate?: () => void) =>
	mount(createComposableComponent(onActivate));

describe("useKonamiEmojiBlast", () => {
	it("calls initializeKonamiEmojiBlast with onActivate on mount", () => {
		const onActivate = vi.fn();

		mountWithComposable(onActivate);

		expect(mockInitializeKonamiEmojiBlast).toHaveBeenCalledExactlyOnceWith(
			onActivate,
		);
	});

	it("does not call initializeKonamiEmojiBlast during server rendering", async () => {
		await renderToString(createSSRApp(createComposableComponent()));

		expect(mockInitializeKonamiEmojiBlast).not.toHaveBeenCalled();
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
