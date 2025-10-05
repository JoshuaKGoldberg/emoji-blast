import { EmojiActor } from "./actor";
import { EmojiEvents } from "./events";

/**
 * @param value initial value
 * @param timeSeries controls how decayed the value should be, 0 is no decay
 * @returns a number between `value` and 0 depending on `timeSeries`
 */
const exponentialDecay = (value: number, timeSeries: number) => {
	// Lambda param (a value between 0 and 1) controls how fast to decay value
	const LAMBDA = 0.25;
	return value * (1 - LAMBDA) ** timeSeries;
};

/** sample rate used to calculate toss trajectory in Hz */
const SAMPLE_RATE_Hz = 200;

interface ActivelyDraggedEmoji {
	actor: EmojiActor;
	gravity: number;
	lastPosition: { x: number; y: number };
	samplePoints: { x: number; y: number }[];
}

export const grabAndToss = ((): EmojiEvents => {
	let activelyDraggedEmoji: ActivelyDraggedEmoji | undefined = undefined;
	let sampleInterval: NodeJS.Timeout;

	const onDrag = ({ clientX: x, clientY: y }: PointerEvent) => {
		if (!activelyDraggedEmoji) {
			return;
		}

		const { actor, lastPosition } = activelyDraggedEmoji;
		const dx = x - lastPosition.x;
		const dy = y - lastPosition.y;

		actor.update({
			position: {
				x: actor.position.x + dx,
				y: actor.position.y + dy,
			},
		});

		activelyDraggedEmoji.lastPosition = { x, y };
	};

	const onToss = () => {
		if (!activelyDraggedEmoji) {
			return;
		}

		clearInterval(sampleInterval);
		const { samplePoints } = activelyDraggedEmoji;

		const samplePointsWithDecay = [...samplePoints]
			.reverse()
			.map(({ x, y }, i) => ({
				x: exponentialDecay(x, i),
				y: exponentialDecay(y, i),
			}));

		const decayedSamplePointTotal = samplePointsWithDecay.reduce(
			(acc, curr) => ({ x: acc.x + curr.x, y: acc.y + curr.y }),
			{ x: 0, y: 0 },
		);

		// controls how hard the emoji is thrown
		const TOSS_SENSITIVITY = 75;

		activelyDraggedEmoji.actor.update({
			gravity: activelyDraggedEmoji.gravity,
			velocity: {
				x: (decayedSamplePointTotal.x / samplePoints.length) * TOSS_SENSITIVITY,
				y: (decayedSamplePointTotal.y / samplePoints.length) * TOSS_SENSITIVITY,
			},
		});

		activelyDraggedEmoji = undefined;
		document.removeEventListener("pointermove", onDrag);
		document.removeEventListener("pointerup", onToss);
	};

	return {
		onPointerdown({ actor, event }) {
			if (activelyDraggedEmoji) {
				return;
			}
			const { clientX, clientY } = event;
			const startingCoords = { x: clientX, y: clientY };

			activelyDraggedEmoji = {
				actor,
				gravity: actor.gravity,
				lastPosition: startingCoords,
				samplePoints: [],
			};

			actor.update({
				gravity: 0,
				velocity: { x: 0, y: 0 },
			});

			document.addEventListener("pointermove", onDrag);
			document.addEventListener("pointerup", onToss);

			let lastCoords = startingCoords;

			sampleInterval = setInterval(() => {
				if (!activelyDraggedEmoji) {
					return;
				}

				const currCoords = { ...activelyDraggedEmoji.actor.position };
				const dx = Math.round(currCoords.x - lastCoords.x);
				const dy = Math.round(currCoords.y - lastCoords.y);

				activelyDraggedEmoji.samplePoints.push({ x: dx, y: dy });
				lastCoords = currCoords;
			}, 1000 / SAMPLE_RATE_Hz);
		},
	};
})();
