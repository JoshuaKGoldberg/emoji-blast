import react from "@vitejs/plugin-react";
import { defineProject } from "vitest/config";

export default defineProject({
	plugins: [react()],
	test: {
		clearMocks: true,
		environment: "jsdom",
		exclude: ["lib", "node_modules"],
		setupFiles: ["console-fail-test/setup"],
	},
});
