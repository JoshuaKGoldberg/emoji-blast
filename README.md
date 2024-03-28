<h1 align="center">emoji-blast</h1>

<p align="center">Blasts emoji like fireworks all up in your HTML page. 🎆</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 3" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-3-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/emoji-blast" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/emoji-blast?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/emoji-blast/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/emoji-blast"><img alt="📦 npm version" src="https://img.shields.io/npm/v/emoji-blast?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

A straightforward library that triggers fireworks blasts of emoji in any web app or site.
Tell it to start once, or many times, and it will _just work_.
✨

> Previously named **`emojisplosion`**.
> Renamed because nobody can remember that name.
> 🥲

## Usage

`emoji-blast` provides two APIs:

- `emojiBlast()`: launches a single blast of emojis at a random location on the page.
- `emojiBlasts()`: starts calling `emojiBlast()` on a random interval of every few seconds.

Both are shockingly configurable and delightful to use.
🎇

### Direct HTML Quick Start

Plop this 👇 at the end of your `.html` `<body>`:

```html
<script async src="https://unpkg.com/emoji-blast/lib/now.js"></script>
```

That ☝ loads `emoji-blast` soon after your page loads and starts `emojiBlasts()` as soon as it can.

👌.

You'll probably want a little more fine-grained control over when the blasts occur.
To create global `emojiBlast` and `emojiBlasts` functions:

```html
<script src="https://unpkg.com/emoji-blast/lib/global.js"></script>
<script>
	// Just one explosion, please.
	emojiBlast();

	// Commence explosions!
	emojiBlasts();
</script>
```

### Framework Usage

First install the `emoji-blast` package as a dependency:

```shell
npm i emoji-blast
```

You can then import it in your code to access its `emojiBlast` and `emojiBlasts` functions:

```ts
import { emojiBlast, emojiBlasts } from "emoji-blast";

// Just one explosion, please.
emojiBlast();

// Commence explosions!
emojiBlasts();
```

If you're using ESM or any modern JavaScript bundler or framework, such as ESBuild, Vite, or Webpack, this should _just work_.
✨

<!-- Soon, we'll document *-emoji-blast integrations here. Soon! -->

## Explanation

Each `emoji-blast` causes a fireworks-like explosion of random emoji to be placed around a random location on your page.
Each explosion contains around a dozen emoji, each of which are animated in JavaScript to:

- Start with a random horizontal velocity and random upward vertical velocity
- Move along the page as if affected by velocity and preserving inertia

After an emoji is completely hidden or out of bounds, it is removed from the page.

### Configuration

`emoji-blast` and `emojiBlasts` are highly configurable.
The following may be passed to both via configuration objects.

> Suggestion: see the generated `.d.ts` under `./lib` for full API descriptions.

#### `className`

Type: `string` or `() => string`

CSS class name to add to all emoji elements.
Defaults to `"emoji-styles"`.

```javascript
emojiBlast({
	className: "my-emoji-styles",
});
```

Whenever a new `className` is passed to `emoji-blast`, a new `<style>` element is created to add general emoji styles for that class.
See [`styles.ts`](./src/styles.ts).

#### `container`

Type: `Element` or `() => Element`

Element container to append elements into.
Defaults to a new `<div />` inserted as a first child of `document.body`.

```javascript
emojiBlast({
	container: document.getElementById("fun"),
});
```

#### `emojiCount`

Type: `number` or `() => number`

How many emojis to create per blast.
Defaults to random number between 14 and 28.

Creating 9001 emoji per blast:

```javascript
emojiBlast({
	emojiCount: 9001,
});
```

Creating a random number between 100 and 200 per blast:

```javascript
emojiBlast({
	emojiCount: () => Math.random() * 100 + 100,
});
```

#### `events`

Type: `{ onClick?: (data: EmojiEventData) => void; }`

Handlers for user interactions with individual emojis.
Defaults to an `onClick` that pushes up the emoji up just a little bit.

```javascript
emojiBlast({
	events: {
		onClick({ actor, event }) {
			actor.update({
				opacity: 1,
				velocity: {
					y: actor.velocity.y / 2 - 15,
				},
			});
		},
	},
});
```

The `EmojiEventData` interface contains:

- `actor: EmojiActor`: The individual actor being interacted with.
- `event: Event`: The original triggering DOM event.

#### `emojis`

Type: `string[]` or `() => string[]`

List of allowed emojis to randomly choose from for each explosion.
The default list of emojis is in [`emojis.ts`](./src/emojis.ts); it excludes emojis with dubious reputations such as 💩 and 🍆.

