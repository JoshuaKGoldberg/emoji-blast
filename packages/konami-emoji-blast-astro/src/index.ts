import { AstroIntegration } from "astro";

export function konamiEmojiBlast() {
	return {
		hooks: {
			"astro:config:setup"({ injectScript }) {
				injectScript("page", `import "konami-emoji-blast/dist/global.js";`);
			},
		},
		name: "@konami-emoji-blast/astro",
	} satisfies AstroIntegration;
}

export default konamiEmojiBlast;
