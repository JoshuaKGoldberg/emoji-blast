import React, { useState } from "react";

import * as styles from "./styles";

interface ButtonProps {
	children?: string;
	disableButtonTime?: number;
	explosionFunction: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
	children = "Try It",
	disableButtonTime,
	explosionFunction,
}: ButtonProps) {
	const [disabled, setDisabled] = useState(false);

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		if (disableButtonTime) {
			setDisabled(true);
			setTimeout(() => {
				setDisabled(false);
			}, disableButtonTime);
		}

		explosionFunction(event);
	};

	return (
		<button css={styles.button} disabled={disabled} onClick={handleClick}>
			{children}
		</button>
	);
}
