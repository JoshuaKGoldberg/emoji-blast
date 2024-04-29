import { initializeKonamiEmojiBlast } from 'konami-emoji-blast'
import { onScopeDispose } from 'vue'
import { defineNuxtPlugin, onNuxtReady } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  let unsubscribe: () => void
  onNuxtReady(() => {
    unsubscribe = initializeKonamiEmojiBlast()
  })
  onScopeDispose(() => {
    unsubscribe()
  })
})
