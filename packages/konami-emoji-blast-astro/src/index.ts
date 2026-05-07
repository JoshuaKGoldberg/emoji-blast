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
			"astro:config:setup"({ injectScript }) {
				const serializableOptions: KonamiEmojiBlastOptions = {
					emojiBlastSettings: options,
				};
				const optionsJson = JSON.stringify(serializableOptions);
				injectScript(
					"page",
					`
						import { initializeKonamiEmojiBlast } from "konami-emoji-blast";

						initializeKonamiEmojiBlast(${optionsJson});
					`,
				);
			},
		},
		name: "@konami-emoji-blast/astro",
	};
}
