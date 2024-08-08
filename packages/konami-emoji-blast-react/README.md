<h1 align="center">@konami-emoji-blast/react</h1>

<p align="center">
  Integration for <a href="https://github.com/JoshuaKGoldberg/emoji-blast/packages/konami-emoji-blast">konami-emoji-blast</a> in <a href="https://react.dev">React</a>.
  ⚛️
</p>

<p align="center">
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://github.com/JoshuaKGoldberg/konami-emoji-blast/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/@konami-emoji-blast/react"><img alt="📦 npm version" src="https://img.shields.io/npm/v/@konami-emoji-blast/react?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

<p align="center">
	⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ 🅱 🅰
</p>

## Usage

First install the `@konami-emoji-blast/react` package as a dependency:

```shell
npm i @konami-emoji-blast/react
```

The preferred usage for React is with a provided `useKonamiEmojiBlast` hook:

```tsx
import { useKonamiEmojiBlast } from "@konami-emoji-blast/react";

export function MyComponent() {
	useKonamiEmojiBlast();

	return <main>Hello, world!</main>;
}
```

Then, pressing the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) on your React app should trigger fireworks blasts of emoji on the page.
Yay! 🎆

If you can't use hooks, a `KonamiEmojiBlast` component is provided too:

```tsx
import { KonamiEmojiBlast } from "@konami-emoji-blast/react";

export function MyComponent() {
	return (
		<main>
			<KonamiEmojiBlast />
			Hello, world!
		</main>
	);
}
```

> 💡 Tip: the class component just calls the hook internally.

## Development

`@konami-emoji-blast/react` is managed as part of the <a href="https://github.com/JoshuaKGoldberg/emoji-blast">emoji-blast monorepo</a>.
See the monorepo's development docs first, then [`./.github/DEVELOPMENT.md`](.github/DEVELOPMENT.md).

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
