import * as alwaysBlue from "../../examples/basic/always-blue";
import * as eeaao from "../../examples/basic/eeaao";
import * as emojiBlast from "../../examples/basic/emojiBlast";
import * as emojiBlasts from "../../examples/basic/emojiBlasts";
import * as inverseGravity from "../../examples/basic/inverse-gravity";
import * as large from "../../examples/basic/large";
import * as lotsEmojis from "../../examples/basic/lots-emojis";
import * as onlyOne from "../../examples/basic/only-one";
import * as setPosition from "../../examples/basic/set-position";
import * as spinnin from "../../examples/basic/spinnin";
import * as titleExplosion from "../../examples/basic/title-explosion";
import * as tourDeFrance from "../../examples/basic/tour-de-france";
import * as firework from "../../examples/fun-stuff/firework";
import * as heart from "../../examples/fun-stuff/heart";
import * as nope from "../../examples/fun-stuff/nope";
import * as rainbow from "../../examples/fun-stuff/rainbow";
import * as rainstorm from "../../examples/fun-stuff/rainstorm";
import * as rocket from "../../examples/fun-stuff/rocket";
import * as shootingStars from "../../examples/fun-stuff/shooting-stars";
import { Example } from "../../types/example-types";
import { ExampleContainer } from "../example-container/example-container";
import * as styles from "./styles";

export function SideBar() {
	// https://github.com/JoshuaKGoldberg/emoji-blast/issues/292
	// todo: separate the examples into different tabs by type
	const basicExamples: Example[] = [
		emojiBlasts,
		emojiBlast,
		lotsEmojis,
		alwaysBlue,
		onlyOne,
		setPosition,
		titleExplosion,
		large,
		inverseGravity,
		spinnin,
		tourDeFrance,
		eeaao,
	];
	const funExamples: Example[] = [
		rocket,
		heart,
		rainstorm,
		rainbow,
		shootingStars,
		firework,
		nope,
	];

	return (
		<div css={styles.sideBarContainer}>
			{basicExamples.map((example: Example, i) => (
				<ExampleContainer
					blurb={example.blurb}
					codeSnippet={example.codeSnippet}
					disableButtonTime={example.disableButtonTime}
					explosionFunction={example.explosionFunction}
					key={i}
					name={example.name}
				/>
			))}
			{funExamples.map((example: Example, i) => (
				<ExampleContainer
					blurb={example.blurb}
					codeSnippet={example.codeSnippet}
					disableButtonTime={example.disableButtonTime}
					explosionFunction={example.explosionFunction}
					key={i}
					name={example.name}
				/>
			))}
		</div>
	);
}
