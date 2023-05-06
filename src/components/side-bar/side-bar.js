/** @jsxImportSource @emotion/react */
import { ExampleContainer } from "../example-container/example-container";

import * as emojisplosions from "../../examples/emojisplosions";
import * as emojisplosion from "../../examples/emojisplosion";
import * as numEmojis from "../../examples/num-emojis";
import * as alwaysBlue from "../../examples/always-blue";
import * as setPosition from "../../examples/set-position";
import * as large from "../../examples/large";
import * as gravity from "../../examples/gravity";
import * as baseEle from "../../examples/base-element";
import * as fish from "../../examples/fish";
import * as rocket from "../../examples/rocket";
import * as heart from "../../examples/heart";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div css={styles.sideBarContainer}>
            <ExampleContainer name={emojisplosions.name} blurb={emojisplosions.blurb} handleClick={emojisplosions.handleClick} codeSnippet={emojisplosions.codeSnippet} />
            <ExampleContainer name={emojisplosion.name} blurb={emojisplosion.blurb} handleClick={emojisplosion.handleClick} codeSnippet={emojisplosion.codeSnippet} />
            <ExampleContainer name={numEmojis.name} blurb={numEmojis.blurb} handleClick={numEmojis.handleClick} codeSnippet={numEmojis.codeSnippet} />
            <ExampleContainer name={alwaysBlue.name} blurb={alwaysBlue.blurb} handleClick={alwaysBlue.handleClick} codeSnippet={alwaysBlue.codeSnippet} />
            <ExampleContainer name={setPosition.name} blurb={setPosition.blurb} handleClick={setPosition.handleClick} codeSnippet={setPosition.codeSnippet} />
            <ExampleContainer name={large.name} blurb={large.blurb} handleClick={large.handleClick} codeSnippet={large.codeSnippet} />
            <ExampleContainer name={gravity.name} blurb={gravity.blurb} handleClick={gravity.handleClick} codeSnippet={gravity.codeSnippet} />
            <ExampleContainer name={baseEle.name} blurb={baseEle.blurb} handleClick={baseEle.handleClick} codeSnippet={baseEle.codeSnippet} />
            <ExampleContainer name={fish.name} blurb={fish.blurb} handleClick={fish.handleClick} codeSnippet={fish.codeSnippet} />
            <ExampleContainer name={rocket.name} blurb={rocket.blurb} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet} />
            <ExampleContainer name={heart.name} blurb={heart.blurb} handleClick={heart.handleClick} codeSnippet={heart.codeSnippet} />
        </div>
    )
}