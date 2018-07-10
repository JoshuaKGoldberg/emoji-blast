import { emojisplosion, IEmojisplosionSettings, ISettingValue } from "./emojisplosion";
import { obtainValue } from "./utils";

/**
 * Settings to periodically emojisplode!
 */
export interface IEmojisplosionsSettings extends IEmojisplosionSettings {
    /**
     * How frequently to create explosions.
     */
    interval: ISettingValue<number>;

    /**
     * Schedules explosions to occur.
     */
    scheduler: IEmojiScheduler;
}

/**
 * Schedules an explosion to occur.
 *
 * @param action   Action that causes the explosion.
 * @param delay   How long before the action should occur.
 */
export type IEmojiScheduler = (action: () => void, delay: number) => void;

/**
 * Returned handler for an ongoing emojisplosions run.
 */
export interface IEmojiHandler {
    /**
     * Cancels the emojisplosions run.
     */
    cancel: () => void;
}

/**
 * Default interval setting for fire delays.
 *
 * @returns Random number between 0 and 1400.
 */
const defaultInterval = () => Math.floor(Math.random() * 1401);

/**
 * Periodically emojisplodes across the page! 🎆
 *
 * @param settings   Settings to emojisplode.
 * @returns Handler for the ongoing emojisplosions.
 */
export const emojisplosions = (settings: Partial<IEmojisplosionsSettings> = {}): IEmojiHandler => {
    const {
        interval = defaultInterval,
        scheduler = setTimeout,
    } = settings;

    let cancelled = false;

    const blastAndSchedule = (): void => {
        if (cancelled) {
            return;
        }

        emojisplosion(settings);

        scheduler(blastAndSchedule, obtainValue(interval));
    };

    scheduler(blastAndSchedule, 0);

    return {
        cancel(): void {
            cancelled = true;
        },
    };
};
