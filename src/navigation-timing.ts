/**
 * There are a few non-standard extensions that the TypeScript DOM typings expect.
 */
const nonstandardPerformanceTimingStubExtensions = {
    msFirstPaint: 0,
};

/**
 * Base stub for creating PerformanceTiming objects.
 * @see https://www.w3.org/TR/navigation-timing/#sec-navigation-timing-interface
 */
const performanceTimingStub = {
    ...nonstandardPerformanceTimingStubExtensions,

    // Properties defined by the spec.
    navigationStart: 0,
    unloadEventStart: 0,
    unloadEventEnd: 0,
    redirectStart: 0,
    redirectEnd: 0,
    fetchStart: 0,
    domainLookupStart: 0,
    domainLookupEnd: 0,
    connectStart: 0,
    connectEnd: 0,
    secureConnectionStart: 0,
    requestStart: 0,
    responseStart: 0,
    responseEnd: 0,
    domLoading: 0,
    domInteractive: 0,
    domContentLoadedEventStart: 0,
    domContentLoadedEventEnd: 0,
    domComplete: 0,
    loadEventStart: 0,
    loadEventEnd: 0,

    // Serializer
    toJSON: () => "",
};

/**
 * Creates a stub version of a performance timing object.
 *
 * @param overrides   Any attributes to apply on top of the defaults.
 * @returns Stub version of a performance timing object.
 */
export const createStubPerformanceTiming = (overrides: Partial<typeof performanceTimingStub> = {}): typeof performanceTimingStub => {
    return {
        ...performanceTimingStub,
        ...overrides,
    };
};

/**
 * Base stub for creating PerformanceNavigation objects.
 * @see https://www.w3.org/TR/navigation-timing/#performancenavigation
 */
export const performanceNavigation = {
    TYPE_BACK_FORWARD: 2,
    TYPE_NAVIGATE: 0,
    TYPE_RELOAD: 1,
    TYPE_RESERVED: 255,
    redirectCount: 0,
    toJSON: (): string => JSON.stringify(performanceNavigation),
    type: 0,
};

/**
 * Creates a stub version of a performance navigation object.
 *
 * @param overrides   Any attributes to apply on top of the defaults.
 * @returns Stub version of a performance navigation object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation
 */
export const createStubPerformanceNavigation = (overrides: Partial<typeof performanceNavigation> = {}) => {
    return {
        ...performanceNavigation,
        ...overrides,
    };
};
