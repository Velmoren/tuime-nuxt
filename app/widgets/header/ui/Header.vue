<script setup lang="ts">
import HeaderMenu from './HeaderMenu.vue'
import HeaderActions from './HeaderActions.vue'
</script>

<template>
  <header class="header-area transparent">
    <div class="container">
      <div class="row no-gutter align-items-center position-relative">
        <div class="col-12">
          <div class="header-align">
            <div class="header-align-start">
              <div class="header-logo-area">
                <NuxtLink to="/">
                  <NuxtImg src="/images/logo.png" alt="Логотип магазина" width="158" height="36" />
                </NuxtLink>
              </div>
            </div>
            <div class="header-align-center">
              <HeaderMenu />
            </div>

            <div class="header-align-end">
              <HeaderActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// Миксин для кнопок действий в шапке
@mixin action-btn($size: 26px, $xs-size: 22px, $top: 0) {
  display: inline-block;
  color: $white;
  font-size: $size;
  position: relative;
  top: $top;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  @include transition(all .2s ease-out);

  @media #{$xs-device} {
    font-size: $xs-size;
  }

  &:hover {
    opacity: 0.7;
  }
}

.header-area {
  padding: 0;

  .container {
    padding: 0 15px;

    @media #{$xl-device} {
      max-width: none;
    }
  }

  // Sticky Header
  &.sticky-header {
    @include transition(all .2s ease-out);

    &.sticky {
      background-color: $theme-color;
      box-shadow: 0px 10px 60px -30px rgba($black, .1);
      position: fixed !important;
      left: 0;
      top: 0 !important;
      width: 100%;
      z-index: 99;

      .header-logo-area {
        .logo-main {
          display: block;
        }

        .logo-light {
          display: none;
        }
      }
    }
  }

  // Transparent Header Style
  &.transparent {
    background-color: transparent;
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9;
  }

  // Header Default
  &.header-default {
    background-size: cover;
    background-position: top left 5px;
    align-items: center;
    display: flex;
    position: relative;
    z-index: 2;
  }

  // Header Align
  .header-align {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 136px;

    @media #{$lg-device} {
      height: 88px;
    }
  }
}

// Navigation Wrapper
.header-navigation-area {
  @media #{$md-device} {
    display: none;
  }
}

// Logo Style
.header-logo-area {
  position: relative;

  a {
    display: block;
  }

  img {
    max-width: 255px;

    @media #{$xl-device} {
      max-width: 125px;
    }
  }

  .logo-light {
    display: none;
  }
}

// Aside Search Form
.aside-search-box-wrapper {
  .search-box-form-wrap {
    .search-note p {
      font-size: 14px;
      text-transform: capitalize;
      color: #666;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }

  .search-form {
    position: relative;

    .form-control {
      border: 1px solid $theme-color;
      color: $theme-color;
      box-shadow: none;
      border-radius: 0;
      height: 70px;
      font-size: 15px;
      font-weight: 600;
      line-height: 70px;
      text-transform: capitalize;
      padding: 10px 75px 10px 24px;

      @include placeholder {
        color: $theme-color;
      }
    }

    .search-button {
      border: none;
      background-color: $theme-color;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 70px;
      font-size: 18px;
      color: #fff;
      @include transition(all .3s ease-out);

      &:hover {
        color: $theme-color;
        background-color: $theme-color2;
      }
    }
  }

  &.offcanvas-top {
    height: 239px;
  }

  .offcanvas-header {
    justify-content: flex-end;
    padding: 0;
  }

  .offcanvas-body {
    padding-top: 64px;
  }

  .btn-close {
    position: absolute;
    background-image: none;
    background-color: #721b65;
    color: #fff;
    opacity: 1;
    font-size: 38px;
    top: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    margin: 0;
    border-radius: 0;
    right: 15px;
    @include transition(all .3s ease-out);

    &:hover {
      color: $theme-color;
      background-color: $theme-color2;
    }
  }
}
</style>
