import { build } from "esbuild";
import path from "node:path";

/**
 * Resolves `import code from "./entry.ts?iife"` to the entry point bundled, with
 * its dependencies, into a single classic script.
 */
export const iifeBundle = () => ({
	async load(this: { addWatchFile: (id: string) => void }, id: string) {
		const [entryPoint, query] = id.split("?");

		if (!new URLSearchParams(query).has("iife")) {
			return undefined;
		}

		const {
			metafile,
			outputFiles: [{ text }],
		} = await build({
			bundle: true,
			entryPoints: [entryPoint],
			format: "iife",
			globalName: path.parse(entryPoint).name,
			metafile: true,
			minify: true,
			platform: "browser",
			write: false,
		});

		// dev only: registers the bundle's inputs as dependencies, so editing one reruns this load
		for (const input of Object.keys(metafile.inputs)) {
			this.addWatchFile(path.resolve(input));
		}

		return `export default ${JSON.stringify(text)};`;
	},
	name: "iife-bundle",
});
