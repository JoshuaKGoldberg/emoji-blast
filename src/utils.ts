export const obtainValue = <T>(value: T | (() => T)): T =>
    typeof value === "function"
        ? value()
        : value;

export const randomArrayMember = <T>(array: ReadonlyArray<T>): T => {
    return array[Math.floor((Math.random() * array.length))];
};

/**
 * Creates a shuffled version of an array.
 *
 * @param array   Array to copy.
 * @returns Shuffled version of the array.
 */
export const shuffleArray = <T>(array: ReadonlyArray<T>): T[] => {
    // Copy the input array to preserve immutability elsewhere
    const copiedArray = array.slice();

    for (let i = copiedArray.length - 1; i > 0; i--) {
        const swappingIndex = Math.floor(Math.random() * (i + 1));
        const swapper = copiedArray[i];

        copiedArray[i] = copiedArray[swappingIndex];
        copiedArray[swappingIndex] = swapper;
    }

    return copiedArray;
};
