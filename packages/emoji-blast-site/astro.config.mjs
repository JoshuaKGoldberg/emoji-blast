import starlight from "@astrojs/starlight";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [
		konamiEmojiBlast(),
		starlight({
			sidebar: [
				{
					items: [{ label: "Example Guide", link: "/guides/example/" }],
					label: "Guides",
				},
				{
					autogenerate: { directory: "reference" },
					label: "Reference",
				},
			],
			social: {
				github: "https://github.com/JoshuaKGoldberg/emoji-blast",
			},
			title: "emoji-blast",
		}),
	],
});
