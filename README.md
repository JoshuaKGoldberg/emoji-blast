# Emojisplosion

[![Build Status](https://travis-ci.org/JoshuaKGoldberg/emojisplosion.svg?branch=master)](https://travis-ci.org/JoshuaKGoldberg/emojisplosion)
[![NPM version](https://badge.fury.io/js/emojisplosion.svg)](http://badge.fury.io/js/emojisplosion)

💥Blasts 😄emoji😊 like 🎆fireworks🎇 all up in your 💻HTML 📄page. 😚😍

## Usage

> You might enjoy the [Chrome extension](https://github.com/joshuakgoldberg/emojisplosion-chrome)!

### Easy Mode

Plop this 👇 at the end of your `.html` `<body>`:

```html
<script async src="https://unpkg.com/emojisplosion/lib/easy.js"></script>
```

That ☝ loads Emojisplosion soon after your page loads and starts emojisplosions as soon as it can.

👌.

Alternately, to create global `emojisplosion` and `emojisplosions` functions:

```html
<script src="https://unpkg.com/emojisplosion/lib/global.js"></script>
<script>
  // Just one explosion, please.
  emojisplosion();

  // Commence explosions!
  emojisplosions();
</script>
```

`emojisplosion` launches a single blast of emojis at random locations on the page.

`emojisplosions` starts calling `emojisplosion` on a random interval of every few seconds.

#### Explanation

Each `emojisplosion` causes a fireworks-like explosion of random emoji to be placed around a random location on your page.
Each explosion contains around a dozen emoji, each of which are animated in JavaScript to:

- Start with a random horizontal velocity and random upward vertical velocity
- Move along the page as if affected by velocity and preserving inertia

After an emoji is completely hidden or out of bounds, it is removed from the page.

### Advanced Mode

With Webpack and other modern JavaScript bundlers:

```javascript
import { emojisplosion, emojisplosions } from "emojisplosion";

// Just one explosion, please.
emojisplosion();

// Commence explosions!
emojisplosions();
```

Oh, and Emojisplosion is written in TypeScript and ships with its own typings. 💣

### Configuration

`emojisplosion` and `emojisplosions` are highly configurable.
The following may be passed to both via configuration objects.

> Suggestion: see the generated `.d.ts` under `./lib` for full API descriptions.

#### `className`

Type: `string` or `() => string`

CSS class name to add to all emoji elements.
Defaults to `"emoji-styles"`.

```javascript
emojisplosion({
  className: "my-emoji-styles",
});
```

Whenever a new `className` is passed to `emojisplosion`, a new `<style>` element is created to add general emoji styles for that class.
See [`styles.ts`](./src/styles.ts).

#### `container`

Type: `Element` or `() => Element`

Element container to append elements into.
Defaults to a new `<div />` inserted as a first child of `document.body`.

```javascript
emojisplosion({
  container: document.getElementById("fun"),
});
```

#### `emojiCount`

Type: `number` or `() => number`

How many emojis to create per blast.
Defaults to random number between 14 and 28.

Creating 9001 emoji per blast:

```javascript
emojisplosion({
  emojiCount: 9001,
});
```

Creating a random number between 100 and 200 per blast:

```javascript
emojisplosion({
  emojiCount: () => Math.random() * 100 + 100,
});
```

#### `emojis`

Type: `string[]` or `() => string[]`

List of allowed emojis to randomly choose from for each explosion.
The default list of emojis is in [`emojis.ts`](./src/emojis.ts); it excludes emojis with dubious reputations such as 💩 and 🍆.

> Found an emoji not supposed to be in that list?
> Please [file an issue](https://github.com/JoshuaKGoldberg/emojisplosion/issues/new)!

Always choosing the 💖 emoji:

```javascript
emojisplosion({
  emojis: ["💖"],
});
```

Allowing any of several wonderful heart emojis for each emoji within a blast:

```javascript
emojisplosion({
  emojis: ["💖", "💕", "💗", "💓", "💝"],
});
```

#### `physics`

Runtime change constants for emoji element movements.
These default to a sane set of ranges for random numbers that give the appearance of fireworks-like blasts.

These values must be passed in as `number`s, with defaults as _(`value`)_ here:

- `framerate` _(`60`)_: Expected frames per second to adjust position and velocity changes by.
- `gravity` _(`0.35`)_: How much to increase y-velocity downard each tick.
- `rotationDeceleration` _(`0.98`)_: How much to decrease rotation amount each tick.

These values may be randomized, so you can provide them as a const `number` or `{ max: number, min: number }` for a random integer within, inclusive. Defaults are _(`[min, max]`)_ here:

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
emojisplosion({
  physics: {
    initialVelocities: {
      rotation: {
        max: 14,
        min: -14,
      },
    },
    rotationDecelaration: 1.01,
  },
});
```

Inverting gravity:

```javascript
emojisplosion({
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
import { emojisplosions, defaultPhysics } from "emojisplosion";

emojisplosion({
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
emojisplosion({
  position: () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
  }),
});
```

Always exploding from a fixed position:

```javascript
emojisplosion({
  position: {
    x: 35,
    y: 35,
  },
});
```

Exploding emoji around your favorite element on the page:

```javascript
const element = document.querySelector("#my-face");

emojisplosion({
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
emojisplosion({
  process(element) {
    element.className = "emoji";
  },
});
```

#### `tagName`

Type: `string` or `() => string`

DOM element tag name to create elements as.
Defaults to `"span"`.

Creating `<div>`s instead:

```javascript
emojisplosion({
  tagName: "div",
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
emojisplosion({
  uniqueness: 1,
});
```

Allowing one more emoji type per blast each blast:

```javascript
let count = 0;

emojisplosion({
  uniqueness() {
    count += 1;
    return count;
  },
});
```

### `emojisplosions`

`emojisplosions` can take in all of the same settings as `emojisplosion`.
It returns an object with a `cancel` function that can cancel any pending work:

```typescript
// Commence explosions!...
const { cancel } = emojisplosions();

// ...but stop after ten seconds.
setTimeout(cancel, 10000);
```

Additionally, these configurations are exclusively for `emojisplosions`:

#### `interval`

Type: `number` or `() => number`

How frequently to create explosions.
Passed to `scheduler` as the delay _(typically in milliseconds)_ before each explosion.

Pass a `number` to always delay that much.
Pass a function for it to be called immediately for the delay before the first explosion, then again as each explosion is started to schedule the next explosion.

The default `interval` is a function that returns `0` the first time for an immediate explosion, then a random number in [700, 2100] subsequent times.

As quickly as `setInterval` can fire (this will probably crash your browser!):

```javascript
emojisplosions({
  interval: 0,
});
```

Once a second:

```javascript
emojisplosions({
  interval: 1000,
});
```

0ms delay the first explosion, then 1000ms delay each subsequent explosion:

```javascript
let scheduled = false;

emojisplosions({
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
emojisplosions({
  scheduler(action, delay) {
    console.log(`Will emoji in ${delay} ms!`);
    action();
  },
});
```

## Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo/):

```shell
git clone https://github.com/<your-name-here>/emojisplosion
cd emojisplosion
npm install
npm run verify
```

That will create the project locally and run a full build.
In order to develop it, modify the `.ts` files under `src/`.
Run TypeScript locally to constantly compile your changes to `.js` files:

```shell
npm run tsc -- --watch
```

### Demos

A set of `.html` files exists under `./demo` with a different way of showing off Emojisplosion features.
Each corresponds to a Webpack ["entry point"](https://webpack.js.org/concepts/entry-points) under `./src/mains` under the same name.
You can run Webpack in watch mode to continuously rebuild bundled scripts corresponding to those demos:

```shell
npm run watch
```

### Tests

Despite [previously advocating for 100% unit test coverage](https://medium.com/@joshuakgoldberg/in-defense-of-100-unit-test-coverage-7fd1a9873ca4), there are intentionally no unit tests in this project.
Learning TypeScript is hard enough for many.

Since it's so small and randomization-based, I'd rather make it easier for folks to contribute.
