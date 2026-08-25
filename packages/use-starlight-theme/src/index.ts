import { useEffect, useState } from "react";

/**
 * Valid theme values supported by the Starlight documentation theme.
 */
const STARLIGHT_THEMES = {
	DARK: "dark",
	LIGHT: "light",
} as const;

/**
 * The HTML attribute Starlight uses to persist theme state on the &lt;html> element.
 */
const STARLIGHT_THEME_ATTR = "data-theme";

export type StarlightTheme =
	(typeof STARLIGHT_THEMES)[keyof typeof STARLIGHT_THEMES];

/**
 * A React hook that synchronizes with the Starlight documentation theme.
 * @returns The current theme ("light" or "dark").
 * @example
 * const theme = useStarlightTheme();
 * return (
 *   <div style={{ background: theme === 'dark' ? '#000' : '#fff' }}>
 * 	  The current theme is {theme}
 *   </div>
 * );
 */
export const useStarlightTheme = () => {
	const [theme, setTheme] = useState<StarlightTheme>(STARLIGHT_THEMES.DARK);

	const setThemeWithFallback = (rawThemeAttr: null | string) => {
		if (!rawThemeAttr) {
			setTheme(STARLIGHT_THEMES.DARK);
			return;
		}

		if (
			rawThemeAttr !== STARLIGHT_THEMES.DARK &&
			rawThemeAttr !== STARLIGHT_THEMES.LIGHT
		) {
			console.warn(
				`useStarlightTheme: unexpected theme value "${rawThemeAttr}"`,
			);
			return;
		}

		setTheme(rawThemeAttr);
	};

	useEffect(() => {
		const currentTheme =
			document.documentElement.getAttribute(STARLIGHT_THEME_ATTR);
		setThemeWithFallback(currentTheme);

		const observer = new MutationObserver(() => {
			const newTheme =
				document.documentElement.getAttribute(STARLIGHT_THEME_ATTR);
			setThemeWithFallback(newTheme);
		});

		observer.observe(document.documentElement, {
			attributeFilter: [STARLIGHT_THEME_ATTR],
			attributes: true,
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return theme;
};
