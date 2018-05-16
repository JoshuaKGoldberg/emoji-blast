export const obtainValue = <T>(value: T | (() => T)): T =>
    typeof value === "function"
        ? value()
        : value;

export const randomArrayMember = <T>(array: T[]): T => {
    return array[(Math.random() * array.length) | 0];
};

export const shuffleArray = <T>(array: T[]): T[] => {
    // Todo: actually shuffle;
    return array;
};
