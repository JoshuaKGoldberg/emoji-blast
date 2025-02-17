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
	},
});
