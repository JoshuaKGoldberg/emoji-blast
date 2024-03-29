import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
	"packages/*",
	{
		test: {
			clearMocks: true,
			include: ["packages/*/src"],
			setupFiles: ["console-fail-test/setup"],
		},
	},
]);
