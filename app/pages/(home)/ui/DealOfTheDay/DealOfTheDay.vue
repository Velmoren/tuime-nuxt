<script setup lang="ts">
import { ProductDealCard, type Product } from '~/entities/product'

const dealProducts: Product[] = [
  { id: 1, title: 'Joust Duffle Bag', image: '/images/shop/1.png', price: 20.19 },
  { id: 2, title: 'Fusion Backpack', image: '/images/shop/5.png', price: 45.0 },
]
</script>

<template>
  <section class="product-area daily-product-area bg-color-f2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title shape-center text-center">
            <h5 class="sub-title">Trending Productts</h5>
            <h2 class="title">Deal Of The Day</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6" v-for="product in dealProducts" :key="product.id">
          <ProductDealCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-bottom: 90px;
  padding-top: 120px;
}
</style>
