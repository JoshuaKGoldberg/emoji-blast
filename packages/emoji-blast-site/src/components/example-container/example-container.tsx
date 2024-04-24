import { CodeBlurb } from "../code-blurb/code-blurb";
import { Button } from "./../button/button";
import * as styles from "./styles";

interface ExampleContainerProps {
	blurb: string;
	codeSnippet: string;
	disableButtonTime?: number;
	explosionFunction: () => void;
	name: string;
}

export function ExampleContainer({
	blurb,
	codeSnippet,
	disableButtonTime,
	explosionFunction,
	name,
}: ExampleContainerProps) {
	return (
		<div css={styles.container}>
			<p css={styles.name}>{name}</p>
			<p css={styles.blurb}>{blurb}</p>
			<CodeBlurb codeSnippet={codeSnippet}></CodeBlurb>
			<Button
				disableButtonTime={disableButtonTime}
				explosionFunction={explosionFunction}
			></Button>
		</div>
	);
}
