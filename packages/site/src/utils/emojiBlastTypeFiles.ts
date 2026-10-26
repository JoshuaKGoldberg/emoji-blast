const typeSources = import.meta.glob<string>(
	[
		"../../node_modules/emoji-blast/package.json",
		"../../node_modules/emoji-blast/lib/**/*.d.ts",
	],
	{ eager: true, import: "default", query: "?raw" },
);

const toVirtualPath = (filePath: string) =>
	filePath.replace(/^.*\/node_modules\//, "file:///node_modules/");

// Mirror emoji-blast's node_modules layout so TypeScript can resolve it.
export const EMOJI_BLAST_TYPE_FILES = Object.entries(typeSources).map(
	([filePath, content]) => ({
		content,
		filePath: toVirtualPath(filePath),
	}),
);
