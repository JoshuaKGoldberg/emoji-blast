import React from "react";
import { Button } from "./../button/button";
import { CodeBlurb } from "../code-blurb/code-blurb";
import * as styles from './styles';

export function ExampleContainer({name, handleClick, codeSnippet}) {
    return (
        <div style={styles.container}>
            <p style={styles.name}>{name}</p>
            <CodeBlurb codeSnippet={codeSnippet}></CodeBlurb>
            <Button handleClick={handleClick}></Button>
        </div>
    )
} 