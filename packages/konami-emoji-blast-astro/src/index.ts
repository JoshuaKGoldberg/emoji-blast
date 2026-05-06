import { AstroIntegration } from "astro";

type MockSettings = {
	test123: string;
};

export function konamiEmojiBlast(
	options: Partial<MockSettings> = {},
): AstroIntegration {
	return {
		hooks: {
			"astro:config:setup"({ injectScript }) {
				const optionsJson = JSON.stringify(options);
				injectScript(
					"page",
					`
						import { initializeKonamiEmojiBlast } from "konami-emoji-blast";

						initializeKonamiEmojiBlast(() => console.log("Activated!", ${optionsJson}));
					`,
				);
			},
		},
		name: "@konami-emoji-blast/astro",
	};
}
