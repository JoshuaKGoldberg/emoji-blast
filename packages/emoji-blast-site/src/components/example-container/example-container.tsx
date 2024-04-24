/** @jsxImportSource @emotion/react */

import { Button } from "./../button/button";
import { CodeBlurb } from "../code-blurb/code-blurb";

import * as styles from './styles';

type ExampleContainerProps = {
    name: string,
    blurb: string,
    explosionFunct: () => void,
    codeSnippet: string,
    disableButtonTime?: number
};

export function ExampleContainer({name, blurb, explosionFunct, codeSnippet, disableButtonTime}: ExampleContainerProps) {
    return (
        <div css={styles.container}>
            <p css={styles.name}>{name}</p>
            <p css={styles.blurb}>{blurb}</p>
            <CodeBlurb codeSnippet={codeSnippet}></CodeBlurb>
            <Button explosionFunct={explosionFunct} disableButtonTime={disableButtonTime}></Button>
        </div>
    );
}; 