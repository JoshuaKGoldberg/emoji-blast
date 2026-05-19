import * as EmojiBlastLib from "emoji-blast";
import { transform } from "sucrase";

const FORBIDDEN_GLOBALS = [
	"window",
	"document",
	"fetch",
	"localStorage",
	"sessionStorage",
	"globalThis",
	"self",
	"eval",
	"Function",
	"parent",
	"top",
	"frames",
	"postMessage",
	"sharedStorage",
	"cookieStore",
	"indexedDB",
	"caches",
	"navigator",
	"history",
	"open",
	"location",
	"XMLHttpRequest",
	"WebSocket",
	"Navigator",
	"navigator",
] as const;

export const runPlaygroundCode = (code: string) => {
	const { code: transpiledCode } = transform(code, {
		transforms: ["typescript", "imports"],
	});

	// eslint-disable-next-line @typescript-eslint/no-implied-eval
	const executableModule = new Function(
		"require",
		...FORBIDDEN_GLOBALS,
		transpiledCode.replace(/^["']use strict["'];?\s*/, ""),
	);

	const mockRequire = (moduleName: string) => {
		if (moduleName === "emoji-blast") {
			return EmojiBlastLib;
		}
		throw new Error(`Module "${moduleName}" not found in sandbox.`);
	};

	executableModule.call(
		null,
		mockRequire,
		...FORBIDDEN_GLOBALS.map(
			(blockedTargetName) =>
				new Proxy(
					{},
					{
						get() {
							alert(
								`Access to property of ${blockedTargetName} prohibited in emoji-blast playground`,
							);
							return null;
						},
					},
				),
		),
	);
};
