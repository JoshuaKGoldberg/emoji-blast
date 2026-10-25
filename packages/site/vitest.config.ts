import path from "node:path";
import { defineProject } from "vitest/config";

import { iifeBundle } from "./plugins/iifeBundle.ts";

export default defineProject({
	plugins: [iifeBundle()],
	resolve: {
		alias: {
			"~": path.resolve(import.meta.dirname, "src"),
		},
	},
	test: {
		clearMocks: true,
		environment: "jsdom",
		include: ["plugins/**/*.test.ts", "src/**/*.test.ts", "src/**/*.test.tsx"],
		name: "site",
		setupFiles: ["console-fail-test/setup"],
	},
});
