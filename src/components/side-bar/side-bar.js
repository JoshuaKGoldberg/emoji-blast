/** @jsxImportSource @emotion/react */
import { ExampleContainer } from "../example-container/example-container";

import * as emojisplosions from "../../examples/basics/emojisplosions";
import * as emojisplosion from "../../examples/basics/emojisplosion";
import * as numEmojis from "../../examples/basics/num-emojis";
import * as alwaysBlue from "../../examples/basics/always-blue";
import * as setPosition from "../../examples/basics/set-position";
import * as titleExplosion from "../../examples/basics/title-explosion";
import * as large from "../../examples/basics/large";
import * as inverseGravity from "../../examples/basics/inverse-gravity";
import * as spinnin from "../../examples/basics/spinnin";

import * as fish from "../../examples/fun-stuff/fish";
import * as rocket from "../../examples/fun-stuff/rocket";
import * as heart from "../../examples/fun-stuff/heart";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div css={styles.sideBarContainer}>
            <ExampleContainer name={emojisplosions.name} blurb={emojisplosions.blurb} handleClick={emojisplosions.handleClick} codeSnippet={emojisplosions.codeSnippet} />
            <ExampleContainer name={emojisplosion.name} blurb={emojisplosion.blurb} handleClick={emojisplosion.handleClick} codeSnippet={emojisplosion.codeSnippet} />
            <ExampleContainer name={numEmojis.name} blurb={numEmojis.blurb} handleClick={numEmojis.handleClick} codeSnippet={numEmojis.codeSnippet} />
            <ExampleContainer name={alwaysBlue.name} blurb={alwaysBlue.blurb} handleClick={alwaysBlue.handleClick} codeSnippet={alwaysBlue.codeSnippet} />
            <ExampleContainer name={setPosition.name} blurb={setPosition.blurb} handleClick={setPosition.handleClick} codeSnippet={setPosition.codeSnippet} />
            <ExampleContainer name={titleExplosion.name} blurb={titleExplosion.blurb} handleClick={titleExplosion.handleClick} codeSnippet={titleExplosion.codeSnippet} />
            <ExampleContainer name={large.name} blurb={large.blurb} handleClick={large.handleClick} codeSnippet={large.codeSnippet} />
            <ExampleContainer name={inverseGravity.name} blurb={inverseGravity.blurb} handleClick={inverseGravity.handleClick} codeSnippet={inverseGravity.codeSnippet} />
            <ExampleContainer name={spinnin.name} blurb={spinnin.blurb} handleClick={spinnin.handleClick} codeSnippet={spinnin.codeSnippet} />
            <ExampleContainer name={fish.name} blurb={fish.blurb} handleClick={fish.handleClick} codeSnippet={fish.codeSnippet} />
            <ExampleContainer name={rocket.name} blurb={rocket.blurb} handleClick={rocket.handleClick} codeSnippet={rocket.codeSnippet} />
            <ExampleContainer name={heart.name} blurb={heart.blurb} handleClick={heart.handleClick} codeSnippet={heart.codeSnippet} />
        </div>
    )
}