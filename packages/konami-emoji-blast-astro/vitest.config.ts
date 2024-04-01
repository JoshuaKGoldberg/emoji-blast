import { defineProject } from "vitest/config";

export default defineProject({
	test: {
		clearMocks: true,
		exclude: ["lib", "node_modules"],
	},
});
