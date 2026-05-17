<script setup lang="ts">
import {
  BannerSlider,
  TrendingCategories,
  SaleCategories,
  BestProduct,
  BestDealOffer,
  DealOfTheDay,
  BestPetFood,
  LatestBlog,
} from './ui'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Главная страница — Интернет-магазин Tumie',
  description: 'Лучшие товары для вас и ваших питомцев с доставкой.',
})
</script>

<template>
  <h1 class="visually-hidden">Интернет-магазин товаров для питомцев Tumie</h1>
  <BannerSlider />
  <TrendingCategories />
  <SaleCategories />
  <BestProduct />
  <BestDealOffer />
  <DealOfTheDay />
  <BestPetFood />
  <LatestBlog />
</template>
