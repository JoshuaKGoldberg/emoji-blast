import { build } from "esbuild";
import path from "node:path";

/**
 * Resolves `import code from "./entry.ts?iife"` to the entry point bundled, with
 * its dependencies, into a single classic script, exported as a string.
 *
 * For documents that can only run inline classic scripts, like the playground's
 * opaque-origin sandbox, which cannot fetch module scripts.
 */
export const iifeBundle = () => ({
	async load(this: { addWatchFile: (id: string) => void }, id: string) {
		const [entryPoint, query] = id.split("?");

		if (!new URLSearchParams(query).has("iife")) {
			return undefined;
		}

		const { metafile, outputFiles } = await build({
			bundle: true,
			entryPoints: [entryPoint],
			format: "iife",
			metafile: true,
			minify: true,
			platform: "browser",
			write: false,
		});

		// Vite only knows about the entry point, so edits to anything it imports
		// wouldn't otherwise rebuild the bundle in dev.
		for (const input of Object.keys(metafile.inputs)) {
			this.addWatchFile(path.resolve(input));
		}

		return `export default ${JSON.stringify(outputFiles[0].text)};`;
	},
	name: "iife-bundle",
});
