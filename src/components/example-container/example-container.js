import React from "react";
import { Button } from "./../button/button";
import { CodeBlurb } from "../code-blurb/code-blurb";
import * as styles from './styles';

export function ExampleContainer({name, handleClick, codeSnippet}) {
    return (
        <div style={styles.container}>
            <h3>{name}</h3>
            <Button handleClick={handleClick}></Button>
            <CodeBlurb codeSnippet={codeSnippet}></CodeBlurb>
        </div>
    )
} 