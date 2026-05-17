<script setup lang="ts">
import { Button } from '~/shared/ui'
</script>

<template>
  <section class="bg-theme-color position-relative z-index-1">
    <div class="container-fluid p--0">
      <div class="row divider">
        <div class="col-lg-3 col-xl-4">
          <div class="divider-thumb divider-thumb-left">
            <NuxtImg
              src="/images/photos/divider-1.png"
              width="351"
              height="435"
              alt="Image-HasTech"
            />
            <div class="shape-circle"></div>
          </div>
        </div>

        <div class="col-lg-6 col-xl-4">
          <div class="divider-content text-center">
            <p class="sub-title">Save 50% Off</p>
            <p class="title">Best Deal Offer</p>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore etlop.
            </p>

            <Button to="/catalog">Shop Now</Button>

            <NuxtImg
              src="/images/photos/1.png"
              width="316"
              height="302"
              class="shape-object"
              alt="Image-HasTech"
            />
          </div>
        </div>

        <div class="col-lg-3 col-xl-4">
          <div class="divider-thumb divider-thumb-right">
            <NuxtImg
              src="/images/photos/divider-2.png"
              width="488"
              height="447"
              alt="Image-HasTech"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.divider {
  .divider-thumb {
    display: inline-block;
    height: 100%;
    position: relative;
    @include select-none(none);
    width: 100%;
    z-index: 1;

    @media #{$md-device} {
      display: none;
    }

    img {
      pointer-events: none;
      position: absolute;
      width: auto;
      @media #{$xl-device} {
        width: 240px;
      }
    }

    &-left {
      img {
        bottom: 19px;
        right: calc(50% - 163px);

        @media #{$xl-device} {
          right: calc(50% - 92px);
        }
      }
    }
    &-right {
      img {
        bottom: 32px;
        right: 36px;
      }
    }

    .shape-circle {
      background-color: $theme-color2;
      clip-path: polygon(0 0, 78% 0, 100% 100%, 0 100%);
      -webkit-clip-path: polygon(0 0, 78% 0, 100% 100%, 0 100%);
      height: 100%;
      position: absolute;
      width: calc(100% + 41px);
      z-index: -1;

      @media #{$md-device} {
        display: none;
      }
    }
  }

  .divider-content {
    max-width: 454px;
    margin: 0 auto;
    position: relative;
    padding: 120px 0 126px;
    z-index: 1;

    @media #{$xl-device} {
      padding: 80px 0 86px;
    }

    .sub-title {
      color: $theme-color2;
      font-size: 18px;
      font-weight: $font-weight-semi-bold;
      letter-spacing: 3px;
      line-height: 1;
      margin-bottom: 13px;
      text-transform: uppercase;

      @media #{$lg-device} {
        font-size: 15px;
        margin-bottom: 8px;
      }
    }

    .title {
      color: $white;
      font-size: 48px;

      @media #{$xl-device} {
        font-size: 42px;
      }

      @media #{$lg-device} {
        font-size: 38px;
        margin-bottom: 4px;
      }

      @media #{$xs-device} {
        font-size: 34px;
      }
    }

    .desc {
      color: $white;
      font-size: 18px;
      line-height: 1.56;
      margin-bottom: 45px;

      @media #{$xl-device} {
        margin-bottom: 24px;
      }

      @media #{$lg-device} {
        font-size: 15px;
      }
    }

    .shape-object {
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      @include translate(-50%, -50%);

      @media #{$lg-device} {
        width: 240px;
      }
    }
  }
}
</style>
