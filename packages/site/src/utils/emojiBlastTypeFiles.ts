const typeSources = import.meta.glob<string>(
	[
		"../../node_modules/emoji-blast/package.json",
		"../../node_modules/emoji-blast/lib/**/*.d.ts",
		"!**/*.test.d.ts",
	],
	{ eager: true, import: "default", query: "?raw" },
);

const toVirtualPath = (filePath: string) =>
	filePath.replace(/^.*\/node_modules\//, "file:///node_modules/");

// Monaco resolves "emoji-blast" like Node does, so it needs the package.json
// (to find "main") alongside every declaration file at its usual location.
export const EMOJI_BLAST_TYPE_FILES = Object.entries(typeSources).map(
	([filePath, content]) => ({
		content,
		filePath: toVirtualPath(filePath),
	}),
);
