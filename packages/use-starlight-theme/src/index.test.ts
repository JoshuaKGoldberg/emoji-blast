// @vitest-environment jsdom

import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { useStarlightTheme } from "./index.js";

afterEach(() => {
	document.documentElement.removeAttribute("data-theme");
});

describe("useStarlightTheme", () => {
	it("reads the current theme", () => {
		document.documentElement.setAttribute("data-theme", "light");

		const { result, unmount } = renderHook(() => useStarlightTheme());

		expect(result.current).toBe("light");
		unmount();
	});

	it("updates when the theme changes", async () => {
		const { result } = renderHook(() => useStarlightTheme());

		act(() => {
			document.documentElement.setAttribute("data-theme", "light");
		});

		await waitFor(() => {
			expect(result.current).toBe("light");
		});

		act(() => {
			document.documentElement.removeAttribute("data-theme");
		});

		await waitFor(() => {
			expect(result.current).toBe("dark");
		});
	});

	it("warns and keeps the current theme for unexpected values", async () => {
		const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
		const { result } = renderHook(() => useStarlightTheme());

		act(() => {
			document.documentElement.setAttribute("data-theme", "sepia");
		});

		await waitFor(() => {
			expect(warn).toHaveBeenCalledWith(
				'useStarlightTheme: unexpected theme value "sepia"',
			);
		});
		expect(result.current).toBe("dark");
	});
});
