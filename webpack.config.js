import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
	entry: {
		easy: "./src/mains/easy.ts",
		global: "./src/mains/global.ts",
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
	resolve: {
		extensions: [".ts"],
	},
	output: {
		path: path.join(__dirname, "dist"),
	},
};
