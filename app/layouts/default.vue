<script setup lang="ts">
import { Header } from '~/widgets/header'
import { Footer } from '~/widgets/footer'
</script>

<template>
  <div class="layout-default">
    <Header />

    <main class="layout-main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .layout-main {
    flex-grow: 1;
  }
}
</style>
