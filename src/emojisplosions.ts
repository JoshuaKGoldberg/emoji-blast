import { emojisplosion, EmojisplosionSettings, SettingValue } from "./emojisplosion";
import { obtainValue } from "./utils";

/**
 * Settings to periodically emojisplode!
 */
export interface EmojisplosionsSettings extends EmojisplosionSettings {
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
 *
 * @param action   Action that causes the explosion.
 * @param delay   How long before the action should occur.
 */
export type EmojiScheduler = (action: () => void, delay: number) => void;

/**
 * Returned handler for an ongoing emojisplosions run.
 */
export interface EmojisplosionsHandler {
    /**
     * Triggers a blast of emojis.
     */
    blast: () => void;

    /**
     * Cancels the emojisplosions run.
     */
    cancel: () => void;
}

/**
 * Default interval setting for fire delays.
 *
 * @returns Random number between 0 and 2100.
 */
const defaultInterval = () => 700 + Math.floor(Math.random() * 1401);

/**
 * Periodically emojisplodes across the page! 🎆
 *
 * @param settings   Settings to emojisplode.
 * @returns Handler for the ongoing emojisplosions.
 */
export const emojisplosions = (settings: Partial<EmojisplosionsSettings> = {}): EmojisplosionsHandler => {
    const {
        interval = defaultInterval,
        scheduler = setTimeout,
    } = settings;

    let cancelled = false;

    const blast = () => emojisplosion(settings);

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
