/** @jsxImportSource @emotion/react */

import { ExampleContainer } from "../example-container/example-container";

// examples in the /basics folder
import * as emojisplosions from "../../examples/basic/emojisplosions";
import * as emojisplosion from "../../examples/basic/emojisplosion";
import * as lotsEmojis from "../../examples/basic/lots-emojis";
import * as alwaysBlue from "../../examples/basic/always-blue";
import * as onlyOne from "../../examples/basic/only-one";
import * as setPosition from "../../examples/basic/set-position";
import * as titleExplosion from "../../examples/basic/title-explosion";
import * as large from "../../examples/basic/large";
import * as inverseGravity from "../../examples/basic/inverse-gravity";
import * as spinnin from "../../examples/basic/spinnin";
import * as tourDeFrance from "../../examples/basic/tour-de-france";
import * as eeaao from "../../examples/basic/eeaao";

// examples in the /fun-stuff folder
import * as rocket from "../../examples/fun-stuff/rocket";
import * as heart from "../../examples/fun-stuff/heart";
import * as rainstorm from "../../examples/fun-stuff/rainstorm";
import * as rainbow from "../../examples/fun-stuff/rainbow";
import * as shootingStars from "../../examples/fun-stuff/shooting-stars";
import * as firework from "../../examples/fun-stuff/firework";
import * as nope from "../../examples/fun-stuff/nope";

import * as styles from "./styles";

// update this to map through he imports, figure out disableButtonTimes

export function SideBar() {
    // const basicExamples = [emojisplosions, emojisplosion, lotsEmojis, alwaysBlue, onlyOne, setPosition, titleExplosion, large, inverseGravity, spinnin, tourDeFrance, eeaao];
    // const funExamples = [rocket, heart, rainstorm, rainbow, shootingStars, firework, nope];

    return (
        <div css={styles.sideBarContainer}>
            {/* {basicExamples.map((example, i) => 
                <ExampleContainer key={i} name={example.name} blurb={example.blurb} explosionFunct={example.explosionFunct} codeSnippet={example.codeSnippet} disableButtonTime={example.disableButtonTime} />
            )} */}
            <ExampleContainer name={emojisplosions.name} blurb={emojisplosions.blurb} explosionFunct={emojisplosions.explosionFunct} codeSnippet={emojisplosions.codeSnippet} />
            <ExampleContainer name={emojisplosion.name} blurb={emojisplosion.blurb} explosionFunct={emojisplosion.explosionFunct} codeSnippet={emojisplosion.codeSnippet} />
            <ExampleContainer name={lotsEmojis.name} blurb={lotsEmojis.blurb} explosionFunct={lotsEmojis.explosionFunct} codeSnippet={lotsEmojis.codeSnippet} />
            <ExampleContainer name={alwaysBlue.name} blurb={alwaysBlue.blurb} explosionFunct={alwaysBlue.explosionFunct} codeSnippet={alwaysBlue.codeSnippet} />
            <ExampleContainer name={onlyOne.name} blurb={onlyOne.blurb} explosionFunct={onlyOne.explosionFunct} codeSnippet={onlyOne.codeSnippet} />
            <ExampleContainer name={setPosition.name} blurb={setPosition.blurb} explosionFunct={setPosition.explosionFunct} codeSnippet={setPosition.codeSnippet} />
            <ExampleContainer name={titleExplosion.name} blurb={titleExplosion.blurb} explosionFunct={titleExplosion.explosionFunct} codeSnippet={titleExplosion.codeSnippet} />
            <ExampleContainer name={large.name} blurb={large.blurb} explosionFunct={large.explosionFunct} codeSnippet={large.codeSnippet} />
            <ExampleContainer name={inverseGravity.name} blurb={inverseGravity.blurb} explosionFunct={inverseGravity.explosionFunct} codeSnippet={inverseGravity.codeSnippet} />
            <ExampleContainer name={spinnin.name} blurb={spinnin.blurb} explosionFunct={spinnin.explosionFunct} codeSnippet={spinnin.codeSnippet} />
            <ExampleContainer name={tourDeFrance.name} blurb={tourDeFrance.blurb} explosionFunct={tourDeFrance.explosionFunct} codeSnippet={tourDeFrance.codeSnippet} />
            <ExampleContainer name={eeaao.name} blurb={eeaao.blurb} explosionFunct={eeaao.explosionFunct} codeSnippet={eeaao.codeSnippet} disableButtonTime={eeaao.disableButtonTime}/>
            
            <ExampleContainer name={rocket.name} blurb={rocket.blurb} explosionFunct={rocket.explosionFunct} codeSnippet={rocket.codeSnippet} />
            <ExampleContainer name={heart.name} blurb={heart.blurb} explosionFunct={heart.explosionFunct} codeSnippet={heart.codeSnippet} />
            <ExampleContainer name={rainstorm.name} blurb={rainstorm.blurb} explosionFunct={rainstorm.explosionFunct} codeSnippet={rainstorm.codeSnippet} disableButtonTime={rainstorm.disableButtonTime}/>
            <ExampleContainer name={rainbow.name} blurb={rainbow.blurb} explosionFunct={rainbow.explosionFunct} codeSnippet={rainbow.codeSnippet} disableButtonTime={rainbow.disableButtonTime}/>
            <ExampleContainer name={shootingStars.name} blurb={shootingStars.blurb} explosionFunct={shootingStars.explosionFunct} codeSnippet={shootingStars.codeSnippet} disableButtonTime={shootingStars.disableButtonTime} />
            <ExampleContainer name={firework.name} blurb={firework.blurb} explosionFunct={firework.explosionFunct} codeSnippet={firework.codeSnippet} disableButtonTime={firework.disableButtonTime} />
            <ExampleContainer name={nope.name} blurb={nope.blurb} explosionFunct={nope.explosionFunct} codeSnippet={nope.codeSnippet} disableButtonTime={nope.disableButtonTime} />
        </div>
    );
};