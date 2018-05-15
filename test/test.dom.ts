import {
    createStubPerformance,
    createStubPerformanceNavigation,
    createStubPerformanceTiming,
    performance,
} from "../src";

// This file verifies that types are compatible with TypeScript's `lib.dom.d.ts` types.

const firstPerformance: Performance = performance;
const stubPerformance: Performance = createStubPerformance();
const stubPerformanceNavigation: PerformanceNavigation = createStubPerformanceNavigation();
const stubPerformanceTiming: PerformanceTiming = createStubPerformanceTiming();
