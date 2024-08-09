import dedent from "dedent";
import { Highlight, themes } from "prism-react-renderer";

export interface DemoProps {
	blaster: () => void;
}

export function Demo({ blaster }: DemoProps) {
	const lines = blaster
		.toString()
		.replaceAll("__vite_ssr_import_0__.", "")
		.split("\n");

	const code = dedent(lines.slice(1, lines.length - 1).join("\n"));

	return (
		<>
			<button onClick={blaster}>Try It</button>

			<Highlight code={code} language="javascript" theme={themes.vsLight}>
				{({ getLineProps, getTokenProps, style, tokens }) => (
					<pre style={{ ...style, lineHeight: 0, padding: "1.5rem 1rem" }}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</>
	);
}
