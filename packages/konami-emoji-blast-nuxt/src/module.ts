import {
	defineNuxtModule,
	addPlugin,
	createResolver,
	addImportsSources,
	addImports,
} from "@nuxt/kit";

export interface ModuleOptions {
	konamiCode?: boolean;
	directive?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "@konami-emoji-blast/nuxt",
		configKey: "emojiBlast",
	},
	defaults: {
		konamiCode: true,
		directive: true,
	},
	setup(options, _nuxt) {
		const resolver = createResolver(import.meta.url);

		addImportsSources({
			from: "emoji-blast",
			imports: [
				"emojiBlasts",
				"emojiBlast",
				...[
					"defaultClassName",
					"defaultCreateContainer",
					"defaultEmojiCount",
					"defaultEmojis",
					"defaultEvents",
					"defaultPhysics",
					"defaultPosition",
				].map((name) => ({
					name,
					as: `emojiBlast${name[0].toUpperCase()}${name.slice(1)}`,
				})),
			],
		});

		addImports({
			from: resolver.resolve("./runtime/composables/konami"),
			name: "useEmojiBlastKonamiCode",
		});

		if (options.konamiCode) {
			addPlugin(resolver.resolve("./runtime/plugins/konami-code.client"));
		}
		if (options.directive) {
			addPlugin(resolver.resolve("./runtime/plugins/directive"));
		}
	},
});
