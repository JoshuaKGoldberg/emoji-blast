import Editor, { type Monaco } from "@monaco-editor/react";
import emojiBlastTypeSource from "emoji-blast/lib/emojiBlast.d.ts?raw";
import { version } from "emoji-blast/package.json";
import { useEffect, useRef, useState } from "react";
import { transform } from "sucrase";
import { useStarlightTheme } from "use-starlight-theme";

import {
	PlaygroundSandbox,
	type PlaygroundSandboxHandle,
} from "~/playground/PlaygroundSandbox";
import {
	buildShareUrl,
	readCodeFromHash,
	writeCodeToHash,
} from "~/playground/urlState";

import { Button } from "./Button";

const EMOJI_BLAST_PACKAGE_METADATA = {
	url: `https://www.npmjs.com/package/emoji-blast/v/${version}`,
	version: `v${version}`,
};

const HASH_WRITE_DELAY_MS = 400;

const SHARE_LABEL_RESET_MS = 2000;

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

const buttonStyle = { paddingBlock: "2px", paddingInline: "18px" };

export const PlaygroundEditor = () => {
	const [editorValue, setEditorValue] = useState(DEFAULT_EDITOR_CONTENT);
	const [error, setError] = useState<string | undefined>(undefined);
	const [shareLabel, setShareLabel] = useState("Share");

	const sandboxRef = useRef<PlaygroundSandboxHandle>(null);

	// Shared snippets are loaded into the editor but never run on arrival: the
	// sandbox is what makes them safe to run, and requiring a click means a link
	// cannot execute anything on its own even if that sandbox ever gives way.
	useEffect(() => {
		void (async () => {
			const shared = await readCodeFromHash();

			if (shared !== undefined) {
				setEditorValue(shared);
			}
		})();
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			void writeCodeToHash(
				editorValue === DEFAULT_EDITOR_CONTENT ? undefined : editorValue,
			);
		}, HASH_WRITE_DELAY_MS);

		return () => {
			clearTimeout(timeout);
		};
	}, [editorValue]);

	const runCode = () => {
		setError(undefined);

		let transpiled;

		try {
			transpiled = transform(editorValue, {
				transforms: ["typescript", "imports"],
			}).code;
		} catch (caught) {
			setError(caught instanceof Error ? caught.message : String(caught));
			return;
		}

		sandboxRef.current?.run(transpiled);
	};

	const shareCode = () => {
		void (async () => {
			await navigator.clipboard.writeText(await buildShareUrl(editorValue));

			setShareLabel("Copied!");
			setTimeout(() => {
				setShareLabel("Share");
			}, SHARE_LABEL_RESET_MS);
		})();
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
				<div style={{ display: "flex", gap: "8px" }}>
					<Button as="button" onClick={runCode} style={buttonStyle}>
						Run Code
					</Button>
					<Button as="button" onClick={shareCode} style={buttonStyle}>
						{shareLabel}
					</Button>
				</div>
				<a href={EMOJI_BLAST_PACKAGE_METADATA.url} target="_blank">
					{EMOJI_BLAST_PACKAGE_METADATA.version}
				</a>
			</div>
			{error !== undefined && (
				<div
					style={{
						fontFamily: "Monospace",
						marginInline: "12px",
						overflowX: "auto",
					}}
				>
					{error}
				</div>
			)}
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
			<PlaygroundSandbox onError={setError} ref={sandboxRef} />
		</div>
	);
};
