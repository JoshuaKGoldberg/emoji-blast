type AnyFunction = (...args: never[]) => void;

type FunctionObject = Record<string, AnyFunction>;

const mergeFunctions =
	<Fn extends AnyFunction>(...fns: Fn[]) =>
	(...args: Parameters<Fn>) => {
		fns.filter(Boolean).forEach((fn) => {
			fn(...args);
		});
	};

type MergedFunctionObject<Obj extends FunctionObject> = {
	[Key in keyof Obj]: ReturnType<typeof mergeFunctions<Obj[Key]>>;
};

/**
 * Merges two objects whose values are functions.
 * For each key, if both objects define a function, the resulting function
 * will call them in sequence with the same arguments.
 * @returns A new object where each key maps to a merged function.
 * @example
 * const obj1 = { onClick: () => console.log("A") };
 * const obj2 = { onClick: () => console.log("B") };
 * const merged = mergeFunctionObjects(obj1, obj2);
 * merged.onClick(); // Logs "A" then "B"
 */
export const mergeFunctionObjects = <Obj extends FunctionObject>(
	object1: Obj,
	object2: Obj,
): MergedFunctionObject<Obj> => {
	const keys = Object.keys({ ...object1, ...object2 });
	return keys.reduce(
		(mergedObject, key) => ({
			...mergedObject,
			[key]: mergeFunctions(object1[key], object2[key]),
		}),
		{},
	) as MergedFunctionObject<Obj>;
};
