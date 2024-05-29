import { AstroIntegration } from "astro";

export function konamiEmojiBlast(): AstroIntegration {
	return {
		hooks: {
			"astro:config:setup"({ injectScript }) {
				injectScript("page", `import "konami-emoji-blast/dist/now.js";`);
			},
		},
		name: "@konami-emoji-blast/astro",
	};
}