> Found an emoji not supposed to be in that list?
> Please [file an issue](https://github.com/JoshuaKGoldberg/emoji-blast/issues/new)!

Always choosing the 💖 emoji:

```javascript
emojiBlast({
	emojis: ["💖"],
});
```

Allowing any of several wonderful heart emojis for each emoji within a blast:

```javascript
emojiBlast({
	emojis: ["💖", "💕", "💗", "💓", "💝"],
});
```

#### `physics`

Runtime change constants for emoji element movements.
These default to a sane set of ranges for random numbers that give the appearance of fireworks-like blasts.

These values must be passed in as `number`s, with defaults as _(`value`)_ here:

- `framerate` _(`60`)_: Expected frames per second to adjust position and velocity changes by.
- `gravity` _(`0.35`)_: How much to increase y-velocity downward each tick.
- `rotationDeceleration` _(`0.98`)_: How much to decrease rotation amount each tick.

These values may be randomized, so you can provide them as a const `number` or `{ max: number, min: number }` for a random integer within, inclusive.
Defaults are _(`[min, max]`)_ here:

- `fontSize` _(`[14, 28]`)_: Individual emojis' font size range.
- `initialVelocities`:
  - `rotation` _(`[-7, 7]`)_: Range of initial rotation amount.
  - `x` _(`[-7, 7]`)_: Range of initial horizontal velocity.
  - `y` _(`[-14, -11.7]`)_: Range of initial vertical velocity.
- `rotation` _(`[-45, 45]`)_: Individual emojis' initial rotation range.

These values are optional:

- `preserveOutOfBounds`: Whether to skip removing emojis that move outside of the visible screen.
- `opacityDelay`: How much to slow down the (time elapsed / framerate) opacity reduction each tick (recommendation: `100` to fade out over a few seconds).

Causing emojis to spin wildly out of control:

```javascript
emojiBlast({
	physics: {
		initialVelocities: {
			rotation: {
				max: 14,
				min: -14,
			},
		},
		rotationDeceleration: 1.01,
	},
});
```

Inverting gravity:

```javascript
emojiBlast({
	physics: {
		gravity: -0.35,
		initialVelocities: {
			y: {
				max: 14,
				min: 11.7,
			},
		},
	},
});
```

Alternately, the `defaultPhysics` object is exported, so you can base your physics constants off it:

```javascript
import { emojiBlasts, defaultPhysics } from "emoji-blast";

emojiBlast({
	physics: {
		gravity: -defaultPhysics.gravity,
		initialVelocities: {
			y: {
				max: -defaultPhysics.initialVelocities.max,
				min: -defaultPhysics.initialVelocities.min,
			},
		},
	},
});
```

#### `position`

Type: `{ x: number, y: number }` or `() => { x: number, y: number }`

How to determine where to place blasts of emojis around the page.
These are absolutely positioned midpoints to center the blasts around.
They're used directly as `left` and `top` CSS properties.
You can provide a static object or a function to create one.

The default `position` chooses integers within the page:

```javascript
emojiBlast({
	position: () => ({
		x: Math.random() * innerWidth,
		y: Math.random() * innerHeight,
	}),
});
```

Always exploding from a fixed position:

```javascript
emojiBlast({
	position: {
		x: 35,
		y: 35,
	},
});
```

Exploding emoji around your favorite element on the page:

```javascript
const element = document.querySelector("#my-face");

emojiBlast({
	position() {
		// https://stackoverflow.com/questions/1480133
		const offset = cumulativeOffset(element);

		return {
			x: offset.left + element.clientWidth / 2,
			y: offset.top + element.clientHeight / 2,
		};
	},
});
```

#### `process`

Type: `(element: Element) => void`

Processes each element just before it's appended to the container.
Useful if you'd like to apply custom attributes, class names, or styles to your elements.

Adding an `.emoji` class to each element:

```javascript
emojiBlast({
	process(element) {
		element.className = "emoji";
	},
});
```

#### `uniqueness`

Type: `number` or `() => number`

How many different types of emojis are allowed within a blast.
Each blast will evaluate this to a number, U, and choose the first U emojis from a shuffled variant of the `emojis` list.
If `U > emojis.length`, it will be ignored.

`uniqueness` defaults to `Infinity`.

Allowing only one emoji type per blast:

```javascript
emojiBlast({
	uniqueness: 1,
});
```

Allowing one more emoji type per blast each blast:

```javascript
let count = 0;

emojiBlast({
	uniqueness() {
		count += 1;
		return count;
	},
});
```

### `emojiBlasts`

`emojiBlasts` can take in all of the same settings as `emoji-blast`.
It returns an object with a `cancel` function that can cancel any pending work:

```typescript
// Commence explosions!...
const { cancel } = emojiBlasts();

// ...but stop after ten seconds.
setTimeout(cancel, 10000);
```

Additionally, these configurations are exclusively for `emojiBlasts`:

#### `interval`

Type: `number` or `() => number`

How frequently to create explosions.
Passed to `scheduler` as the delay _(typically in milliseconds)_ before each explosion.

Pass a `number` to always delay that much.
Pass a function for it to be called immediately for the delay before the first explosion, then again as each explosion is started to schedule the next explosion.

The default `interval` is a function that returns `0` the first time for an immediate explosion, then a random number in [700, 2100] subsequent times.

As quickly as `setInterval` can fire (this will probably crash your browser!):

```javascript
emojiBlasts({
	interval: 0,
});
```

Once a second:

```javascript
emojiBlasts({
	interval: 1000,
});
```

0ms delay the first explosion, then 1000ms delay each subsequent explosion:

```javascript
let scheduled = false;

emojiBlasts({
	interval() {
		if (!scheduled) {
			scheduled = true;
			return 0;
		}

		return 1000;
	},
});
```

#### `scheduler`

Type: `(action: () => void, delay: number) => number`

Schedules the next explosion to occur.
This defaults to `setTimeout`, which is why `interval` is typically treated as milliseconds.

```javascript
emojiBlasts({
	scheduler(action, delay) {
		console.log(`Will emoji in ${delay} ms!`);
		action();
	},
});
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md) and [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/emoji-blast/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="https://github.com/JoshuaKGoldberg/emoji-blast/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://loige.co"><img src="https://avatars.githubusercontent.com/u/205629?v=4?s=100" width="100px;" alt="Luciano Mammino"/><br /><sub><b>Luciano Mammino</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/emoji-blast/commits?author=lmammino" title="Documentation">📖</a> <a href="https://github.com/JoshuaKGoldberg/emoji-blast/commits?author=lmammino" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/helenamerk"><img src="https://avatars.githubusercontent.com/u/7145275?v=4?s=100" width="100px;" alt="helenamerk"/><br /><sub><b>helenamerk</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/emoji-blast/commits?author=helenamerk" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).

> _"So anyway, I started blasting!" - Frank Reynolds_
