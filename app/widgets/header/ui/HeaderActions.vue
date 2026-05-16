<script setup lang="ts">
import { useHeaderStore } from '../model/header.store'
import HeaderActionItem from './HeaderActionItem.vue'

const headerStore = useHeaderStore()
</script>

<template>
  <div class="header-action-area">
    <HeaderActionItem
      v-for="action in headerStore.actionsConfig"
      :key="action.name"
      v-bind="action"
      :data-bs-toggle="action.offcanvas ? 'offcanvas' : undefined"
      :data-bs-target="action.offcanvas ? `#${action.offcanvas}` : undefined"
      :aria-controls="action.offcanvas"
    />
  </div>
</template>

<style lang="scss" scoped>
.header-action-area {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  
  @media #{$xs-device} {
    gap: 10px;
  }
}
</style>
