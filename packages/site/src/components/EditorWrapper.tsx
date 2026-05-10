import Editor, { type Monaco } from "@monaco-editor/react";
import { Button } from "./Button";
import { useState } from "react";
import * as EmojiLib from "emoji-blast";
import emojiBlastFnTypes from "emoji-blast/lib/emojiBlast.d.ts?raw";
import { transform } from "sucrase";

const DEFAULT_EDITOR_CONTENT = `import { emojiBlast } from "emoji-blast";

emojiBlast();
`;

export const EditorWrapper = () => {
	const [code, setCode] = useState(DEFAULT_EDITOR_CONTENT);
	const run = () => {
		const compiled = transform(code, {
			transforms: ["typescript", "imports"],
		}).code;

		const fn = new Function("require", compiled);

		const customRequire = (moduleName: string) => {
			if (moduleName === "emoji-blast") {
				return EmojiLib;
			}
			throw new Error(`Module "${moduleName}" not found in sandbox.`);
		};

		fn(customRequire);
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
