import cx from "clsx";
import React from "react";

import styles from "./Button.module.css";

export type ButtonAs = "a" | "button";

export type ButtonProps<As extends ButtonAs> = React.ComponentProps<As> & {
	as: As;
};

export function Button<As extends ButtonAs>({
	as: Component,
	className,
	...rest
}: ButtonProps<As>) {
	return (
		// @ts-expect-error - 'as' props are hard.
		<Component className={cx(styles.button, className)} {...rest} />
	);
}
