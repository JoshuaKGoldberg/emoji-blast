export type MakePartial<T, PartialKeys extends keyof T> = Partial<
	Omit<T, PartialKeys>
> & {
	[K in PartialKeys]?: Partial<T[K]>;
};
/**
 * Grabs the value of an item or item-returning function.
 * @param value   Item or item-returning function.
 */
export const obtainValue = <T>(value: (() => T) | T): T =>
	typeof value === "function" ? (value as () => T)() : value;

/**
 * Grabs a single random member of an array.
 * @template T   Type of items in the array.
 * @param array   Array of items.
 */
export const randomArrayMember = <T>(array: readonly T[]): T => {
	return array[Math.floor(Math.random() * array.length)];
};

/**
 * Creates a shuffled version of an array.
 * @template T   Type of items in the array.
 * @param array   Array to copy.
 * @returns Shuffled version of the array.
 */
export const shuffleArray = <T>(array: readonly T[]): T[] => {
	// Copy the input array to preserve immutability elsewhere
	const copiedArray = array.slice();

	for (let i = copiedArray.length - 1; i > 0; i -= 1) {
		const swappingIndex = Math.floor(Math.random() * (i + 1));
		const swapper = copiedArray[i];

		copiedArray[i] = copiedArray[swappingIndex];
		copiedArray[swappingIndex] = swapper;
	}

	return copiedArray;
};
