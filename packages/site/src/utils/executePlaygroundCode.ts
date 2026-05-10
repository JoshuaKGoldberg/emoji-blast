import { transform } from "sucrase";
import * as EmojiBlastLib from "emoji-blast";

const BLOCKED = [
	"window",
	"document",
	"fetch",
	"localStorage",
	"sessionStorage",
	"globalThis",
	"self",
];

export const executePlaygroundCode = (code: string) => {
	const compiled = transform(code, {
		transforms: ["typescript", "imports"],
	}).code;

	const fn = new Function("require", ...BLOCKED, compiled);

	const customRequire = (moduleName: string) => {
		if (moduleName === "emoji-blast") {
			return EmojiBlastLib;
		}
		throw new Error(`Module "${moduleName}" not found in sandbox.`);
	};

	fn.call(
		null,
		customRequire,
		...BLOCKED.map(
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
