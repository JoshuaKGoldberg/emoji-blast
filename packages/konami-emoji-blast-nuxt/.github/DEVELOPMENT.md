# Development

> 🛠️ See the [root-level monorepo `.github/DEVELOPMENT.md` first](../../../.github/DEVELOPMENT.md) first.

To preview the plugin locally locally:

```shell
pnpm build
cd packages/konami-emoji-blast-nuxt
pnpm dev
```

...then visit <localhost:30000> in your browser.

## Building for Release

Run `pnpm build:release` to build source files into the `dist/` folder:

```shell
pnpm build:release
```
