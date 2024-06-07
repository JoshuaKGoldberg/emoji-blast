import CSS from "csstype";

import { colors } from "../../colors/colors";
import * as styles from "./styles";

interface TitleProps {
	addStyles?: CSS.Properties;
}

export function Title({ addStyles }: TitleProps) {
	return (
		<div>
			<h1 css={{ ...styles.title, ...addStyles }} id="title">
				<span css={{ color: colors.pink }}>e</span>
				<span css={{ color: colors.blue }}>m</span>
				<span css={{ color: colors.yellow }}>o</span>
				<span css={{ color: colors.purple }}>j</span>
				<span css={{ color: colors.green }}>i</span>
				<span css={{ color: colors.orange }}>-</span>
				<span css={{ color: colors.pink }}>b</span>
				<span css={{ color: colors.blue }}>l</span>
				<span css={{ color: colors.yellow }}>a</span>
				<span css={{ color: colors.purple }}>s</span>
				<span css={{ color: colors.green }}>t</span>
			</h1>
		</div>
	);
}
