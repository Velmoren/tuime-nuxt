<script setup lang="ts">
interface Props {
  to?: string
  color?: boolean
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  customClasses?: string
}

withDefaults(defineProps<Props>(), {
  color: false,
  size: 'md',
  disabled: false,
  loading: false,
})
</script>

<template>
  <NuxtLink
    v-if="to"
    class="btn-theme"
    :to="to"
    :class="[
      `btn-${size}`,
      `${customClasses}`,
      { 'btn-theme-color': color },
      { 'btn-disabled': disabled || loading },
    ]"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    type="button"
    class="btn-theme"
    :class="[`btn-${size}`, `${customClasses}`, { 'btn-theme-color': color }]"
    :disabled="disabled || loading"
  >
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm me-2"
      role="status"
      aria-hidden="true"
    ></span>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-theme {
  background-color: transparent;
  border: none;
  border-radius: 20px;
  color: $theme-color;
  display: inline-block;
  font-size: 16px;
  font-weight: $font-weight-semi-bold;
  height: 55px;
  line-height: 56px;
  letter-spacing: 0.3px;
  padding: 0 10px;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  @include transition(all 0.3s ease-out);
  width: 180px;
  z-index: 1;

  @media #{$lg-device} {
    font-size: 14px;
    height: 44px;
    line-height: 46px;
    width: 140px;
  }

  &:before {
    background-color: $theme-color2;
    border: 2px solid $theme-color2;
    border-radius: 20px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    @include transition(all 0.3s ease-out);
  }

  &:after {
    background-color: #b79e55;
    border-radius: 20px;
    content: '';
    height: 100%;
    right: -3px;
    position: absolute;
    top: 3px;
    width: 100%;
    z-index: -2;
    @include transition(all 0.3s ease-out);
  }

  &:hover {
    color: $theme-color;
    opacity: 0.8;
  }

  &.btn-theme-color {
    color: $white;

    &:before {
      border-radius: 15px;
      background-color: $theme-color;
      border: 2px solid $theme-color;
    }

    &:after {
      border-radius: 15px;
      background-color: #a45798;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  &.btn-sm {
    border-radius: 15px;
    font-size: 14px;
    width: 133px;
    height: 41px;
    line-height: 44px;

    @media #{$lg-device} {
      font-size: 12px;
      width: 108px;
      height: 35px;
      line-height: 35px;
    }

    &:before {
      border-radius: 15px;
    }

    &:after {
      border-radius: 15px;
    }
  }
}

.btn-theme-link {
  color: $theme-color;
  display: inline-block;
  font-size: 14px;
  font-weight: $font-weight-semi-bold;
  line-height: 1;
  letter-spacing: 0.2px;
  position: relative;
  text-transform: uppercase;
  @include transition(all 0.3s ease-out);

  &:before {
    background-color: $theme-color;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
    bottom: -1px;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
