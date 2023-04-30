import React from "react";

import * as styles from "./styles";

export function CodeBlurb({codeSnippet}) {
    return (
        <div style={styles.codeBlurb}>
            <p>{codeSnippet}</p>
        </div>
    )
} 