<script setup lang="ts">
import { Button } from '~/shared/ui'
import type { Category } from '../model/category.types'

defineProps<{
  category: Category
}>()
</script>

<template>
  <div class="sale-category-card">
    <div class="sale-category-card__thumb">
      <NuxtLink :to="category.to">
        <NuxtImg :src="category.image" width="570" height="300" alt="Image-HasTech" />
      </NuxtLink>
    </div>
    <div class="sale-category-card__content">
      <p class="sale-category-card__content--sub-title">50% Off</p>
      <p class="sale-category-card__content--title">Dog Food</p>
      <Button :color="true" :to="category.to">Shop Now</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sale-category-card {
  margin-bottom: 30px;
  position: relative;

  &__thumb {
    overflow: hidden;
    position: relative;

    img {
      min-height: 300px;
      object-fit: cover;
      width: 100%;
      @include transition(all 0.3s ease-out);

      @media #{$lg-device} {
        min-height: 240px;
      }
    }
  }

  &__content {
    left: calc(50% + 42px);
    margin-top: -4px;
    position: absolute;
    pointer-events: none;
    top: 50%;
    @include translate(0px, -50%);

    @media #{$md-device} {
      left: calc(50% + 16px);
    }

    @media #{$sm-device} {
      left: calc(50% + 85px);
    }

    @media #{$xs-device} {
      left: auto;
      right: 18px;
    }

    &--sub-title {
      color: $theme-color;
      font-size: 24px;
      line-height: 1;
      margin-bottom: 11px;

      @media #{$lg-device} {
        font-size: 18px;
      }
    }

    &--title {
      color: $theme-color;
      font-size: 36px;
      line-height: 1;
      margin-bottom: 26px;
      text-transform: uppercase;

      @media #{$lg-device} {
        font-size: 27px;
        margin-bottom: 16px;
      }

      @media #{$md-device} {
        font-size: 25px;
      }
    }

    .btn-theme {
      pointer-events: visible;
    }
  }
  &:hover {
    .sale-category-card {
      &__thumb {
        img {
          @include scale(1.05);
        }
      }
    }
  }
}
</style>
