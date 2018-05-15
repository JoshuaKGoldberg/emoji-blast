# Emojisplosion

[![Greenkeeper badge](https://badges.greenkeeper.io/JoshuaKGoldberg/emojisplosion.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/JoshuaKGoldberg/emojisplosion.svg?branch=master)](https://travis-ci.org/JoshuaKGoldberg/emojisplosion)
[![NPM version](https://badge.fury.io/js/emojisplosion.svg)](http://badge.fury.io/js/emojisplosion)

💥Blasts 😄emoji😊 like 🎆fireworks🎇 all up in your 💻HTML 📄page. 😚😍

## Usage

### Easy Mode

Plop this 👇 at the end of your `.html` `<body>`:

```html
<script async src="https://unpkg.com/emojisplosion/src/easy.js></script>
```

👌.

Alternately, to create global `emojisplosion` and `emojisplosions` functions:

```html
<script src="https://unpkg.com/emojisplosion/src/global.js"></script>
<script>
    emojisplosion();
    emojisplosions();
</script>
```

`emojisplosion` launches a single blast of emojis at random locations on the page.

`emojisplosions` starts calling `emojisplosion` on a random interval of every few seconds.

#### Explanation

Every few seconds, fireworks-like explosions of random emoji are placed at random locations and times on your page.
Each explosion contains around a dozen emoji, each of which are given CSS `animation`s that:

* Animate it along a bezier curve similar to a fireworks particle
* Fade it from `opacity: 1` to `opacity: 0`

After an emoji is completely hidden, it is removed from the page.

### Advanced

With Webpack and other modern JavaScript bundlers:

```typescript
import { emojisplosion, emojisplosions } from "emojisplosion";

// Just one explosion, please.
emojisplosion();

// Commence explosions!
emojisplosions();
```


### Configuration

`emojisplosion` and `emojisplosions` are highly configurable.
The following may be passed to both via configuration objects.

#### `position`

Type: `{ x: number, y: number }` or `() => { x: number, y: number }`

How to determine where to place blasts of emojis around the page.
These are absolutely positioned midpoints to center the blasts around.
You can provide a static `{ x, y }` object or a function to create one.

The default `position` chooses rounded integers within the page:

```javascript
emojisplosions
```

Always exploding from a fixed position:

```javascript
emojisplosions({
    position: {
        x: 35,
        y: 35,
    },
})
```

Exploding emoji around your favorite element on the page:

```javascript
const element = document.querySelector("#my-face");

emojisplosions({
    position: () => {
        // https://stackoverflow.com/questions/1480133
        const { left, top } = cumulativeOffset(element);

        return {
            x: Math.round(left + element.clientWidth / 2),
            y: Math.round(top + element.clientHeight / 2),
        }
    }
});
```

> Try to use rounded integers as your positions, as they're easier for browsers to render.

#### `styles`

Type: `CSSProperties` (`object`)

Inline CSS styles to apply to each emoji.
These will be merged on top of the default inline styles, which are:

```css
font-size: 1em;
position: absolute;
```

```javascript
// For when you really need to get the point across...
emojisplosions({
    styles: {
        fontSize: "3.5em",
    },
});
```

### Scheduling

`emojisplosions` returns an object with a `cancel` function that can cancel any pending work:

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

The default `interval` is a function that returns `0` the first time for an immediate explosion, then a random number in [3500, 7000] subsequent times.

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

## Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo/):

```shell
git clone https://github.com/<your-name-here>/emojisplosion
cd emojisplosion
npm install
npm run verify
```
