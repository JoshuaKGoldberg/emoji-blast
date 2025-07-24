import * as fs from "node:fs";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			all: true,
			exclude: [
				"dist",
				"lib",
				"packages/konami-emoji-blast-typedoc",
				"packages/emoji-blast-site",
			],
			include: ["packages/*/src"],
			reporter: ["html", "lcov"],
		},
		projects: fs.readdirSync("./packages").map((name) => ({
			test: {
				clearMocks: true,
				include: ["**/src/**/*.test.t*"],
				name,
				root: `./packages/${name}`,
				setupFiles: ["console-fail-test/setup"],
				testTimeout: 10_000,
			},
		})),
	},
});
