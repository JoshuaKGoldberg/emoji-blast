import { useEffect, useState } from "react";

type StarlightTheme = "dark" | "light";

export const useStarlightTheme = () => {
	const [theme, setTheme] = useState<StarlightTheme>("dark");

	const setThemeWithFallback = (rawThemeAttr: null | string) => {
		if (!rawThemeAttr) {
			setTheme("dark");
			return;
		}
		if (rawThemeAttr !== "dark" && rawThemeAttr !== "light") {
			throw new Error("invalid theme data");
		}
		setTheme(rawThemeAttr);
	};

	useEffect(() => {
		const currentTheme = document.documentElement.getAttribute("data-theme");
		setThemeWithFallback(currentTheme);

		const observer = new MutationObserver(() => {
			const newTheme = document.documentElement.getAttribute("data-theme");
			setThemeWithFallback(newTheme);
		});

		observer.observe(document.documentElement, {
			attributeFilter: ["data-theme"],
			attributes: true,
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return theme;
};
