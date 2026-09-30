import { useEffect, useEffectEvent, useState } from "react";

/**
 * Calls onTimeout once delay has passed since the last start, unless cleared
 * first. Starting again restarts the delay.
 */
export const useTimeout = (onTimeout: () => void, delay: number) => {
	const [started, setStarted] = useState<number>();

	const onTimeoutEvent = useEffectEvent(onTimeout);

	useEffect(() => {
		if (started === undefined) {
			return;
		}

		const timeout = setTimeout(() => {
			setStarted(undefined);
			onTimeoutEvent();
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [delay, started]);

	return {
		clear: () => {
			setStarted(undefined);
		},
		start: () => {
			setStarted((previous) => (previous ?? 0) + 1);
		},
	};
};
