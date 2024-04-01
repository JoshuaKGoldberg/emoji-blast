# Development

> 🛠️ See the [root-level monorepo `.github/DEVELOPMENT.md` first](../../../.github/DEVELOPMENT.md) first.

## Building

Each corresponds to a Webpack ["entry point"](https://webpack.js.org/concepts/entry-points) under `src/mains/*.ts` by the same name.

Run [webpack](https://webpack.js.org) to build source files from `src/` into output files in `dist/`:

```shell
pnpm build
```

Add `--watch` to run the builder in a watch mode:

```shell
pnpm build --watch
```

A set of `.html` files exists under `demo/` with a different way of showing off `emoji-blast` features.
Each demo file includes the `dist/` bundle of the same name.
