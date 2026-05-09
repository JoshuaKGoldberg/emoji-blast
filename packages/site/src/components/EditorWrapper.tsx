import Editor from "@monaco-editor/react";

export default function EditorWrapper() {
	return (
		<Editor
			height="100%"
			defaultLanguage="typescript"
			defaultValue="// Happy coding!"
			theme="vs-dark"
			className="playground-editor"
		/>
	);
}
