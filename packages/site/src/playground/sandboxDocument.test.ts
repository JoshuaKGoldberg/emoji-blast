import { describe, expect, it } from "vitest";

import { sandboxDocument } from "./sandboxDocument";
import { MESSAGE_SOURCE } from "./sandboxProtocol";

const parsed = new DOMParser().parseFromString(sandboxDocument, "text/html");

describe("sandboxDocument", () => {
	it("restricts the frame with a content security policy", () => {
		const policy = parsed
			.querySelector('meta[http-equiv="Content-Security-Policy"]')
			?.getAttribute("content");

		expect(policy).toBe(
			[
				"default-src 'none'",
				"script-src 'unsafe-inline' 'unsafe-eval'",
				"style-src 'unsafe-inline'",
				"base-uri 'none'",
				"form-action 'none'",
			].join("; "),
		);
	});

	it("inlines the bundled runner as a single classic script", () => {
		const scripts = parsed.querySelectorAll("script");

		expect(scripts).toHaveLength(1);
		expect(scripts[0].getAttributeNames()).toEqual([]);
		expect(scripts[0].textContent).toContain(MESSAGE_SOURCE);
	});
});
