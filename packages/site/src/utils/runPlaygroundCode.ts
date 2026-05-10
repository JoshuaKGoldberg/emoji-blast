import { transform } from "sucrase";
import * as EmojiBlastLib from "emoji-blast";

const FORBIDDEN_GLOBALS = [
	"window",
	"document",
	"fetch",
	"localStorage",
	"sessionStorage",
	"globalThis",
	"self",
] as const;

export const runPlaygroundCode = (code: string) => {
	const { code: transpiledCode } = transform(code, {
		transforms: ["typescript", "imports"],
	});

	const executableModule = new Function(
		"require",
		...FORBIDDEN_GLOBALS,
		transpiledCode,
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
