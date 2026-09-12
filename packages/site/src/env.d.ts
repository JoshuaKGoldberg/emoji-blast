/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

/** See plugins/iifeBundle.ts. */
declare module "*?iife" {
	const code: string;
	export default code;
}
