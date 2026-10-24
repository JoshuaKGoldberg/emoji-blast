import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import { KonamiEmojiBlast } from "./KonamiEmojiBlast.js";

const mockUseKonamiEmojiBlast = vi.fn<(onActivate: () => void) => void>();

vi.mock("./useKonamiEmojiBlast", () => ({
	get useKonamiEmojiBlast() {
		return mockUseKonamiEmojiBlast;
	},
}));

describe("KonamiEmojiBlast", () => {
	it("emits activate when the useKonamiEmojiBlast callback is called", () => {
		const wrapper = mount(KonamiEmojiBlast);

		expect(wrapper.emitted("activate")).toBeUndefined();

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const [callback] = mockUseKonamiEmojiBlast.mock.lastCall!;
		callback();

		expect(wrapper.emitted("activate")).toEqual([[]]);
	});
});
