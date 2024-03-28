import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
	entry: {
		global: "./src/mains/global.ts",
		now: "./src/mains/now.ts",
		onclick: "./src/mains/onclick.ts",
		size: "./src/mains/size.ts",
	},
	mode: "production",
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.tsx?$/,
				use: {
					loader: "ts-loader",
					options: {
						compilerOptions: {
							noEmit: false,
						},
					},
				},
			},
		],
	},
	output: {
		path: path.join(__dirname, "dist"),
	},
	resolve: {
		extensionAlias: {
			".js": [".js", ".ts"],
		},
		extensions: [".ts"],
	},
};
