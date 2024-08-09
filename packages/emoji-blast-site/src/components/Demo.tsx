import dedent from "dedent";
import { Highlight, themes } from "prism-react-renderer";

import { type DemosGroup, demoGroups } from "./data";

export interface DemoProps {
	group: DemosGroup;
	name: string;
}

export function Demo({ group, name }: DemoProps) {
	const demo = demoGroups[group].find((demo) => demo.name === name)!;
	const lines = demo.blaster
		.toString()
		.replaceAll("__vite_ssr_import_0__.", "")
		.split("\n");

	const code = dedent(lines.slice(1, lines.length - 1).join("\n"));

	return (
		<>
			<h2>{demo.name}</h2>
			<p>{demo.blurb}</p>

			<button onClick={demo.blaster}>Try It</button>

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
