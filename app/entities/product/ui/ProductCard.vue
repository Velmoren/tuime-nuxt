<script setup lang="ts">
import type { Product } from '../model/product.types'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-card">
    <div class="product-card__thumb">
      <NuxtLink :to="`product/${product.id}`">
        <NuxtImg :src="product.image" width="270" height="320" alt="Image-HasTech" />
      </NuxtLink>
    </div>

    <div class="product-card__info">
      <p class="product-card__info--title">
        <NuxtLink :to="`product/${product.id}`">{{ product.title }}</NuxtLink>
      </p>
      <div class="product-card__info--prices">
        <span class="product-card__info--prices-item">${{ product.price }}</span>
      </div>
    </div>

    <div class="product-card__actions">
      <button type="button" class="btn-product-wishlist" aria-label="Добавить в избранное">
        <i class="pe-7s-like"></i>
      </button>

      <div class="product-action-links">
        <button type="button" class="btn-product-cart" aria-label="Добавить в корхину">
          <i class="pe-7s-shopbag"></i>
        </button>
        <button type="button" class="btn-product-quick-view" aria-label="Открыть быстрый просмотр">
          <i class="pe-7s-look"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  margin-bottom: 30px;
  position: relative;

  &__thumb {
    overflow: hidden;
    position: relative;

    img {
      @include transition(all 0.3s ease-out);
      width: 100%;
    }
  }

  &__info {
    margin-top: 23px;
    text-align: center;

    &--title {
      color: $black;
      font-size: 18px;
      font-weight: $font-weight-normal;
      line-height: 1.6;
      margin-bottom: 7px;

      a {
        color: $black;

        &:hover {
          color: $theme-color;
        }
      }
    }

    &--prices {
      color: $black;
      font-size: 18px;
      font-weight: $font-weight-bold;
      line-height: 1;
    }
  }

  &__actions {
    position: absolute;
    right: 15px;
    top: 15px;

    button {
      background-color: $white;
      color: $black;
      font-size: 24px;
      height: 44px;
      width: 44px;
      display: block;
      border: none;
      border-radius: 50%;
      line-height: 50px;
      margin-bottom: 10px;
      @include transition(all 0.4s ease-out);

      &:hover {
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.08);
        color: $theme-color;
      }
    }

    .product-action-links {
      position: absolute;
      opacity: 0;
      top: 100%;
      right: 20px;
      @include transition(all 0.3s ease-out);
      button {
        font-size: 22px;
        line-height: 47px;
        + {
          button {
            @include translate(-10px, 0px);
          }
        }
      }
    }
  }
  &:hover {
    .product-card {
      &__thumb {
        img {
          @include scale(1.05);
        }
      }

      &__actions {
        .product-action-links {
          opacity: 1;
          right: 0;

          button {
            + {
              button {
                @include translate(0px, 0px);
                transition-delay: 0.2s;
              }
            }
          }
        }
      }
    }
  }
}
</style>
