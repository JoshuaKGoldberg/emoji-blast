import { emojiBlast } from 'emoji-blast'
import { defu } from 'defu'
import type { EmojiBlastSettings } from 'emoji-blast'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const listeners = new WeakMap<HTMLElement, (event: Event | MouseEvent) => void>()
  nuxtApp.vueApp.directive<HTMLElement, EmojiBlastSettings>('emoji-blast', {
    beforeMount(el, binding) {
      const listener = (event: Event | MouseEvent) => {
        const { x, width, height, y } = el.getBoundingClientRect()
        const chars = new Set(el.textContent?.split('') || '')
        emojiBlast(defu(binding.value || {}, {
          emojis: [...chars],
          position: {
            x: 'clientX' in event && event.clientX ? event.clientX : x + (width / 2),
            y: 'clientY' in event && event.clientY ? event.clientY : y + (height / 2),
          },
        }))
      }
      // text content of element -> equivalent emoji
      // within the element - container
      for (const event in binding.modifiers) {
        if (binding.modifiers[event]) {
          el.addEventListener(event, listener)
        }
      }
      listeners.set(el, listener)
    },
    beforeUnmount(el, binding) {
      const listener = listeners.get(el)
      if (!listener) return

      for (const event in binding.modifiers) {
        if (binding.modifiers[event]) {
          el.removeEventListener(event, listener)
        }
      }
    },
  })
})

declare module '@vue/runtime-core' {
  interface GlobalDirectives {
    emojiBlast: Directive<HTMLElement, EmojiBlastSettings>
  }
}
