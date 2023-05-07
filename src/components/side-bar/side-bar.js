/** @jsxImportSource @emotion/react */
import { ExampleContainer } from "../example-container/example-container";

import * as emojisplosions from "../../examples/basics/emojisplosions";
import * as emojisplosion from "../../examples/basics/emojisplosion";
import * as numEmojis from "../../examples/basics/num-emojis";
import * as alwaysBlue from "../../examples/basics/always-blue";
import * as onlyOne from "../../examples/basics/only-one";
import * as setPosition from "../../examples/basics/set-position";
import * as titleExplosion from "../../examples/basics/title-explosion";
import * as large from "../../examples/basics/large";
import * as inverseGravity from "../../examples/basics/inverse-gravity";
import * as spinnin from "../../examples/basics/spinnin";
import * as speedRacer from "../../examples/basics/speed-racer";
import * as eeaao from "../../examples/basics/eeaao";

// import * as fish from "../../examples/fun-stuff/fish";
import * as rocket from "../../examples/fun-stuff/rocket";
import * as heart from "../../examples/fun-stuff/heart";
import * as rainstorm from "../../examples/fun-stuff/rainstorm";
import * as rainbow from "../../examples/fun-stuff/rainbow";

import * as styles from "./styles";


export function SideBar() {
    return (
        <div css={styles.sideBarContainer}>
            <ExampleContainer name={emojisplosions.name} blurb={emojisplosions.blurb} explosionFunct={emojisplosions.explosionFunct} codeSnippet={emojisplosions.codeSnippet} />
            <ExampleContainer name={emojisplosion.name} blurb={emojisplosion.blurb} explosionFunct={emojisplosion.explosionFunct} codeSnippet={emojisplosion.codeSnippet} />
            <ExampleContainer name={numEmojis.name} blurb={numEmojis.blurb} explosionFunct={numEmojis.explosionFunct} codeSnippet={numEmojis.codeSnippet} />
            <ExampleContainer name={alwaysBlue.name} blurb={alwaysBlue.blurb} explosionFunct={alwaysBlue.explosionFunct} codeSnippet={alwaysBlue.codeSnippet} />
            <ExampleContainer name={onlyOne.name} blurb={onlyOne.blurb} explosionFunct={onlyOne.explosionFunct} codeSnippet={onlyOne.codeSnippet} />
            <ExampleContainer name={setPosition.name} blurb={setPosition.blurb} explosionFunct={setPosition.explosionFunct} codeSnippet={setPosition.codeSnippet} />
            <ExampleContainer name={titleExplosion.name} blurb={titleExplosion.blurb} explosionFunct={titleExplosion.explosionFunct} codeSnippet={titleExplosion.codeSnippet} />
            <ExampleContainer name={large.name} blurb={large.blurb} explosionFunct={large.explosionFunct} codeSnippet={large.codeSnippet} />
            <ExampleContainer name={inverseGravity.name} blurb={inverseGravity.blurb} explosionFunct={inverseGravity.explosionFunct} codeSnippet={inverseGravity.codeSnippet} />
            <ExampleContainer name={spinnin.name} blurb={spinnin.blurb} explosionFunct={spinnin.explosionFunct} codeSnippet={spinnin.codeSnippet} />
            <ExampleContainer name={speedRacer.name} blurb={speedRacer.blurb} explosionFunct={speedRacer.explosionFunct} codeSnippet={speedRacer.codeSnippet} />
            <ExampleContainer name={eeaao.name} blurb={eeaao.blurb} explosionFunct={eeaao.explosionFunct} codeSnippet={eeaao.codeSnippet} />
            {/* <ExampleContainer name={fish.name} blurb={fish.blurb} explosionFunct={fish.explosionFunct} codeSnippet={fish.codeSnippet} /> */}
            <ExampleContainer name={rocket.name} blurb={rocket.blurb} explosionFunct={rocket.explosionFunct} codeSnippet={rocket.codeSnippet} />
            <ExampleContainer name={heart.name} blurb={heart.blurb} explosionFunct={heart.explosionFunct} codeSnippet={heart.codeSnippet} />
            <ExampleContainer name={rainstorm.name} blurb={rainstorm.blurb} explosionFunct={rainstorm.explosionFunct} codeSnippet={rainstorm.codeSnippet} disableButtonTime={rainstorm.disableButtonTime}/>
            <ExampleContainer name={rainbow.name} blurb={rainbow.blurb} explosionFunct={rainbow.explosionFunct} codeSnippet={rainbow.codeSnippet} disableButtonTime={rainbow.disableButtonTime}/>
        </div>
    )
}