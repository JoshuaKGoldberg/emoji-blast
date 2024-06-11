import starlight from "@astrojs/starlight";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [
		konamiEmojiBlast(),
		starlight({
			components: {
				TwoColumnContent: "./src/components/TwoColumnContent.astro",
			},
			customCss: ["./src/styles/global.css"],
			sidebar: [
				{
					label: "Demos",
					link: "demos",
				},
				{
					label: "Full API",
					link: "api",
				},
				{
					autogenerate: { directory: "integrations" },
					label: "Integrations",
				},
			],
			social: {
				github: "https://github.com/JoshuaKGoldberg/emoji-blast",
			},

			title: "emoji-blast",
		}),
	],
});
