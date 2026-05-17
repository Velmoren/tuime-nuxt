<script setup lang="ts">
import { PostCard, type Article } from '~/entities/article'

const latestPosts: Article[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet conse adipis.',
    image: '/images/blog/1.png',
    author: 'Admin',
    updateDate: '2022-09-22T00:00:00+03:00',
  },
  {
    id: 2,
    title: 'It is a long established fact that a reader will.',
    image: '//images/blog/2.png',
    author: 'Admin',
    updateDate: '2022-09-24T00:00:00+03:00',
  },
  {
    id: 2,
    title: 'fashions fade, style is eternal About Upto.',
    image: '/images/blog/3.png',
    author: 'Admin',
    updateDate: '2022-09-26T00:00:00+03:00',
  },
]
</script>

<template>
  <section class="blog-area blog-default-area">
    <div class="container pt--0">
      <div class="row">
        <div class="col-12">
          <div class="section-title shape-center text-center">
            <h5 class="sub-title">TRENDING CATEGORIES</h5>
            <h2 class="title">Shop By Category</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="post in latestPosts" :key="post.id">
          <PostCard :post="post" />
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
