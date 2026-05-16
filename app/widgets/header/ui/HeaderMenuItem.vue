<script setup lang="ts">
import type { SubItem, MegaColumn } from '../model/header.types'

const props = defineProps<{
  title: string
  to?: string
  submenu?: SubItem[]
  columns?: MegaColumn[]
}>()

const isOpen = ref(false)

const isMega = computed(() => !!props.columns?.length)
const hasSubmenu = computed(() => isMega.value || !!props.submenu?.length)
</script>

<template>
  <li 
    :class="[
      'menu-item',
      { 'has-submenu': hasSubmenu },
      { 'position-static': isMega }
    ]"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <NuxtLink :to="to || '#'" class="menu-link">
      <span>{{ title }}</span>
    </NuxtLink>

    <Transition name="menu-fade">
      <!-- Mega Menu -->
      <ul 
        v-if="isOpen && isMega" 
        class="submenu-nav submenu-nav-mega" 
        :class="[`column-${columns?.length}`]"
      >
        <li v-for="col in columns" :key="col.title" class="mega-menu-item">
          <NuxtLink to="#" class="mega-title">
            <span>{{ col.title }}</span>
          </NuxtLink>
          <ul class="mega-links">
            <li v-for="link in col.links" :key="link.to">
              <NuxtLink :to="link.to">
                <span>{{ link.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Standard Submenu -->
      <ul v-else-if="isOpen && submenu?.length" class="submenu-nav">
        <li v-for="sub in submenu" :key="sub.to">
          <NuxtLink :to="sub.to">
            <span>{{ sub.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;

  &.position-static {
    position: static;
  }

  .menu-link {
    color: $white;
    font-size: 16px;
    font-family: $font-current-theme1;
    font-weight: $font-weight-normal;
    height: 56px;
    line-height: 56px;
    letter-spacing: 0;
    position: relative;
    margin: 0 13px;
    padding: 0 13px;
    text-transform: uppercase;
    display: block;
    white-space: nowrap;
    @include transition(all .3s ease-out);

    span {
      position: relative;
      display: inline-block;
      line-height: inherit;

      &:before {
        content: "";
        @include transition(all .3s ease-out);
        position: absolute;
        bottom: 12px; // Подчеркивание под текстом (с учетом line-height 56px)
        left: 50%;
        width: 0;
        height: 2px;
        background-color: $white;
        transform: translateX(-50%);
      }
    }

    &:hover {
      color: $theme-color2;
    }
  }

  &:hover, &.active {
    & > .menu-link {
      color: $theme-color2;
      span:before {
        width: 100%;
      }
    }
  }
}

// Общие стили для выпадающих списков
.submenu-nav {
  background-color: $white;
  box-shadow: 0 1px 24px 0 rgba($black, .09);
  border-radius: 0 0 4px 4px;
  padding: 15px 0;
  margin: 0;
  list-style: none;
  min-width: 230px;
  position: absolute;
  top: 100%;
  left: -15px; // Возвращаем оригинальное смещение
  z-index: 9999;

  & > li {
    border-bottom: 1px solid rgba(173, 181, 189, 0.15);
    display: block;
    width: 100%;
    
    &:last-child {
      border-bottom: none;
    }

    a {
      color: #1d1d1d;
      display: block;
      font-size: 14px;
      padding: 11px 25px 10px;
      position: relative;
      text-transform: capitalize;
      @include transition(all .3s ease-out);

      &:hover {
        color: $theme-color;
        background-color: rgba(173, 181, 189, 0.15);
      }
    }
  }

  // Мега меню
  &-mega {
    display: flex;
    left: 50%;
    min-width: 100%;
    @include transform(translate(-50%, 0));
    width: 500px; // Ширина по умолчанию из AppHeader
    background-color: $white;
    padding: 20px 0;

    &.column-3 {
      width: 720px;
    }

    .mega-menu-item {
      border-right: 1px solid rgba(173, 181, 189, 0.15);
      border-bottom: none;
      flex: 1 1 0;
      padding: 0;
      list-style: none;

      &:last-child {
        border-right: none;
      }

      .mega-title {
        color: #2d2d2d;
        font-size: 14px;
        font-weight: $font-weight-semi-bold;
        font-family: $font-current-theme1;
        margin: 0;
        padding: 14px 35px;
        text-transform: uppercase;
        display: block;
        cursor: default;

        &:hover {
          background-color: transparent;
          color: #2d2d2d;
        }
      }

      .mega-links {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          border-bottom: 1px solid rgba(173, 181, 189, 0.15);
          display: block;
          
          &:last-child {
            border-bottom: none;
          }

          a {
            color: #1d1d1d;
            font-size: 13px;
            padding: 11px 35px 10px;

            &:hover {
              background-color: rgba(173, 181, 189, 0.15);
              color: $theme-color;
            }
          }
        }
      }
    }
  }
}

// Анимация Transition
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);

  &.submenu-nav-mega {
    transform: translate(-50%, 20px);
  }
}

.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);

  &.submenu-nav-mega {
    transform: translate(-50%, 10px);
  }
}
</style>
