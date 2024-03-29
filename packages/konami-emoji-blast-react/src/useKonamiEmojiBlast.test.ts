import { act, renderHook } from "@testing-library/react";
import { MockInstance, describe, expect, it, vi } from "vitest";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast.js";

let mockKonamiCode: { disable: MockInstance; mockLaunch: () => void };

vi.mock("konami-code-js", () => ({
	default: class MockKonamiCode {
		disable = vi.fn();

		constructor(public mockLaunch: () => void) {
			// eslint-disable-next-line @typescript-eslint/no-this-alias
			mockKonamiCode = this;
		}
	},
}));

const mockEmojiBlastsCancel = vi.fn();
const mockEmojiBlastsStart = vi.fn(() => ({
	cancel: mockEmojiBlastsCancel,
}));

vi.mock("emoji-blast", () => ({
	get emojiBlasts() {
		return mockEmojiBlastsStart;
	},
}));

describe("useKonamiEmojiBlast", () => {
	it("does not start emoji blasts when the konami code is not triggered", () => {
		renderHook(() => {
			useKonamiEmojiBlast(vi.fn());
		});

		expect(mockEmojiBlastsStart).not.toHaveBeenCalled();
	});

	it("starts emoji blasts when the konami code is triggered a first time", () => {
		renderHook(() => {
			useKonamiEmojiBlast(vi.fn());
		});

		act(() => {
			mockKonamiCode.mockLaunch();
		});

		expect(mockEmojiBlastsStart).toHaveBeenCalled();
	});

	it("stops emoji blasts when the konami code is triggered a second time", () => {
		renderHook(() => {
			useKonamiEmojiBlast(vi.fn());
		});

		act(() => {
			mockKonamiCode.mockLaunch();
		});

		act(() => {
			mockKonamiCode.mockLaunch();
		});

		expect(mockEmojiBlastsCancel).toHaveBeenCalled();
	});

	it("stops emoji blasts and konami listening when disposed", () => {
		const hook = renderHook(() => {
			useKonamiEmojiBlast(vi.fn());
		});

		act(() => {
			mockKonamiCode.mockLaunch();
		});

		act(() => {
			hook.unmount();
		});

		expect(mockEmojiBlastsCancel).toHaveBeenCalled();
		expect(mockKonamiCode.disable).toHaveBeenCalled();
	});
});
