import Editor, { type Monaco } from "@monaco-editor/react";
import emojiBlastTypeSource from "emoji-blast/lib/emojiBlast.d.ts?raw";
import { version } from "emoji-blast/package.json";
import { useState } from "react";
import { useStarlightTheme } from "use-starlight-theme";

import { usePlaygroundSandbox } from "~/playground/usePlaygroundSandbox";

import { Button } from "./Button";

const EMOJI_BLAST_PACKAGE_METADATA = {
	url: `https://www.npmjs.com/package/emoji-blast/v/${version}`,
	version: `v${version}`,
};

const DEFAULT_EDITOR_CONTENT = `import { emojiBlast } from "emoji-blast";

// 🦉 Welcome to the emoji-blast playground!
// Try hovering over the 'emojiBlast' function or the option fields.

emojiBlast({
  emojiCount: 8,
  uniqueness: 2,
  emojis: ["✨", "🔥", "🚀"]
});
`;

export const PlaygroundEditor = () => {
	const [editorValue, setEditorValue] = useState(DEFAULT_EDITOR_CONTENT);
	const [error, setError] = useState<string | undefined>(undefined);

	const { runCodeSnippet, sandbox } = usePlaygroundSandbox({
		onError: setError,
	});

	const runCode = () => {
		setError(undefined);
		runCodeSnippet(editorValue);
	};

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
				<div style={{ alignItems: "center", display: "flex" }}>
					<Button
						as="button"
						onClick={runCode}
						style={{ paddingBlock: "2px", paddingInline: "18px" }}
					>
						Run Code
					</Button>
					{error !== undefined && (
						<div
							style={{
								backgroundColor: "red",
								borderRadius: "5px",
								color: "white",
								fontFamily: "Monospace",
								fontWeight: "bold",
								marginInline: "12px",
								overflowX: "auto",
								paddingInline: "6px",
							}}
						>
							[Error] {error}
						</div>
					)}
				</div>
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
			{sandbox}
		</div>
	);
};
