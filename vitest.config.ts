import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		coverage: {
			all: true,
			exclude: ["dist", "lib"],
			include: ["src"],
			reporter: ["html", "lcov"],
		},
		exclude: ["dist", "lib", "node_modules"],
		setupFiles: ["console-fail-test/setup"],
	},
});
