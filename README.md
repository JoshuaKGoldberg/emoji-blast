# Emojisplosion Demo Site

###[Emojisplosion Library](https://github.com/JoshuaKGoldberg/emojisplosion#emojisplosion)

## Running the repo: 

1. Clone repo
2. Run `npm install`
3. Run `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Creating a new example:

1. Go to `emojisplosion-demo/src/examples`
  - The `/basics` folder contains examples highlighting the configurable properties that can be passed into `emojisplosion()` and `emojisplosions()` 
  - The `/fun-stuff` folder contains the "less-basic" examples
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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
