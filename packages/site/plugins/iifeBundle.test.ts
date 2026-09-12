// @vitest-environment node

import * as fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import { iifeBundle } from "./iifeBundle";

let directory: string;
let dependency: string;
let entry: string;

beforeAll(async () => {
	// realpath, because esbuild reports inputs with symlinks such as macOS's
	// /var -> /private/var resolved
	directory = await fs.realpath(
		await fs.mkdtemp(path.join(os.tmpdir(), "iife-bundle-")),
	);
	dependency = path.join(directory, "dependency.ts");
	entry = path.join(directory, "entry.ts");

	await fs.writeFile(dependency, `export const greeting = "hello";\n`);
	await fs.writeFile(
		entry,
		[
			`import { greeting } from "./dependency";`,
			`const message: string = greeting;`,
			`Object.assign(globalThis, { message });`,
		].join("\n"),
	);
});

afterAll(async () => {
	await fs.rm(directory, { force: true, recursive: true });
});

const load = (id: string, addWatchFile = vi.fn<(id: string) => void>()) =>
	iifeBundle().load.call({ addWatchFile }, id);

const readExportedString = (moduleSource: string | undefined) => {
	const match = /^export default (.*);$/s.exec(moduleSource ?? "");

	if (!match) {
		throw new Error(`Not a default string export: ${String(moduleSource)}`);
	}

	return JSON.parse(match[1]) as string;
};

describe("iifeBundle", () => {
	it("ignores imports without the iife query", async () => {
		expect(await load(entry)).toBeUndefined();
		expect(await load(`${entry}?raw`)).toBeUndefined();
	});

	it("exports the entry and its imports bundled into a classic script", async () => {
		const code = readExportedString(await load(`${entry}?iife`));
		const context: Record<string, unknown> = {};

		vm.runInNewContext(code, context);

		expect(code).not.toMatch(/\b(?:import|export)\b/);
		expect(context).toEqual({ message: "hello" });
	});

	it("recognizes the iife query alongside other query params", async () => {
		const code = readExportedString(await load(`${entry}?iife&t=123`));

		expect(code).toContain("hello");
	});

	it("watches every file in the bundle", async () => {
		const addWatchFile = vi.fn<(id: string) => void>();

		await load(`${entry}?iife`, addWatchFile);

		expect(addWatchFile.mock.calls.flat().sort()).toEqual([dependency, entry]);
	});
});
