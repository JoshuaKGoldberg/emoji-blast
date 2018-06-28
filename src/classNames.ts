interface IDictionary<T> {
    [i: string]: T;
}

interface IStyleListing {
    className: string;
    count: number;
}

const classNames: IDictionary<IStyleListing> = {};

const createNewClassName = (() => {
    let count = 0;

    return () => {
        count += 1;

        return count.toString();
    };
})();

export const disposeStyles = (styles: Partial<CSSStyleDeclaration>) => {
    const key = JSON.stringify(styles);

    classNames[key].count -= 1;

    if (classNames[key].count === 1) {
        delete classNames[key];
    } else {
        classNames[key].count -= 1;
    }
};

export const registerStyles = (styles: Partial<CSSStyleDeclaration>): string => {
    const key = JSON.stringify(styles);

    if ({}.hasOwnProperty.call(classNames, key)) {
        classNames[key] = {
            className: createNewClassName(),
            count: 1,
        };
    } else {
        classNames[key].count += 1;
    }

    return classNames[key].className;
};
