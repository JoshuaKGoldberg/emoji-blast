import { EmojiBlastSettings, SettingValue, emojiBlast } from "./emojiBlast.js";
import { obtainValue } from "./utils.js";

/**
 * Settings to periodically blast emojis! 🎆
 */
export interface EmojiBlastsSettings extends EmojiBlastSettings {
	/**
	 * How frequently to create explosions.
	 */
	interval: SettingValue<number>;

	/**
	 * Schedules explosions to occur.
	 */
	scheduler: EmojiScheduler;
}

/**
 * Schedules an explosion to occur.
 * @param action   Action that causes the explosion.
 * @param delay   How long before the action should occur.
 */
export type EmojiScheduler = (action: () => void, delay: number) => void;

/**
 * Returned handler for an ongoing blasts of emojis run.
 */
export interface EmojiBlastsHandler {
	/**
	 * Triggers a blast of emojis.
	 */
	blast: () => void;

	/**
	 * Cancels the emojiBlasts run.
	 */
	cancel: () => void;
}

/**
 * Default interval setting for fire delays.
 * @returns Random number between 0 and 2100.
 */
const defaultInterval = () => 700 + Math.floor(Math.random() * 1401);

/**
 * Periodically blast emojis across the page! 🎆
 * @param settings   Settings to blast emojis.
 * @returns Handler for the ongoing blasts of emojis.
 */
export const emojiBlasts = (
	settings: Partial<EmojiBlastsSettings> = {},
): EmojiBlastsHandler => {
	const { interval = defaultInterval, scheduler = setTimeout } = settings;

	let cancelled = false;

	const blast = () => {
		emojiBlast(settings);
	};

	const blastAndSchedule = (): void => {
		if (cancelled) {
			return;
		}

		if (document.visibilityState === "visible") {
			blast();
		}

		scheduler(blastAndSchedule, obtainValue(interval));
	};

	scheduler(blastAndSchedule, 0);

	return {
		blast,
		cancel() {
			cancelled = true;
		},
	};
};
