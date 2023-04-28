import React from "react";
import { Button } from "./../button/button";
import { CodeBlurb } from "../code-blurb/code-blurb";
import * as styles from './styles';

export function ExampleContainer({handleClick, codeSnippet}) {
    return (
        <div style={styles.container}>
            <Button handleClick={handleClick}></Button>
            <CodeBlurb codeSnippet={codeSnippet}></CodeBlurb>
        </div>
    )
} 