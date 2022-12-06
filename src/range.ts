/**
 * Number or [minimum, maximum] range for random number generation.
 */
export type RandomRange =
	| number
	| {
			/**
			 * Inclusive maximum number to generate.
			 */
			max: number;

			/**
			 * Inclusive minimum number to generate.
			 */
			min: number;
	  };

/**
 * Creates a random number within a range.
 *
 * @param range   [Minimum, maximum] numbers in a range.
 * @returns Random number within the [minimum, maximum] range.
 */
export const randomInRange = (range: RandomRange) =>
	typeof range === "number"
		? range
		: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
