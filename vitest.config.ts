import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			all: true,
			exclude: ["dist", "lib"],
			include: ["src"],
			reporter: ["html", "lcov"],
		},
	},
});
