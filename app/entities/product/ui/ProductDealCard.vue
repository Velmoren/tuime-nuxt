<script setup lang="ts">
import type { Product } from '../model/product.types'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-deal-card">
    <div class="row">
      <div class="col-lg-6">
        <div class="product-deal-card__thumb">
          <NuxtLink :to="`product/${product.id}`">
            <NuxtImg :src="product.image" width="270" height="320" alt="Image-HasTech" />
          </NuxtLink>

          <div class="product-deal-card__actions">
            <button type="button" class="btn-product-wishlist" aria-label="Добавить в избранное">
              <i class="pe-7s-like"></i>
            </button>
            <div class="product-action-links">
              <button type="button" class="btn-product-cart" aria-label="Добавить в корхину">
                <i class="pe-7s-shopbag"></i>
              </button>
              <button
                type="button"
                class="btn-product-quick-view"
                aria-label="Открыть быстрый просмотр"
              >
                <i class="pe-7s-look"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="product-deal-card__info">
          <div class="ht-countdown-wrap">
            <span class="countdown-title">End In:</span>
            <div class="ht-countdown ht-countdown-style1" data-date="1/10/2022"></div>
          </div>

          <h4 class="title"><a href="single-product.html">Joust Duffle Bag</a></h4>

          <div class="prices">
            <span class="price">$20.19</span>
          </div>

          <div class="product-deal-card__feature-list">
            <ul>
              <li>
                <span>Predecessor :</span>
                None.
              </li>
              <li>
                <span>Support Type :</span>
                Neutral.
              </li>
              <li>
                <span>Cushioning :</span>
                High Energizing.
              </li>
              <li>
                <span>Total Weight :</span>
                300gm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-deal-card {
  margin-bottom: 30px;
  position: relative;

  &__thumb {
    overflow: hidden;
    position: relative;
    border: 1px solid #d0d0d0;

    img {
      @include transition(all 0.3s ease-out);
      width: 100%;
    }
  }

  &__info {
    margin: 0;
    padding: 0;
    text-align: left;

    @media #{$md-device} {
      margin-top: 30px;
    }

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

  &__feature-list {
    border-top: 2px dotted $theme-color2;
    margin-top: 33px;
    padding-top: 33px;

    @media #{$lg-device} {
      margin-top: 18px;
      padding-top: 18px;
    }

    ul {
      margin-bottom: 0;

      li {
        color: $theme-color;
        display: block;
        font-size: 16px;
        line-height: 1.2;
        margin-bottom: 14px;
        position: relative;
        padding-left: 16px;

        @media #{$lg-device} {
          font-size: 14px;
        }

        span {
          font-weight: $font-weight-semi-bold;
        }

        &:before {
          background-color: $theme-color;
          border-radius: 50%;
          height: 6px;
          position: absolute;
          width: 6px;
          content: '';
          display: inline-block;
          left: 0;
          top: calc(50% - 1px);
          transform: translate(0%, -50%);
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &:hover {
    .product-deal-card {
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

.ht-countdown-wrap {
  align-items: center;
  background-color: $theme-color2;
  border-radius: 0 50px 50px 0;
  display: flex;
  width: fit-content;
  margin-bottom: 23px;
  padding: 7px 16px 6px 17px;
  @media #{$lg-device} {
    margin-bottom: 13px;
  }
  .countdown-title {
    color: $theme-color;
    font-size: 16px;
    font-weight: $font-weight-bold;
    line-height: 1;
    margin-right: 10px;
    display: inline-block;
    @media #{$lg-device} {
      font-size: 13px;
    }
  }
}
.ht-countdown-style1 {
  align-items: center;
  display: flex;
  .countdown-item {
    position: relative;
    line-height: 1;
    margin: 0 7.5px;
    &:after {
      content: ':';
      color: $theme-color;
      font-size: 16px;
      font-weight: $font-weight-semi-bold;
      display: inline-block;
      position: absolute;
      right: -9px;
      top: calc(50% - 1px);
      line-height: 1;
      vertical-align: middle;
      transform: translate(0px, -50%);
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
      &:after {
        display: none;
      }
    }

    &__time {
      color: $theme-color;
      font-size: 16px;
      font-weight: $font-weight-semi-bold;
      line-height: 1;
      @media #{$lg-device} {
        font-size: 14px;
      }
    }
    &__label {
      display: none;
    }
  }
}
</style>
