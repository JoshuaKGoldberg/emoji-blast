import Editor, { type Monaco } from "@monaco-editor/react";
import emojiBlastTypeSource from "emoji-blast/lib/emojiBlast.d.ts?raw";

import { usePlaygroundState } from "~/hooks/usePlaygroundState";
import { useStarlightTheme } from "~/hooks/useStarlightTheme";
import { runPlaygroundCode } from "~/utils/runPlaygroundCode";

import { Button } from "./Button";

const EMOJI_BLAST_PACKAGE_METADATA = {
	url: "https://www.npmjs.com/package/emoji-blast/v/0.11.0",
	version: "v0.11.0",
};

const DEFAULT_EDITOR_CONTENT = `import { emojiBlast } from "emoji-blast";

// 🦉 Welcome to the emoji-blast playground!
// Try hovering over the 'emojiBlast' function or the option fields.

emojiBlast({
  emojiCount: 8,
  uniqueness: 2,
  emojis: ["✨", "🔥", "🚀"],
  physics: {
    gravity: 0.4,
    initialVelocities: {
      rotation: { max: 20, min: -20 },
    },
  },
});
`;

export const PlaygroundEditor = () => {
	const [editorValue, setEditorValue] = usePlaygroundState(
		DEFAULT_EDITOR_CONTENT,
	);

	// TODO monaco-editor v0.55.1 is going through some migrations that are affecting
	// the stability of the type surface. Scheduled to be fixed in v0.56.0 though!
	// https://github.com/microsoft/monaco-editor/issues/5133
	/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
	const setupMonaco = (monaco: Monaco) => {
		const ts = monaco.languages.typescript as any;

		const compilerOptions = {
			allowNonTsExtensions: true,
			module: ts.ModuleKind.ESNext,
			strict: true,
			target: ts.ScriptTarget.ESNext,
		};

		ts.typescriptDefaults.setCompilerOptions(compilerOptions);

		ts.typescriptDefaults.addExtraLib(
			`declare module "emoji-blast" { ${emojiBlastTypeSource} }`,
			"file:///emoji-blast-types.d.ts",
		);
	};
	/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

	const theme = useStarlightTheme();
	const monacoTheme = theme === "dark" ? "vs-dark" : "light";

	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "12px",
				}}
			>
				<Button
					as="button"
					onClick={() => {
						runPlaygroundCode(editorValue);
					}}
					style={{ paddingBlock: "2px", paddingInline: "18px" }}
				>
					Run Code
				</Button>
				<a href={EMOJI_BLAST_PACKAGE_METADATA.url} target="_blank">
					{EMOJI_BLAST_PACKAGE_METADATA.version}
				</a>
			</div>
			<Editor
				beforeMount={setupMonaco}
				language="typescript"
				onChange={(v) => {
					setEditorValue(v ?? "");
				}}
				options={{
					automaticLayout: true,
					fontSize: 16,
					minimap: { enabled: false },
					tabSize: 2,
				}}
				theme={monacoTheme}
				value={editorValue}
			/>
		</div>
	);
};
