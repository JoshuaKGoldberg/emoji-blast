import { defineNuxtPlugin } from '#app'
import { useEmojiBlastKonamiCode } from '~/src/runtime/composables/konami'

export default defineNuxtPlugin(() => {
  useEmojiBlastKonamiCode()
})
