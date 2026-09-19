# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/emoji-blast
cd emoji-blast
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Building

Run [TypeScript](https://typescriptlang.org) to build each project's files from its `src/` directory into output files in its `lib/` directory:

```shell
pnpm build
```

Add `--watch` to run the builder in a watch mode that continuously rebuilds as you save files:

```shell
pnpm build --watch
```

You should also see suggestions from TypeScript in your editor.

### Individual Packages

Note that some individual packages also have their own `build` command.
Each package `build` runs [webpack](https://webpack.js.org) to build source files from `src/` into output files in `dist/`.

You can run them all from the root with:

```shell
pnpm build:all
```

See each package's `.github/DEVELOPMENT.md` for per-package building instructions.

## Formatting

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

To manually reformat all files, you can run:

```shell
pnpm format --write
```

## Linting

This package includes several forms of linting to enforce consistent code quality and styling.
Each should be shown in VS Code, and can be run manually on the command-line:

- `pnpm lint` ([ESLint](https://eslint.org) with [typescript-eslint](https://typescript-eslint.io)): Lints JavaScript and TypeScript source files
- `pnpm lint:knip` ([knip](https://github.com/webpro/knip)): Detects unused files, dependencies, and code exports
- `pnpm lint:packages` ([pnpm dedupe --check](https://pnpm.io/cli/dedupe)): Checks for unnecessarily duplicated packages in the `pnpm-lock.yml` file
- `pnpm lint:spelling` ([cspell](https://cspell.org)): Spell checks across all source files

## Testing

[Vitest](https://vitest.dev) is used for tests.
You can run it on the command-line:

```shell
pnpm run test
```

Add the `--coverage` flat to compute test coverage and place reports in the `coverage/` directory:

```shell
pnpm run test --coverage
```

### Debugging Tests

This repository includes a [VS Code launch configuration](https://code.visualstudio.com/docs/editor/debugging) for debugging unit tests.
To launch it, open a test file, then run _Debug Current Test File_ from the VS Code Debug panel (or press F5).

## Website

This package includes an [Astro Starlight](https://starlight.astro.build) website in `packages/site`.
See its documentation in [its own `README.md`](packages/site/README.md).

## Releases

Releases are managed by [changesets](https://github.com/changesets/changesets) and published automatically from CI.

### Adding a Changeset

Any PR that changes a published package should include a changeset describing the change.
Run the CLI and follow its prompts to select the package(s) and semver bump:

```shell
pnpm changeset
```

That creates a Markdown file in `.changeset/` that is committed alongside the PR.
Changes that don't need a release (docs, tests, tooling) don't need a changeset.

### Publishing

The [`Release` workflow](./workflows/release.yml) runs on every push to `main`:

1. If there are pending changesets, [`changesets/action`](https://github.com/changesets/action) opens or updates a _Version Packages_ PR that bumps versions and updates `CHANGELOG.md` files.
2. Merging that PR runs the workflow again, which publishes the bumped packages to npm with `pnpm changeset publish`, pushes git tags, and creates GitHub releases.

Publishing authenticates with [npm trusted publishing](https://docs.npmjs.com/trusted-publishers) (OIDC), so no npm token is stored in the repository.
Each package must have a trusted publisher configured on npmjs.com pointing at this repository's `release.yml` workflow.

> Brand-new packages can't be created through trusted publishing.
> The first version of a new package must be published manually (`pnpm publish` from its directory), after which the trusted publisher can be set up in the package's npm settings.
