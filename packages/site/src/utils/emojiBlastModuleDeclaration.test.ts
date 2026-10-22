import ts from "typescript";
import { describe, expect, it } from "vitest";

import { EMOJI_BLAST_MODULE_DECLARATION } from "./emojiBlastModuleDeclaration";

describe("EMOJI_BLAST_MODULE_DECLARATION", () => {
	it("compiles without errors", () => {
		const fileName = "/emoji-blast-types.d.ts";
		const options: ts.CompilerOptions = {
			module: ts.ModuleKind.ESNext,
			skipDefaultLibCheck: true,
			strict: true,
			target: ts.ScriptTarget.ESNext,
		};
		const host = ts.createCompilerHost(options);

		const program = ts.createProgram([fileName], options, {
			...host,
			getSourceFile: (name, ...rest) =>
				name === fileName
					? ts.createSourceFile(
							name,
							EMOJI_BLAST_MODULE_DECLARATION,
							ts.ScriptTarget.Latest,
						)
					: host.getSourceFile(name, ...rest),
		});

		const diagnostics = ts
			.getPreEmitDiagnostics(program)
			.map((diagnostic) =>
				ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
			);

		expect(diagnostics).toEqual([]);
	});
});
