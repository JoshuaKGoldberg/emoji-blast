import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>("dark");

	const setThemeWithFallback = (rawThemeAttr: string | null) => {
		if (!rawThemeAttr) {
			return setTheme("dark");
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
			attributes: true,
			attributeFilter: ["data-theme"],
		});

		return () => observer.disconnect();
	}, []);

	return theme;
};
