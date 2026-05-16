<script setup lang="ts">
import { useHeaderStore } from '../model/header.store'

import HeaderMenuItem from './HeaderMenuItem.vue'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="header-navigation-area position-relative">
    <ul class="main-menu nav">
      <HeaderMenuItem v-for="item in headerStore.menuConfig" :key="item.title" v-bind="item" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.main-menu {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
