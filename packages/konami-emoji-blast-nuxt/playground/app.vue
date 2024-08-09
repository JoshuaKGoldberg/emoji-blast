<template>
  <div>
    Nuxt module playground!
    <div :style="{ 'paddingTop': '400px' }" />
    <button
      v-emoji-blast.click="{
      }"
    >
      v-emoji-blast
    </button>
    <button @click="() => emojiBlasts()">
      emojiBlasts
    </button>
    <button
      v-test="{ }"
      @click="() => emojiBlast()"
    >
      emojiBlast
    </button>
  </div>
</template>

<script setup lang="ts">
useEmojiBlastKonamiCode()
</script>
