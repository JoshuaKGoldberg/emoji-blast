import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import markdown from "eslint-plugin-markdown";
import n from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json";
import perfectionist from "eslint-plugin-perfectionist";
import * as regexp from "eslint-plugin-regexp";
import yml from "eslint-plugin-yml";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: [
			"**/.astro",
			"**/.nuxt",
			"**/*.snap",
			"**/node_modules",
			"coverage",
			"packages/*/dist",
			"packages/*/lib",
			"packages/*/webpack.config.*",
			"packages/emoji-blast-site/src/env.d.ts",
			"pnpm-*.yaml",
		],
	},
	{ linterOptions: { reportUnusedDisableDirectives: "error" } },
	eslint.configs.recommended,
	comments.recommended,
	jsdoc.configs["flat/contents-typescript-error"],
	jsdoc.configs["flat/logical-typescript-error"],
	jsdoc.configs["flat/stylistic-typescript-error"],
	jsonc.configs["flat/recommended-with-json"],
	markdown.configs.recommended,
	n.configs["flat/recommended"],
	perfectionist.configs["recommended-natural"],
	regexp.configs["flat/recommended"],
	{
		extends: [
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
		],
		files: ["**/*.{js,ts,tsx}"],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: [
						"*.config.*",
						"*.workspace.*",
						"packages/*/*.config.*s",
						"packages/*/bin/index.js",
					],
					maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 10,
				},
			},
		},
		rules: {
			"@typescript-eslint/no-unnecessary-condition": [
				"error",
				{ allowConstantLoopConditions: true },
			],
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true },
			],
			"n/no-extraneous-import": "off",
			"n/no-extraneous-require": "off",
			"n/no-missing-import": "off",
			"n/no-missing-require": "off",
			"n/no-unpublished-import": "off",
			"n/no-unsupported-features/node-builtins": [
				"error",
				{ allowExperimental: true },
			],

			// https://github.com/gajus/eslint-plugin-jsdoc/issues/1433
			"jsdoc/match-description": "off",

			// Stylistic concerns that don't interfere with Prettier
			"logical-assignment-operators": [
				"error",
				"always",
				{ enforceForIfStatements: true },
			],
			"no-useless-rename": "error",
			"object-shorthand": "error",
			"operator-assignment": "error",
		},
		settings: {
			perfectionist: { partitionByComment: true, type: "natural" },
			vitest: { typecheck: true },
		},
	},
	{
		extends: [packageJson.configs.recommended],
		files: ["**/package.json"],
		rules: {
			// https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/issues/1092
			"package-json/require-description": "off",
			"package-json/require-version": "off",
		},
	},
	{
		extends: [tseslint.configs.disableTypeChecked],
		files: ["**/*.md/*.ts"],
		rules: { "n/no-missing-import": "off" },
	},
	{
		extends: [vitest.configs.recommended],
		files: ["**/*.test.*"],
		rules: { "@typescript-eslint/no-unsafe-assignment": "off" },
	},
	{
		extends: [yml.configs["flat/standard"], yml.configs["flat/prettier"]],
		files: ["**/*.{yml,yaml}"],
		rules: {
			"yml/file-extension": ["error", { extension: "yml" }],
			"yml/sort-keys": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
			"yml/sort-sequence-values": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
		},
	},
);
