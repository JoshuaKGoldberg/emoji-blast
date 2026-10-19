import { defineProject } from "vitest/config";

export default defineProject({
	test: {
		clearMocks: true,
		environment: "jsdom",
		include: ["src/**/*.test.t*"],
		name: "emoji-blast",
		restoreMocks: true,
		setupFiles: ["console-fail-test/setup"],
		testTimeout: 10_000,
		unstubGlobals: true,
	},
});
