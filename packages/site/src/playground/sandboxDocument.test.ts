import { describe, expect, it } from "vitest";

import { createSandboxDocument } from "./sandboxDocument";
import { MESSAGE_SOURCE } from "./sandboxProtocol";

const nonce = "test-nonce";

const parsed = new DOMParser().parseFromString(
	createSandboxDocument(nonce),
	"text/html",
);

describe("createSandboxDocument", () => {
	it("restricts the frame with a content security policy", () => {
		const policy = parsed
			.querySelector('meta[http-equiv="Content-Security-Policy"]')
			?.getAttribute("content");

		expect(policy).toBe(
			[
				"default-src 'none'",
				"webrtc 'block'",
				"script-src 'unsafe-inline' 'unsafe-eval'",
				"style-src 'unsafe-inline'",
				"base-uri 'none'",
				"form-action 'none'",
			].join("; "),
		);
	});

	it("inlines the bundled runner, then starts it with the nonce", () => {
		const scripts = parsed.querySelectorAll("script");

		expect(scripts).toHaveLength(2);
		expect(scripts[0].getAttributeNames()).toEqual([]);
		expect(scripts[0].textContent).toContain(MESSAGE_SOURCE);
		expect(scripts[1].getAttributeNames()).toEqual([]);
		expect(scripts[1].textContent).toContain(
			`sandboxRunner.createSandboxRunner("${nonce}");`,
		);
	});
});
