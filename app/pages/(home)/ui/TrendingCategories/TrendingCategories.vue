<script setup lang="ts">
import { CategoryCard, type Category } from '~/entities/category'

const homeCategories: Category[] = [
  { id: 1, title: 'Cats', image: '/images/shop/categories/1.png', to: '/category' },
  { id: 2, title: 'Gold Fish', image: '/images/shop/categories/2.png', to: '/category' },
  { id: 3, title: 'Parrot', image: '/images/shop/categories/3.png', to: '/category' },
  { id: 4, title: 'Dog', image: '/images/shop/categories/4.png', to: '/category' },
  { id: 5, title: 'Rabbits', image: '/images/shop/categories/5.png', to: '/category' },
]
</script>

<template>
  <section class="product-area product-category-area bg-color-f2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title shape-center text-center">
            <p class="sub-title">TRENDING CATEGORIES</p>
            <h2 class="title">Shop By Category</h2>
          </div>
        </div>
      </div>

      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gutter-43"
      >
        <div class="col" v-for="category in homeCategories" :key="category.id">
          <CategoryCard :category="category" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 120px;
  padding-bottom: 90px;
}
</style>
