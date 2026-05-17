<script setup lang="ts">
import type { Category } from '../model/category.types'

defineProps<{
  category: Category
}>()
</script>

<template>
  <div class="category-card">
    <div class="category-card__thumb">
      <NuxtLink :to="category.to">
        <NuxtImg :src="category.image" width="200" height="200" alt="Image-HasTech" />
      </NuxtLink>
    </div>
    <div class="category-card__content">
      <p class="category-card__content--title">
        <NuxtLink :to="category.to">{{ category.title }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-card {
  margin-bottom: 30px;
  text-align: center;

  &__thumb {
    border-radius: 50%;
    display: inline-block;
    height: 200px;
    overflow: hidden;
    position: relative;
    width: 200px;

    img {
      border-radius: 50%;
      @include transition(all 0.4s ease-out);
      width: 100%;
    }

    &:before {
      border: 2px dashed $theme-color;
      content: '';
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100%;
      z-index: 10;
      opacity: 0;
      @include animation(spinAround 20s linear infinite);
      @include transition(all 0.3s ease-out);
    }
  }

  &__content {
    margin-top: 14px;

    &--title {
      font-size: 24px;
      font-weight: $font-weight-semi-bold;
      line-height: 1;
      margin-bottom: 0;

      a {
        color: $black;

        &:hover {
          color: $black;
        }
      }
    }
  }

  &:hover {
    .category-card {
      &__thumb {
        &:before {
          opacity: 1;
        }

        img {
          @include scale(1.07);
        }
      }

      &__content {
        &--title {
          a {
            color: $theme-color;
          }
        }
      }
    }
  }
}
</style>
