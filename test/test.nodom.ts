import {
    createStubPerformance,
    createStubPerformanceNavigation,
    createStubPerformanceTiming,
    performance,
} from "../src";

interface Performance { }
interface PerformanceNavigation { }
interface PerformanceTiming { }

const firstPerformance: Performance = performance;
const stubPerformance: Performance = createStubPerformance();
const stubPerformanceNavigation: PerformanceNavigation = createStubPerformanceNavigation();
const stubPerformanceTiming: PerformanceTiming = createStubPerformanceTiming();
