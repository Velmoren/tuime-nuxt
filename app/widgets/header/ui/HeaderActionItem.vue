<script setup lang="ts">
interface Props {
  icon: string
  to?: string
  count?: number
  name: string
  label?: string
}

defineProps<Props>()
</script>

<template>
  <component
    v-bind="$attrs"
    class="action-btn"
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    :class="[`action-btn-${name}`]"
    :type="to ? undefined : 'button'"
    :aria-label="to ? undefined : label"
  >
    <i :class="[icon, 'icon']"></i>
    <sup v-if="count !== undefined" class="shop-count">{{ count }}</sup>
  </component>
</template>

<style lang="scss" scoped>
.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $white;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: relative;
  @include transition(all 0.2s ease-out);

  &:hover {
    opacity: 0.7;
  }

  .icon {
    font-size: 26px;
    @media #{$xs-device} {
      font-size: 22px;
    }
  }

  &-search .icon {
    font-size: 25px;
    @media #{$xs-device} {
      font-size: 22px;
    }
  }

  &-account .icon {
    font-size: 29px;
    position: relative;
    top: -2px;
    @media #{$xs-device} {
      font-size: 25px;
    }
  }

  &-wishlist .icon {
    font-size: 27px;
    @media #{$xs-device} {
      font-size: 24px;
    }
  }

  &-cart .icon {
    font-size: 26px;
    @media #{$xs-device} {
      font-size: 24px;
    }
  }

  &-menu {
    display: none;

    @media #{$md-device} {
      display: inline-flex;
    }

    .icon {
      font-size: 28px;
      position: relative;
      top: 1px;
      @media #{$xs-device} {
        font-size: 26px;
      }
    }
  }

  .shop-count {
    background-color: $theme-color2;
    color: $black;
    font-size: 12px;
    font-weight: $font-weight-bold;
    height: 20px;
    width: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    right: -8px;
    top: -5px;
  }
}
</style>
