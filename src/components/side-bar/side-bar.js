import React from "react";
import { ExampleContainer } from "../example-container/example-container";

import * as basic from "../../examples/basic";
import * as rocket from "../../examples/rocket";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div style={styles.sideBarContainer}>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
            <ExampleContainer name={basic.name} handleClick={basic.handleClick} codeSnippet={basic.codeSnippet}></ExampleContainer>
            <ExampleContainer name={rocket.name} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet}></ExampleContainer>
        </div>
    )
}