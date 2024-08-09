import dedent from "dedent";
import { Highlight, themes } from "prism-react-renderer";

import type { DemoData } from "./data";

export interface DemoSelectorProps {
	data: DemoData;
}

export function DemoSelector({ data }: DemoSelectorProps) {
	const lines = data.blaster
		.toString()
		.replaceAll("__vite_ssr_import_0__.", "")
		.split("\n");

	const code = dedent(lines.slice(1, lines.length - 1).join("\n"));

	return (
		<div id={data.name}>
			<h2>{data.name}</h2>
			<p>{data.blurb}</p>
			<button onClick={data.blaster}>Try It</button>

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
		</div>
	);
}
