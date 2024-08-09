import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

import { demoGroups } from "~/components/data";

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
						directory: "apis",
					},
					label: "APIs",
				},
				{
					items: Object.keys(demoGroups),
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
		apis: "apis/emoji-blast",
		demos: "demos/basic",
	},
});
