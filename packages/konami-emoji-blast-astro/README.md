<h1 align="center">@konami-emoji-blast/astro</h1>

<p align="center">
  Hooks up <a href="https://github.com/Haeresis/konami-code-js">konami-code-js</a> to trigger <a href="https://github.com/JoshuaKGoldberg/emoji-blast/packages/emoji-blast">emoji-blast</a> in <a href="https://astro.build">Astro</a>.
  🚀
</p>

<p align="center">
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://github.com/JoshuaKGoldberg/konami-emoji-blast/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/@konami-emoji-blast/astro"><img alt="📦 npm version" src="https://img.shields.io/npm/v/@konami-emoji-blast/astro?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

<p align="center">
	⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ 🅱 🅰
</p>

## Usage

First install the `@konami-emoji-blast/astro` and `konami-emoji-blast` packages as dependencies:

```shell
npm i @konami-emoji-blast/astro konami-emoji-blast
```

Then, apply this integration to your `astro.config.*` file using the `integrations` property:

```ts
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	// ...
	integrations: [konamiEmojiBlast()],
});
```

Then, pressing the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) on your Astro site should trigger fireworks blasts of emoji on the page.
Yay! 🎆

## Development

`@konami-emoji-blast/astro` is managed as part of the <a href="https://github.com/JoshuaKGoldberg/emoji-blast">emoji-blast monorepo</a>.
See the monorepo's development docs first, then [`./.github/DEVELOPMENT.md`](.github/DEVELOPMENT.md).

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
