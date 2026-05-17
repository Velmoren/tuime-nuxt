<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Tumie` : 'Tumie — Интернет-магазин'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '~/shared/assets/styles/main.scss';
</style>
