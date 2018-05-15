import { Event } from "./event";
import { createStubPerformanceNavigation, createStubPerformanceTiming } from "./navigation-timing";
import { performanceEntryStub } from "./performance-timeline";
import { performanceResourceTimingStub } from "./resource-timing";

/**
 * Base stub for creating Performance objects.
 */
export const performance = {
    clearMarks: () => {},
    clearMeasures: () => {},
    clearResourceTimings: () => {},
    getEntries: (): Array<typeof performanceResourceTimingStub> => [],
    getEntriesByName: (): Array<typeof performanceResourceTimingStub> => [],
    getEntriesByType: (): Array<typeof performanceResourceTimingStub> => [],
    getMarks: (): Array<typeof performanceEntryStub> => [],
    getMeasures: (): Array<typeof performanceEntryStub> => [],
    mark: () => {},
    measure: () => {},
    navigation: createStubPerformanceNavigation(),
    now: () => 0,
    onresourcetimingbufferfull: (_event: Event): void => {},
    setResourceTimingBufferSize: () => {},
    timeOrigin: 0,
    timing: createStubPerformanceTiming(),
    toJSON: () => JSON.stringify(performance),
};

/**
 * Equivalent stub type to the DOM Performance type.
 */
export type StubPerformance = typeof performance;

/**
 * Deep overrides for stub performance members.
 */
export interface DeepPerformanceOverrides {
    /**
     * Overrides for navigation properties.
     */
    navigation: Partial<typeof performance.navigation>;

    /**
     * Overrides for timing properties.
     */
    timing: Partial<typeof performance.timing>;
}

/**
 * Creates a stub version of the performance object.
 *
 * @param shallowOverrides   Any attributes to apply on top of the defaults.
 * @param deepOverrides   Any attributes to deeply apply to sub-members.
 * @returns Stub version of the performance object.
 * @see https://www.w3.org/TR/navigation-timing/#sec-window.performance-attribute
 */
export const createStubPerformance = (shallowOverrides: Partial<StubPerformance> = {}, deepOverrides: Partial<DeepPerformanceOverrides> = {}) => {
    const stubPerformance = {
        ...performance,
        ...shallowOverrides,
    };

    if (deepOverrides.navigation !== undefined) {
        stubPerformance.navigation = {
            ...stubPerformance.navigation,
            ...deepOverrides.navigation,
        };
    }

    if (deepOverrides.timing !== undefined) {
        stubPerformance.timing = {
            ...stubPerformance.timing,
            ...deepOverrides.timing,
        };
    }

    return stubPerformance;
};
