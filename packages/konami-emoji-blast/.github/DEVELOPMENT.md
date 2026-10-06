# Development

> 🛠️ See the [root-level monorepo `.github/DEVELOPMENT.md` first](../../../.github/DEVELOPMENT.md) first.

## Building

Run [esbuild](https://esbuild.github.io) to build source files from [entry points](https://esbuild.github.io/api/#entry-points) under `src/mains/*.ts` to `dist/*.js` bundles of the same name.

```shell
pnpm build
```

Add `--watch` to run the builder in a watch mode:

```shell
pnpm build --watch
```
