<script setup lang="ts">
import { SaleCategoryCard, type Category } from '~/entities/category'

const saleCategories: Category[] = [
  { id: 1, title: 'Dog Food', image: '/images/shop/banner/1.png', sale: 50, to: '/category' },
  { id: 2, title: 'Cat Food', image: '/images/shop/banner/2.png', sale: 50, to: '/category' },
]
</script>

<template>
  <section class="product-area product-banner-area">
    <div class="container">
      <div class="row">
        <div class="col-md-6" v-for="saleCategory in saleCategories" :key="saleCategory.id">
          <SaleCategoryCard :category="saleCategory" />
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
