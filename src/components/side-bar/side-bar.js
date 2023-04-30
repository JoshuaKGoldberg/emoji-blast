/** @jsxImportSource @emotion/react */
import { ExampleContainer } from "../example-container/example-container";

import * as basic from "../../examples/basic";
import * as rocket from "../../examples/rocket";
import * as gravity from "../../examples/gravity";
import * as baseEle from "../../examples/base-element";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div css={styles.sideBarContainer}>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={gravity.name} handleClick={gravity.handleClick} codeSnippet={gravity.codeSnippet}></ExampleContainer>
            <ExampleContainer name={baseEle.name} handleClick={baseEle.handleClick} codeSnippet={baseEle.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
        </div>
    )
}