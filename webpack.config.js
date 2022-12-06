import * as url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// TODO: Not actually building
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
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    path: path.join(__dirname, "lib"),
  },
};
