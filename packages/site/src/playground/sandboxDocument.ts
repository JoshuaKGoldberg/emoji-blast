import emojiBlastBundle from "emoji-blast/dist/sandbox.js?raw";

import { MESSAGE_SOURCE } from "./sandboxProtocol";
import sandboxRunner from "./sandboxRunner.js?raw";

/**
 * Content Security Policy for the sandboxed frame.
 *
 * `default-src 'none'` is where the security lives: with no `connect-src`,
 * `img-src`, or `font-src`, the frame cannot make a network request of any kind,
 * so a snippet has nowhere to send anything. That is a separate control from the
 * frame's opaque origin, which stops it reading anything of ours — neither
 * substitutes for the other.
 *
 * `script-src` is deliberately permissive and carries no defensive weight. A
 * normal page's CSP enforces "only run code we wrote", which is off the table
 * here by design: the frame exists to run code we didn't write. `'unsafe-eval'`
 * is required because the runner executes snippets via `new Function`, which
 * `'unsafe-inline'` alone does not permit.
 *
 * `base-uri` and `form-action` are listed explicitly because they do not fall
 * back to `default-src`.
 */
const contentSecurityPolicy = [
	"default-src 'none'",
	"script-src 'unsafe-inline' 'unsafe-eval'",
	"style-src 'unsafe-inline'",
	"base-uri 'none'",
	"form-action 'none'",
].join("; ");

/**
 * Document loaded into the playground's sandboxed iframe.
 *
 * Both scripts are inlined rather than loaded by URL. The frame's opaque origin
 * means module scripts are fetched in CORS mode with `Origin: null`, which this
 * static site cannot answer with an `Access-Control-Allow-Origin` header — so
 * ESM is unavailable and the library arrives as a classic-script IIFE instead.
 * Inlining it rather than pointing at a URL is what lets the policy above name
 * no host at all.
 */
export const sandboxDocument = `<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy}" />
<style>
	/*
	 * Required for the overlay to actually be transparent. When a frame's used
	 * color-scheme differs from its embedder's, the UA must ignore a transparent
	 * background and paint an opaque canvas instead, so light content on a dark
	 * page stays readable — which shows up here as a white matte over the site in
	 * dark mode. Declaring support for both schemes exempts the frame from that
	 * rule. It has to be set inside the document: color-scheme on the iframe
	 * element does not reach it, and setting it later from script is too late.
	 */
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
<script>window.SANDBOX_MESSAGE_SOURCE = ${JSON.stringify(MESSAGE_SOURCE)};</script>
<script>${emojiBlastBundle}</script>
<script>${sandboxRunner}</script>
`;
