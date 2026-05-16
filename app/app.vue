<!-- app/app/app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// @use "bootstrap/dist/css/bootstrap.min.css";
// Наш единственный глобальный импорт стилей из слоя Shared
@use "~/shared/assets/styles/main.scss";

body {
  background-color: red;
}
</style>