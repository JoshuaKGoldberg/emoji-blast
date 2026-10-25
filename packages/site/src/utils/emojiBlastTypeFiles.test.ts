import { describe, expect, it } from "vitest";

import { EMOJI_BLAST_TYPE_FILES } from "./emojiBlastTypeFiles";

describe("EMOJI_BLAST_TYPE_FILES", () => {
	const filePaths = EMOJI_BLAST_TYPE_FILES.map(({ filePath }) => filePath);

	it("includes the package.json", () => {
		expect(filePaths).toContain(
			"file:///node_modules/emoji-blast/package.json",
		);
	});

	it("includes the index.d.ts", () => {
		expect(filePaths).toContain(
			"file:///node_modules/emoji-blast/lib/index.d.ts",
		);
	});
});
