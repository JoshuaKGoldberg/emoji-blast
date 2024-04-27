import { CodeBlock } from "react-code-blocks";

import { snippetTheme } from "../../colors/code-snippet-theme";
import * as styles from "./styles";

interface CodeBlurbProps {
	codeSnippet: string;
}

export function CodeBlurb({ codeSnippet }: CodeBlurbProps) {
	return (
		<div css={styles.codeBlurb}>
			<CodeBlock
				language="javascript"
				showLineNumbers={false}
				text={codeSnippet}
				theme={snippetTheme}
			/>
		</div>
	);
}
