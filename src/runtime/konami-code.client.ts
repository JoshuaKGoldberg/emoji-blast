import { initializeKonamiEmojiBlast } from 'konami-emoji-blast'
import { defineNuxtPlugin, onNuxtReady } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  onNuxtReady(initializeKonamiEmojiBlast)
})
