/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:eslint-comments/recommended",
		"plugin:perfectionist/recommended-natural",
		"plugin:regexp/recommended",
		"plugin:vitest/recommended",
	],
	ignorePatterns: [
		"!.*",
		"**/.astro",
		"**/.nuxt",
		"**/dist",
		"**/lib",
		"coverage",
		"node_modules",
		"packages/emoji-blast-site/src/env.d.ts",
		"pnpm-lock.yaml",

		// Pending investigating how to get Nuxt/Vue linting set up...
		"packages/konami-emoji-blast-nuxt",
	],
	overrides: [
		{
			extends: ["plugin:markdown/recommended-legacy"],
			files: ["**/*.md"],
			processor: "markdown/markdown",
		},
		{
			extends: [
				"plugin:jsdoc/recommended-typescript-error",
				"plugin:@typescript-eslint/strict",
				"plugin:@typescript-eslint/stylistic",
			],
			files: ["**/*.{ts,tsx}"],
			parser: "@typescript-eslint/parser",
			rules: {
				// These off-by-default rules work well for this repo and we like them on.
				"jsdoc/informative-docs": "error",
				"logical-assignment-operators": [
					"error",
					"always",
					{ enforceForIfStatements: true },
				],
				"operator-assignment": "error",

				// These on-by-default rules don't work well for this repo and we like them off.
				"jsdoc/require-jsdoc": "off",
				"jsdoc/require-param": "off",
				"jsdoc/require-property": "off",
				"jsdoc/require-returns": "off",
			},
		},
		{
			excludedFiles: ["**/*.md/*.{ts,tsx}"],
			extends: [
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
			],
			files: ["**/*.{ts,tsx}"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				// Blocked from EXPERIMENTAL_useProjectService on:
				// https://github.com/typescript-eslint/typescript-eslint/issues/8206
				project: ["./**/tsconfig.eslint.json", "./**/tsconfig.json"],
			},
			rules: {
				// TODO: It'd be nice to enable these eventually.
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/no-non-null-assertion": "off",

				// These off-by-default rules work well for this repo and we like them on.
				"deprecation/deprecation": "error",

				// These too-strict-by-default rules work well for this repo, when configured:
				"@typescript-eslint/restrict-template-expressions": [
					"error",
					{
						allowNumber: true,
					},
				],
			},
		},
		{
			excludedFiles: ["**/package.json"],
			extends: ["plugin:jsonc/recommended-with-json"],
			files: ["*.json", "*.jsonc"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/comma-dangle": "off",
				"jsonc/sort-keys": "error",
			},
		},
		{
			files: ["*.jsonc"],
			rules: {
				"jsonc/no-comments": "off",
			},
		},
		{
			extends: ["plugin:package-json/recommended"],
			files: ["package.json"],
			parser: "jsonc-eslint-parser",
			plugins: ["package-json"],
			rules: {
				// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/issues/250
				"package-json/valid-package-def": "off",

				// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/issues/252
				"package-json/valid-repository-directory": "off",
			},
		},
		{
			files: "**/*.test.{ts,tsx}",
			rules: {
				// These on-by-default rules aren't useful in test files.
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
			},
		},
		{
			extends: ["plugin:yml/standard", "plugin:yml/prettier"],
			files: ["**/*.{yml,yaml}"],
			parser: "yaml-eslint-parser",
			rules: {
				"yml/sort-keys": [
					"error",
					{
						order: { type: "asc" },
						pathPattern: "^.*$",
					},
				],
				"yml/sort-sequence-values": [
					"error",
					{
						order: { type: "asc" },
						pathPattern: "^.*$",
					},
				],
			},
		},
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"deprecation",
		"jsdoc",
		"perfectionist",
		"regexp",
		"vitest",
	],
	reportUnusedDisableDirectives: true,
	root: true,
	rules: {
		// These off/less-strict-by-default rules work well for this repo and we like them on.
		"@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "all" }],

		// These on-by-default rules don't work well for this repo and we like them off.
		"no-case-declarations": "off",
		"no-constant-condition": "off",
		"no-inner-declarations": "off",
		"no-mixed-spaces-and-tabs": "off",

		// Stylistic concerns that don't interfere with Prettier
		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{ blankLine: "always", next: "*", prev: "block-like" },
		],
		"no-useless-rename": "error",
		"object-shorthand": "error",
		"perfectionist/sort-objects": [
			"error",
			{
				order: "asc",
				"partition-by-comment": true,
				type: "natural",
			},
		],
	},
};
