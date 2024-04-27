<h1 align="center">konami-emoji-blast</h1>

<p align="center">
  Hooks up <a href="https://github.com/Haeresis/konami-code-js">konami-code-js</a> to trigger <a href="https://github.com/JoshuaKGoldberg/emoji-blast/packages/emoji-blast">emoji-blast</a>.
  🎆
</p>

<p align="center">
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://github.com/JoshuaKGoldberg/konami-emoji-blast/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/konami-emoji-blast"><img alt="📦 npm version" src="https://img.shields.io/npm/v/konami-emoji-blast?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

<p align="center">
	⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ 🅱 🅰
</p>

## What?

If a user types in the <a href="https://wikipedia.org/wiki/Konami%20Code">Konami Code</a> on their keyboard or taps it on their mobile phone, emoji blasts will start firing on the page.
Triggering the Konami Code again will stop the emoji blasts.

> Check it out on [Codecademy Docs](https://codecademy.com/resources/docs)!

## Usage

### Direct HTML Quick Start

Plop this 👇 at the end of your `<body>`:

<!-- prettier-ignore -->
```html
<script async src="https://unpkg.com/konamimojisplosion/dist/now.js"></script>
```

That ☝ loads `konami-emoji-blast` soon after your page loads to set up the Konami Code with no configuration.

👌.

You might want a little more fine-grained control over when the connection is created.
To create a global `initializeKonamiEmojiBlast` function:

```html
<script src="https://unpkg.com/emoji-blast/dist/global.js"></script>
<script>
	initializeKonamiEmojiBlast();
</script>
```

### Direct Node.js Usage

First install the `konami-emoji-blast` package as a dependency:

```shell
npm i konami-emoji-blast
```

You can then import it in your code to access its `initializeKonamiEmojiBlast` function:

```tsx
import { initializeKonamiEmojiBlast } from "konami-emoji-blast";

initializeKonamiEmojiBlast();
```

If you're using ESM or any modern JavaScript bundler or framework, such as ESBuild, Vite, or Webpack, this should _just work_.
✨

### Frameworks

`konami-emoji-blast` can also be used via integrations for popular frontend frameworks.
See:

- [`@konami-emoji-blast/react`](../konami-emoji-blast-react)
- _More to come ... soon!_

## Development

`konami-emoji-blast` is managed as part of the <a href="https://github.com/JoshuaKGoldberg/emoji-blast">emoji-blast monorepo</a>.
See the monorepo's development docs first, then [`./.github/DEVELOPMENT.md`](.github/DEVELOPMENT.md).

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
