# emoji-blast Site 🎉

> **[Live Site](https://www.emojiblast.dev)**

## Running the site locally

1. Clone repo
2. `pnpm install`
3. `cd` into this directory, `packages/emoji-blast-site`
4. `pnpm run dev`
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Creating a new example

1. Go to `./src/examples`.

   - The `/basics` folder contains examples highlighting the configurable properties that can be passed into `emojiBlast()` and `emojiBlasts()`.
   - The `/fun-stuff` folder contains the not-so-basic examples.

2. Follow `fun-stuff/example-template` or the code snippet below to create a new example explosion.
   The example variables have the following types (these are also listed in `./src/types/example-types`):

   - `name: string`
   - `blurb: string`
   - `explosionFunction: () => void`
   - `codeSnippet: string`
   - `disableButtonTime?: number` (optional)

3. Go to `emojisplosion-demo/src/components/side-bar/side-bar`.
4. Import `*` from your new example file at the top of `side-bar` following convention.
5. Add your imported example to the appropriate array in `SideBar`.

```javascript
import { emojiBlast } from "emoji-blast";

export const name = "Example name";

export const blurb = "Example description";

export const codeSnippet = `Copy paste the code from your handleClick below`;

export const explosionFunction = () => {
	emojiBlast({
		// Create your own explosion!!
	});
};

export const disableButtonTime = 0; // time in milliseconds (defaults to 0);
```
