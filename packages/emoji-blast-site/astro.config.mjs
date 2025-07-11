import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

import { demoGroups } from "./src/data/demos";

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
					items: Object.values(demoGroups).map((group) => ({
						label: group.name,
						link: `demos/${group.slug}`,
					})),
					label: "Demos",
				},
				{
					autogenerate: {
						directory: "integrations",
					},
					label: "Integrations",
				},
			],
			social: [
				{
					href: "https://github.com/JoshuaKGoldberg/emoji-blast",
					icon: "github",
					label: "Github",
				},
			],
			title: "emoji-blast",
		}),
	],
	redirects: {
		apis: "apis/emoji-blast",
		demos: "demos/basic",
	},
});
