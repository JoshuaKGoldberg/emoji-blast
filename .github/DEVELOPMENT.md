# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/emojisplosion
cd template-typescript-node-package
pnpm install
```

## Building

In order to develop this package, modify the `.ts` files under `src/`.
Run TypeScript locally to type check them:

```shell
pnpm build --watch
```

Alternately, run Webpack locally to build them into outputs `.js` files under `lib/`:

```shell
pnpm webpack --watch
```
