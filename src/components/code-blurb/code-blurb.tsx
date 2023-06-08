/** @jsxImportSource @emotion/react */

import { CodeBlock } from "react-code-blocks";
import { snippetTheme } from "../../colors/code-snippet-theme";

import * as styles from "./styles";

type CodeBlurbProps = {
    codeSnippet: string,
};

export function CodeBlurb({codeSnippet}: CodeBlurbProps) {
    return (
        <div css={styles.codeBlurb}>
            <CodeBlock
                text={codeSnippet}
                language="javascript"
                showLineNumbers={false}
                theme={snippetTheme}
                codeBlock
            />
        </div>
    );
}; 