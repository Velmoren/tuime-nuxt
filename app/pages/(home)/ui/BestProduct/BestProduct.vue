<script setup lang="ts">
import { ProductCard, type Product } from '~/entities/product'
import { ProductFilterTabs } from '~/features/product-filter-tabs'

const bestProducts: Product[] = [
  { id: 1, title: 'Joust Duffle Bag', image: '/images/shop/1.png', price: 20.19 },
  { id: 2, title: 'Endeavor Daytripa', image: '/images/shop/2.png', price: 33.0 },
  { id: 3, title: 'Impulse Duffle', image: '/images/shop/3.png', price: 65.0 },
  { id: 4, title: 'Driven Backpack', image: '/images/shop/4.png', price: 25.0 },
  { id: 5, title: 'Fusion Backpack', image: '/images/shop/5.png', price: 45.0 },
  { id: 6, title: 'Savvy Shoulder Tote', image: '/images/shop/6.png', price: 30.0 },
  { id: 7, title: 'Voyage Yoga Bag', image: '/images/shop/7.png', price: 39.0 },
  { id: 8, title: 'Wayfarer Messenger Bag', image: '/images/shop/8.png', price: 50.0 },
]
</script>

<template>
  <section class="product-area product-default-area">
    <div class="container pt--0">
      <div class="row">
        <div class="col-12">
          <div class="section-title mb-45 mb-sm-20 shape-center text-center">
            <h5 class="sub-title">Best PRODUCT</h5>
            <h2 class="title">New Collection</h2>
          </div>

          <ProductFilterTabs />
        </div>
      </div>
      <div class="row isotope-grid">
        <div
          class="col-sm-6 col-lg-3 isotope-item filter_best_sellers filter_on_sall"
          v-for="product in bestProducts"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-bottom: 90px;
}
</style>
