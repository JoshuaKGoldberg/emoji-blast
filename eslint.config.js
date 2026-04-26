import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import markdown from "@eslint/markdown";
import vitest from "@vitest/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import packageJson from "eslint-plugin-package-json";
import perfectionist from "eslint-plugin-perfectionist";
import * as regexp from "eslint-plugin-regexp";
import yml from "eslint-plugin-yml";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	globalIgnores([
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
	]),
	{ linterOptions: { reportUnusedDisableDirectives: "error" } },
	{
		extends: [eslintPluginAstro.configs.recommended],
		files: ["**/*.astro"],
		languageOptions: {
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
	},
	{
		extends: [
			eslint.configs.recommended,
			comments.recommended,
			jsdoc.configs["flat/contents-typescript-error"],
			jsdoc.configs["flat/logical-typescript-error"],
			jsdoc.configs["flat/stylistic-typescript-error"],
			jsonc.configs["flat/recommended-with-json"],
			markdown.configs.recommended,
			perfectionist.configs["recommended-natural"],
			regexp.configs["flat/recommended"],
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
					extraFileExtensions: [".astro"],
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
		// TODO: Enable these!
		rules: {
			"package-json/require-description": "off",
			"package-json/require-exports": "off",
			"package-json/require-files": "off",
			"package-json/require-sideEffects": "off",
			"package-json/specify-peers-locally": "off",
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
