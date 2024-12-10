import {
	addPlugin,
	createResolver,
	defineNuxtModule,
	extendViteConfig,
} from "@nuxt/kit";

export default defineNuxtModule({
	meta: {
		configKey: "konamiEmojiBlast",
		name: "@konami-emoji-blast/nuxt",
	},
	setup(_options, nuxt) {
		const resolver = createResolver(import.meta.url);

		// TODO: remove when fixed in `konami-code-js`: https://github.com/MachinisteWeb/konami-code-js/issues/3
		extendViteConfig((config) => {
			config.optimizeDeps ||= {};
			config.optimizeDeps.include = config.optimizeDeps.include || [];
			config.optimizeDeps.include.push("konami-emoji-blast > konami-code-js");
		});

		addPlugin(resolver.resolve("./runtime/plugins/konami-code.client"));
	},
});
