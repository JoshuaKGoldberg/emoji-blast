import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		konamiEmojiBlast(),
		react(),
		starlight({
			components: {
				SiteTitle: "./src/components/SiteTitle.astro",
				TwoColumnContent: "./src/components/TwoColumnContent.astro",
			},
			customCss: ["./src/styles/global.css"],
			sidebar: [
				{
					autogenerate: {
						directory: "get-started",
					},
					label: "Get Started",
				},
				{
					autogenerate: {
						directory: "api",
					},
					label: "API",
				},
				{
					autogenerate: {
						directory: "demos",
					},
					label: "Demos",
				},
				{
					autogenerate: {
						directory: "integrations",
					},
					label: "Integrations",
				},
			],
			social: {
				github: "https://github.com/JoshuaKGoldberg/emoji-blast",
			},
			title: "emoji-blast",
		}),
	],
	redirects: {
		api: "api/emoji-blast",
		demos: "demos/basic",
	},
});
