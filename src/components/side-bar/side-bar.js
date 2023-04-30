/** @jsxImportSource @emotion/react */
import { ExampleContainer } from "../example-container/example-container";

import * as basic from "../../examples/basic";
import * as rocket from "../../examples/rocket";
import * as gravity from "../../examples/gravity";
import * as baseEle from "../../examples/base-element";
import * as size from "../../examples/size";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div css={styles.sideBarContainer}>
            <ExampleContainer name={basic.name} blurb={basic.blurb} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} blurb={rocket.blurb} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={gravity.name} blurb={gravity.blurb} handleClick={gravity.handleClick} codeSnippet={gravity.codeSnippet}></ExampleContainer>
            <ExampleContainer name={baseEle.name} blurb={baseEle.blurb} handleClick={baseEle.handleClick} codeSnippet={baseEle.codeSnippet}></ExampleContainer>
            <ExampleContainer name={size.name} blurb={size.blurb} handleClick={size.handleClick} codeSnippet={size.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} blurb={basic.blurb} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} blurb={basic.blurb} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} blurb={basic.blurb} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} blurb={basic.blurb} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} blurb={basic.blurb} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
        </div>
    )
}