# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/emojisplosion
cd emojisplosion
pnpm install
```

In order to develop this package, modify the `.ts` files under `src/`.
Run TypeScript locally to type check and build them into `lib/`:

```shell
pnpm build --watch
```

## Browsers

Separately, to update the files provided to browsers, run Webpack locally to build them into `.js` outputs under `dist/`:

```shell
pnpm webpack --watch
```

### Demos

A set of `.html` files exists under `demo/` with a different way of showing off Emojisplosion features.
Each corresponds to a Webpack ["entry point"](https://webpack.js.org/concepts/entry-points) under `./src/mains` under the same name.
