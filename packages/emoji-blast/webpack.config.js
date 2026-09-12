import path from "path";
import webpack from "webpack";

const notice = `
See https://github.com/JoshuaKGoldberg/emoji-blast/packages/konami-emoji-blast for documentation.
MIT licensed.
`.trim();

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
		path: path.resolve(import.meta.dirname, "dist"),
	},
	plugins: [new webpack.BannerPlugin(notice)],
	resolve: {
		extensionAlias: {
			".js": [".js", ".ts"],
		},
		extensions: [".js", ".ts", ".tsx"],
	},
};
