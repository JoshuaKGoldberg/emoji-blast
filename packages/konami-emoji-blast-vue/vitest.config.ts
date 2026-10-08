import { defineProject } from "vitest/config";

export default defineProject({
	test: {
		clearMocks: true,
		environment: "jsdom",
		exclude: ["lib", "node_modules"],
		setupFiles: ["console-fail-test/setup"],
	},
});
