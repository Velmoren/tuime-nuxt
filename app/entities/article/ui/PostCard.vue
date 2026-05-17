<script setup lang="ts">
import { Button } from '~/shared/ui'
import type { Article } from '../model/article.types'

defineProps<{
  post: Article
}>()
</script>

<template>
  <div class="post-card">
    <div class="post-card__thumb">
      <NuxtLink :to="`posts/${post.id}`">
        <NuxtImg :src="post.image" width="350" height="250" alt="Image-HasTech" />
      </NuxtLink>
    </div>

    <div class="post-card__content">
      <div class="post-card__content--meta">
        <ul>
          <li class="post-card__content--author-info">
            <span>By:</span>
            <NuxtLink to="/posts">{{ post.author }}</NuxtLink>
          </li>
          <li class="post-card__content--post-date">Sep 24,2022</li>
        </ul>
      </div>

      <h4 class="post-card__content--title">
        <NuxtLink :to="`posts/${post.id}`">{{ post.title }}</NuxtLink>
      </h4>

      <Button size="sm" :to="`posts/${post.id}`">Read More</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 9px;
  margin-bottom: 30px;

  &__thumb {
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    img {
      border-radius: 10px;
      @include transition(all 0.3s ease-out);
      width: 100%;
    }
  }

  &__content {
    padding: 37px 0 34px;
    text-align: center;

    @media #{$lg-device} {
      padding: 27px 0 22px;
    }

    &--title {
      color: #2c2c2c;
      font-size: 30px;
      font-weight: $font-weight-semi-bold;
      line-height: 1.24;
      margin-bottom: 21px;

      @media #{$lg-device} {
        font-size: 24px;
        margin-bottom: 16px;
      }

      a {
        color: #2c2c2c;
      }
    }

    &--meta {
      ul {
        display: flex;
        margin-bottom: 9px;
        justify-content: center;

        li {
          color: $black;
          font-size: 16px;
          font-weight: $font-weight-semi-bold;
          line-height: 1;

          @media #{$lg-device} {
            font-size: 14px;
          }

          span {
            color: $theme-color;
            font-weight: $font-weight-bold;
          }

          a {
            color: $black;
          }

          + {
            li {
              margin-left: 14px;
            }
          }
        }
      }
    }

    .btn-theme {
      color: $white;
    }
  }

  &:hover {
    .post-card {
      &__thumb {
        img {
          @include scale(1.05);
        }
      }

      &__content {
        &--title {
          a {
            color: $theme-color;
          }
        }

        .btn-theme {
          color: $white;

          &:before {
            background-color: $theme-color;
            border: 2px solid $theme-color;
          }

          &:after {
            background-color: #a45798;
          }
        }
      }
    }
  }
}
</style>
