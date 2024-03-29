# Development

> 🛠️ See the [root-level monorepo `.github/DEVELOPMENT.md` first](../../../.github/DEVELOPMENT.md) first.

## Building

Run [webpack](https://webpack.js.org) to build source files from Webpack ["entry point"](https://webpack.js.org/concepts/entry-points) under `src/mains/*.ts` to `dist/*.js` bundles of the same name.

```shell
pnpm build
```

Add `--watch` to run the builder in a watch mode:

```shell
pnpm build --watch
```
