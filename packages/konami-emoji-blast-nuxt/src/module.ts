import {
	addImports,
	addImportsSources,
	addPlugin,
	createResolver,
	defineNuxtModule,
} from "@nuxt/kit";

export interface ModuleOptions {
	konamiCode?: boolean;
	directive?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "@konami-emoji-blast/nuxt",
		configKey: "konamiEmojiBlast",
	},
	setup() {
		const resolver = createResolver(import.meta.url);

		addPlugin(resolver.resolve("./runtime/plugins/konami-code.client"));
	},
});
