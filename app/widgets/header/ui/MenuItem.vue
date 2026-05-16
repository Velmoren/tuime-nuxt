<template>
  <li 
    :class="{ 'has-submenu': submenu?.length }"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <!-- Если есть подменю, ссылка часто ведет на заглушку или саму себя -->
    <NuxtLink :to="to || '#'">
      <span>{{ title }}</span>
    </NuxtLink>

    <!-- Обычное выпадающее меню -->
    <ul v-if="submenu?.length" class="submenu-nav" :class="{ 'is-open': isOpen }">
      <li v-for="sub in submenu" :key="sub.to">
        <NuxtLink :to="sub.to">
          <span>{{ sub.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
interface SubItem {
  title: string
  to: string
}

defineProps<{
  title: string
  to?: string
  submenu?: SubItem[]
}>()

const isOpen = ref(false)
</script>

