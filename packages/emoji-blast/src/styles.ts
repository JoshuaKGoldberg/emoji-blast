/**
 * Register of created styles link their associated CSS style elements.
 */
const createdStyles = new Set<string>();

/**
 * Registers a class name for emojis, creating a style element for it if necessary.
 * @param className   Potentially new CSS class name.
 */
export const createStyleElementAndClass = (className: string): void => {
	if (createdStyles.has(className)) {
		return;
	}

	createdStyles.add(className);

	const element = document.createElement("style");
	element.setAttribute("type", "text/css");

	element.appendChild(
		document.createTextNode(`
		.${className} {
			background: none;
			border: none;
			cursor: default;
			height: 2em;
			margin-left: -1em;
			margin-top: -1em;
			position: fixed;
			user-select: none;
			width: 2em;
			z-index: 2147483647;
		}
	`),
	);

	document.head.appendChild(element);
};
