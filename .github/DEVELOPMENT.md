# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/emojisplosion
cd template-typescript-node-package
pnpm install
```

In order to develop this package, modify the `.ts` files under `src/`.
Run TypeScript locally to type check and build them into `lib/`:

```shell
pnpm build --watch
```

Separately, to update the files provided to browsers -including the demos in `demos/`, run Webpack locally to build them into outputs `.js` files under `dist/`:

```shell
pnpm webpack --watch
```
