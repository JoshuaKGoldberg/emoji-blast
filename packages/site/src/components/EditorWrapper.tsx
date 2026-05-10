import Editor, { type Monaco } from "@monaco-editor/react";
import { Button } from "./Button";
import { useState } from "react";
import { emojiBlast } from "emoji-blast";
import emojiBlastFnTypes from "emoji-blast/lib/emojiBlast.d.ts?raw";

const DEFAULT_EDITOR_CONTENT = `import { emojiBlast } from "emoji-blast";

emojiBlast();
`;

export const EditorWrapper = () => {
	const [code, setCode] = useState(DEFAULT_EDITOR_CONTENT);
	const run = () => {
		const cleanCode = code.replace(/import\s+.*from\s+['"].*['"];?/g, "");
		const fn = new Function("emojiBlast", cleanCode);
		fn(emojiBlast);
	};

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
			`declare module "emoji-blast" { ${emojiBlastFnTypes} }`,
			"file:///emoji-blast-types.d.ts",
		);
	};

	return (
		<>
			<Editor
				value={code}
				beforeMount={handleBeforeMount}
				onChange={(v) => setCode(v ?? "")}
				language="typescript"
				theme="vs-dark"
				options={{
					minimap: { enabled: false },
					fontSize: 16,
					automaticLayout: true,
					tabSize: 2,
				}}
			/>
			<Button
				onClick={run}
				as="button"
				style={{
					position: "absolute",
					top: 12,
					right: 12,
				}}
			>
				Run
			</Button>
		</>
	);
};
