import Editor, { type Monaco } from "@monaco-editor/react";
import { Button } from "./Button";
import { useState } from "react";
import emojiBlastTypeSource from "emoji-blast/lib/emojiBlast.d.ts?raw";
import { useTheme } from "~/hooks/useTheme";
import { executePlaygroundCode } from "~/utils/executePlaygroundCode";

const EMOJI_BLAST_PACKAGE = {
	version: "0.11.0",
	url: "https://www.npmjs.com/package/emoji-blast/v/0.11.0",
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
	const [code, setCode] = useState(DEFAULT_EDITOR_CONTENT);

	const handleBeforeMount = (monaco: Monaco) => {
		const compilerOptions = {
			strict: true,
			target: monaco.languages.typescript.ScriptTarget.ESNext,
			module: monaco.languages.typescript.ModuleKind.ESNext,
			allowNonTsExtensions: true,
		};

		monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
			compilerOptions,
		);

		monaco.languages.typescript.typescriptDefaults.addExtraLib(
			`declare module "emoji-blast" { ${emojiBlastTypeSource} }`,
			"file:///emoji-blast-types.d.ts",
		);
	};

	const theme = useTheme();
	const monacoTheme = theme === "dark" ? "vs-dark" : "light";

	return (
		<div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<div
				style={{
					margin: "12px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Button
					style={{ paddingInline: "18px", paddingBlock: "2px" }}
					onClick={() => executePlaygroundCode(code)}
					as="button"
				>
					Run Code
				</Button>
				<a href={EMOJI_BLAST_PACKAGE.url} target="_blank">
					{EMOJI_BLAST_PACKAGE.version}
				</a>
			</div>
			<Editor
				value={code}
				beforeMount={handleBeforeMount}
				onChange={(v) => setCode(v ?? "")}
				language="typescript"
				theme={monacoTheme}
				options={{
					minimap: { enabled: false },
					fontSize: 16,
					automaticLayout: true,
					tabSize: 2,
				}}
			/>
		</div>
	);
};
