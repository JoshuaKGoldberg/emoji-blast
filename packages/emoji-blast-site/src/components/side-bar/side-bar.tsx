/** @jsxImportSource @emotion/react */

import { ExampleContainer } from "../example-container/example-container";
import { Example } from "../../types/example-types";

// examples in the /basic folder
import * as emojisplosions from "@/examples/basic/emojisplosions";
import * as emojisplosion from "@/examples/basic/emojisplosion";
import * as lotsEmojis from "@/examples/basic/lots-emojis";
import * as alwaysBlue from "@/examples/basic/always-blue";
import * as onlyOne from "@/examples/basic/only-one";
import * as setPosition from "@/examples/basic/set-position";
import * as titleExplosion from "@/examples/basic/title-explosion";
import * as large from "@/examples/basic/large";
import * as inverseGravity from "@/examples/basic/inverse-gravity";
import * as spinnin from "@/examples/basic/spinnin";
import * as tourDeFrance from "@/examples/basic/tour-de-france";
import * as eeaao from "@/examples/basic/eeaao";

// examples in the /fun-stuff folder
import * as rocket from "@/examples/fun-stuff/rocket";
import * as heart from "@/examples/fun-stuff/heart";
import * as rainstorm from "@/examples/fun-stuff/rainstorm";
import * as rainbow from "@/examples/fun-stuff/rainbow";
import * as shootingStars from "@/examples/fun-stuff/shooting-stars";
import * as firework from "@/examples/fun-stuff/firework";
import * as nope from "@/examples/fun-stuff/nope";

import * as styles from "./styles";

export function SideBar() {
    // todo: separate the examples into different tabs by type
    const basicExamples: Example[] = [emojisplosions, emojisplosion, lotsEmojis, alwaysBlue, onlyOne, setPosition, titleExplosion, large, inverseGravity, spinnin, tourDeFrance, eeaao];
    const funExamples: Example[] = [rocket, heart, rainstorm, rainbow, shootingStars, firework, nope];

    return (
        <div css={styles.sideBarContainer}>
            {basicExamples.map((example: Example, i) =>
                <ExampleContainer 
                    key={i} 
                    name={example.name} 
                    blurb={example.blurb} 
                    explosionFunct={example.explosionFunct} 
                    codeSnippet={example.codeSnippet} 
                    disableButtonTime={example.disableButtonTime}
                />
            )}
            {funExamples.map((example: Example, i) =>
                <ExampleContainer 
                    key={i} 
                    name={example.name} 
                    blurb={example.blurb} 
                    explosionFunct={example.explosionFunct} 
                    codeSnippet={example.codeSnippet} 
                    disableButtonTime={example.disableButtonTime}
                />
            )}
        </div>
    );
};