# Emojisplosion Demo Site 🎉

### [Emojisplosion Library](https://github.com/JoshuaKGoldberg/emojisplosion#emojisplosion)
### [Live Site]((https://emojisplosion-site-cgradeff.vercel.app/))

## Running the site locally: 

1. Clone repo
2. Run `npm install`
3. Run `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Creating a new example:

1. Go to `emojisplosion-demo/src/examples`
  - The `/basics` folder contains examples highlighting the configurable properties that can be passed into `emojisplosion()` and `emojisplosions()` 
  - The `/fun-stuff` folder contains the not-so-basic examples
2. Follow `fun-stuff/example-template` or the below code snippet to create a new example explosion
3. Go to `emojisplosion-demo/src/components/side-bar/side-bar.js`
4. Import `*` from your new example file at the top of `side-bar.js` following convention
5. Create a new `<ExampleContainer/>` in `SideBar` and add the following props with your newly imported example
  - `name`
  - `blurb`
  - `explosionFunct`
  - `codeSnippet`
  - `disableButtonTime` (optional)

```javascript
import { emojisplosion } from "emojisplosion";

export const name = "Example name";

export const blurb = "Example description";

export const codeSnippet = `Copy paste the code from your handleClick below`;

export const explosionFunct = () => {
    emojisplosion({
        // Create your own explosion!!
    })
};

export const disableButtonTime = 0 // time in milliseconds (defaults to 0);
```
