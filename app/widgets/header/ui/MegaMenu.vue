<template>
  <li 
    class="has-submenu position-static"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <NuxtLink to="#">
      <span>{{ title }}</span>
    </NuxtLink>

    <ul 
      class="submenu-nav submenu-nav-mega" 
      :class="[`column-${columnsCount || columns.length}`, { 'is-open': isOpen }]"
    >
      <li v-for="col in columns" :key="col.title" class="mega-menu-item">
        <NuxtLink to="#" class="mega-title">
          <span>{{ col.title }}</span>
        </NuxtLink>
        <ul>
          <li v-for="link in col.links" :key="link.to">
            <NuxtLink :to="link.to">
              <span>{{ link.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
interface MegaColumn {
  title: string
  links: { title: string; to: string }[]
}

defineProps<{
  title: string
  columns: MegaColumn[]
  columnsCount?: number // Для динамического класса column-3
}>()

const isOpen = ref(false)
</script>