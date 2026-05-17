<script setup lang="ts"></script>

<template>
  <div class="product-filter-tabs">
    <button class="-active" data-filter="*">All</button>
    <button data-filter=".filter_new">New</button>
    <button data-filter=".filter_best_sellers">Best Sellers</button>
    <button data-filter=".filter_featured">Featured</button>
    <button data-filter=".filter_on_sall">On Sall</button>
  </div>
</template>

<style lang="scss" scoped>
.product-filter-tabs {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  @media #{$lg-device} {
    margin-bottom: 32px;
  }

  @media #{$xxs-device} {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  button {
    border-radius: 50px;
    border: 2px dashed transparent;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    text-transform: uppercase;
    display: inline-block;
    box-shadow: none;
    outline: none;
    margin: 0 2px;
    padding: 8px 19px 7px;
    @include transition(all 0.3s ease-out);

    @media #{$md-device} {
      font-size: 13px;
      margin: 0;
      padding: 6px 18px 5px;
    }

    @media #{$xs-device} {
      font-size: 12px;
    }

    @media #{$xxs-device} {
      border: 2px dashed #eee;
      display: block;
      margin: 0 3px 10px;
      width: 47.77%;
    }

    &.-active {
      border-color: $theme-color;
    }

    &:hover {
      color: $theme-color;
    }
  }
  &-style2 {
    @media #{$sm-device} {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    button {
      @media #{$sm-device} {
        font-size: 12px;
        border: 2px dashed #eee;
        display: block;
        margin: 0 3px 10px;
        width: 47.77%;
      }
    }
  }
}
</style>
