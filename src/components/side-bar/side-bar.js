import React from "react";
import { ExampleContainer } from "../example-container/example-container";

import * as basic from "../../examples/basic";
import * as rocket from "../../examples/rocket";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div style={styles.sideBarContainer}>
            <ExampleContainer handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
        </div>
    )
}