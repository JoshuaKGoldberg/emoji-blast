
export const defaultClassName = "emoji-styles";

const createdStyles: { [i: string]: HTMLStyleElement } = {};

export const createStyleElementAndClass = (className: string = defaultClassName): string => {
    if (className in createdStyles) {
        return className;
    }

    const element = document.createElement("style");
    element.type = "text/css";

    element.appendChild(document.createTextNode(`
        .${className} {
            cursor: inherit;
            margin-left: -1em;
            margin-top: -1em;
            position: fixed;
        }
    `));

    document.head.appendChild(element);

    return className;
};
