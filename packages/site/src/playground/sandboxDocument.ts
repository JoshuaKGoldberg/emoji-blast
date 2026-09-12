import sandboxRunner from "./sandboxRunner.ts?iife";

const contentSecurityPolicy = [
	// blocks fetches and resource loads from any host
	"default-src 'none'",
	// inline runs the inlined runner; eval allows its `new Function`
	"script-src 'unsafe-inline' 'unsafe-eval'",
	// allows this document's inline <style>
	"style-src 'unsafe-inline'",
	// doesn't fall back to default-src
	"base-uri 'none'",
	// doesn't fall back to default-src
	"form-action 'none'",
].join("; ");

export const sandboxDocument = `<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy}" />
<style>
	html {
		color-scheme: light dark;
	}

	html,
	body {
		background: transparent;
		height: 100%;
		margin: 0;
		overflow: hidden;
	}
</style>
<script>${sandboxRunner}</script>
`;
