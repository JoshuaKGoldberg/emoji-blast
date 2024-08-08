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
					label: "Get Started",
					link: "get-started",
				},
				{
					label: "Demos",
					link: "demos",
				},
				{
					label: "konami-emoji-blast",
					link: "konami-emoji-blast",
				},
				{
					autogenerate: { directory: "integrations" },
					label: "Integrations",
				},
				{
					autogenerate: { directory: "api" },
					label: "API",
				},
			],
			social: {
				github: "https://github.com/JoshuaKGoldberg/emoji-blast",
			},
			title: "emoji-blast",
		}),
	],
});
