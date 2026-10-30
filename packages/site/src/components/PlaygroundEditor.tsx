import type * as MonacoEditor from "monaco-editor";

import Editor, { type Monaco } from "@monaco-editor/react";
import { version } from "emoji-blast/package.json";
import { useState } from "react";
import { useStarlightTheme } from "use-starlight-theme";

import { usePlaygroundSandbox } from "~/playground/usePlaygroundSandbox";
import { EMOJI_BLAST_TYPE_FILES } from "~/utils/emojiBlastTypeFiles";

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
  emojis: ["✨", "🔥", "🚀"],
  physics: {
    gravity: { acceleration: 0.4 },
    initialVelocities: {
      rotation: { max: 20, min: -20 },
    },
  },
});
`;

const MAX_ERROR_LENGTH = 200;

const truncateText = (text: string, maxLength: number) => {
	// split by code point, so an emoji in the text isn't cut in half
	const characters = Array.from(text);

	return characters.length > maxLength
		? `${characters.slice(0, maxLength - 1).join("")}…`
		: text;
};

export const PlaygroundEditor = () => {
	const [editorValue, setEditorValue] = useState(DEFAULT_EDITOR_CONTENT);
	const [error, setError] = useState<string | undefined>(undefined);
	const [hasBlasted, setHasBlasted] = useState(false);

	const { runCodeSnippet, sandbox } = usePlaygroundSandbox({
		onRan: ({ error }) => {
			setError(error);
			setHasBlasted(!error);
		},
	});

	const runCode = () => {
		runCodeSnippet(editorValue);
	};

	const setupMonaco = (monaco: Monaco) => {
		const { typescript } = monaco as typeof MonacoEditor;

		typescript.typescriptDefaults.setCompilerOptions({
			allowNonTsExtensions: true,
			module: typescript.ModuleKind.ESNext,
			moduleResolution: typescript.ModuleResolutionKind.NodeJs,
			strict: true,
			target: typescript.ScriptTarget.ESNext,
		});

		for (const { content, filePath } of EMOJI_BLAST_TYPE_FILES) {
			typescript.typescriptDefaults.addExtraLib(content, filePath);
		}
	};

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
				<div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
					<Button
						as="button"
						onClick={runCode}
						style={{ paddingBlock: "2px", paddingInline: "18px" }}
					>
						{hasBlasted ? "Blast Off!" : "Run Code"}
					</Button>
					{error && (
						<div
							style={{
								backgroundColor: "red",
								borderRadius: "5px",
								color: "white",
								fontFamily: "Monospace",
								fontWeight: "bold",
								paddingInline: "6px",
							}}
						>
							[Error] {truncateText(error, MAX_ERROR_LENGTH)}
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
					setError(undefined);
					setHasBlasted(false);
				}}
				options={{
					automaticLayout: true,
					fontSize: 16,
					minimap: { enabled: false },
					tabSize: 2,
				}}
				// Node module resolution searches node_modules from the importing
				// file's directory, so the model must live next to the extra libs.
				path="file:///index.ts"
				theme={monacoTheme}
				value={editorValue}
			/>
			{sandbox}
		</div>
	);
};
