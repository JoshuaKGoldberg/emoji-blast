/**
 * The base stub for a PerformanceEntry
 * @see https://www.w3.org/TR/performance-timeline/#dom-performanceentry
 */
export const performanceEntryStub = {
    name: "",
    entryType: "",
    startTime: 0,
    duration: 0,
};

export const createPerformanceEntryStub = (overrides: Partial<typeof performanceEntryStub>): typeof performanceEntryStub => {
    return {
        ...performanceEntryStub,
        ...overrides,
    };
};
