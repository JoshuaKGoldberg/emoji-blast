import { Application, JSX } from "typedoc";

export function load(app: Application) {
	app.renderer.hooks.on("head.end", () =>
		JSX.createElement(
			"script",
			{
				async: true,
				src: "https://unpkg.com/konami-emoji-blast/dist/global.js",
			},
			[],
		),
	);
}
