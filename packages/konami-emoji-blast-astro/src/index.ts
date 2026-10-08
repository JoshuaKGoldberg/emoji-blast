import { AstroIntegration } from "astro";
import { KonamiEmojiBlastOptions } from "konami-emoji-blast";

type KonamiEmojiBlastSettings = NonNullable<
	KonamiEmojiBlastOptions["emojiBlastSettings"]
>;

type Serializable<Object extends Record<string, unknown>> = {
	[Key in keyof Object]: Exclude<Object[Key], (...args: never[]) => void>;
};

/**
 * Serializable options for astro integration
 */
type AstroKonamiEmojiBlastPluginOptions = Serializable<
	Pick<KonamiEmojiBlastSettings, "emojis">
>;

export function konamiEmojiBlast(
	options: Partial<AstroKonamiEmojiBlastPluginOptions> = {},
): AstroIntegration {
	return {
		hooks: {
			"astro:config:setup"({ injectScript, updateConfig }) {
				// The injected script imports konami-emoji-blast by resolved path, which
				// Vite won't pre-bundle, so its CommonJS dependency must be included.
				updateConfig({
					vite: {
						optimizeDeps: {
							include: [
								"@konami-emoji-blast/astro > konami-emoji-blast > konami-code-js",
							],
						},
					},
				});

				const serializableOptions: KonamiEmojiBlastOptions = {
					emojiBlastSettings: options,
				};
				const optionsJson = JSON.stringify(serializableOptions);

				// Resolving from this package means konami-emoji-blast doesn't need to
				// be a direct dependency of the user's project.
				// https://github.com/JoshuaKGoldberg/emoji-blast/issues/969
				const konamiEmojiBlastUrl = JSON.stringify(
					import.meta.resolve("konami-emoji-blast"),
				);
				injectScript(
					"page",
					`
						import { initializeKonamiEmojiBlast } from ${konamiEmojiBlastUrl};

						initializeKonamiEmojiBlast(${optionsJson});
					`,
				);
			},
		},
		name: "@konami-emoji-blast/astro",
	};
}
