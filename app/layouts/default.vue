<!-- app/app/layouts/default.vue -->
<template>
  <div class="layout-default">
    <!-- Импортируем виджет шапки из слоя widgets -->
    <HeaderWidget />

    <main class="layout-main">
      <slot />
    </main>

    <!-- Сюда позже встанет FooterWidget -->
  </div>
</template>

<script setup lang="ts">
import { HeaderWidget } from '~/widgets/header'
</script>

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