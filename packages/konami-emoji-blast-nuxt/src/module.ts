import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
	meta: {
		configKey: "konamiEmojiBlast",
		name: "@konami-emoji-blast/nuxt",
	},
	setup() {
		const resolver = createResolver(import.meta.url);

		addPlugin(resolver.resolve("./runtime/plugins/konami-code.client"));
	},
});
