<h1 align="center">use-starlight-theme</h1>

<p align="center">
  React hook to track the current theme in <a href="https://starlight.astro.build">Astro Starlight</a>.
  🌟
</p>

<p align="center">
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

Install the package:

```shell
npm install use-starlight-theme
```

Use the hook in your React components to detect the current Starlight theme:

```tsx
import { useStarlightTheme } from "use-starlight-theme";

export function MyComponent() {
	const theme = useStarlightTheme(); // "light" | "dark"

	return (
		<div style={{ color: theme === "dark" ? "white" : "black" }}>
			The current theme is {theme}
		</div>
	);
}
```

## Development

`use-starlight-theme` is managed as part of the <a href="https://github.com/JoshuaKGoldberg/emoji-blast">emoji-blast monorepo</a>.
See the monorepo's development docs first, then `./.github/DEVELOPMENT.md`.
