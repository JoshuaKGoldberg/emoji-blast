import { useEmojiBlastKonamiCode } from '../composables/konami'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  useEmojiBlastKonamiCode()
})
