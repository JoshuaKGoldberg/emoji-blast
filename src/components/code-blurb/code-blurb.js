import React from "react";
import { CodeBlock } from "react-code-blocks";
import { snippetTheme } from "../../colors/code-snippet-theme";

import * as styles from "./styles";

export function CodeBlurb({codeSnippet}) {
    return (
        <div style={styles.codeBlurb}>
            <CodeBlock
                text={codeSnippet}
                language="javascript"
                showLineNumbers={false}
                theme={snippetTheme}
                codeBlock
            />
        </div>
    )
} 