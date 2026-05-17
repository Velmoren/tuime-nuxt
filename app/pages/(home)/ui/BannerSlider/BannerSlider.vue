<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, type CarouselConfig } from 'vue3-carousel'

import Button from '~/shared/ui/Button/Button.vue'

const carouselRef = ref()

const img = useImage()

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const carouselConfig: Partial<CarouselConfig> = {
  // autoplay: 6000,
  wrapAround: true,
  itemsToShow: 1,
  snapAlign: 'center',
}
</script>

<template>
  <Carousel v-bind="carouselConfig" ref="carouselRef">
    <Slide>
      <div
        class="slider-content-area"
        :style="{ backgroundImage: `url(/images/slider/slider-bg.webp)`, width: '100%' }"
      >
        <div class="container">
          <div class="slider-container">
            <div class="row justify-content-between align-items-center">
              <div class="col-sm-6 col-md-6">
                <div class="slider-content">
                  <div class="content">
                    <div class="sub-title-box">
                      <p class="sub-title">Up To 40% Off</p>
                    </div>
                    <div class="title-box">
                      <p class="title">A Greate Meal With Your Pet</p>
                    </div>
                    <div class="btn-box">
                      <Button to="/catalog">Shop Now</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                <div class="slider-thumb mousemove">
                  <div class="thumb">
                    <NuxtImg
                      src="/images/slider/slider-01.png"
                      alt="Image-HasTech"
                      width="585"
                      height="579"
                    />
                    <div class="shape-one"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <Slide>
      <div
        class="slider-content-two-area"
        :style="{ backgroundImage: `url(/images/slider/slider-02.png)`, width: '100%' }"
      >
        <div class="container">
          <div class="slider-container">
            <div class="row justify-content-sm-end justify-content-center align-items-center">
              <div class="col-sm-8 col-md-6">
                <div class="slider-content">
                  <div class="content">
                    <div class="sub-title-box">
                      <p class="sub-title">100% Genue Products</p>
                    </div>
                    <div class="title-box">
                      <p class="title">This Food Best Your Pet</p>
                    </div>
                    <div class="desc-box">
                      <p class="desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo do eiusmod
                        tempor incidid ut labore.
                      </p>
                    </div>
                    <div class="btn-box">
                      <Button to="/catalog">Shop Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-overlay"></div>
      </div>
    </Slide>

    <template #addons>
      <div class="slider-controls">
        <button class="slider-btn slider-btn__prev" @click="prev" aria-label="Стрелка влево">
          <i class="pe-7s-angle-left"></i>
        </button>
        <button class="slider-btn slider-btn__next" @click="next" aria-label="Стредка Вправо">
          <i class="pe-7s-angle-right"></i>
        </button>
      </div>
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
.carousel {
  .carousel__slide {
    &--active {
      .slider-content-area {
        .slider-content {
          .sub-title-box,
          .title-box,
          .btn-box {
            opacity: 1;
            @include translate(0px, 0px);
          }
        }

        .slider-thumb {
          .thumb {
            .shape-one {
              opacity: 1;
              transform: scale(1);
            }

            img {
              opacity: 1;
              @include translate(0px, 0px);
            }
          }
        }
      }

      .slider-content-two-area {
        .slider-content {
          .sub-title-box,
          .title-box,
          .desc-box,
          .btn-box {
            opacity: 1;
            @include translate(0px, 0px);
          }
        }
      }
    }
  }

  .slider-content-area {
    align-items: center;
    background-size: cover;
    background-position: top left 5px;
    display: flex;
    height: 796px;
    position: relative;

    @media #{$lg-device} {
      height: 600px;
    }

    @media #{$md-device} {
      height: 530px;
    }

    @media #{$sm-device} {
      height: 470px;
    }

    @media #{$xs-device} {
      height: 100%;
    }

    .container {
      padding-bottom: 0;
      padding-top: 0;
    }

    .slider-content {
      margin-right: -7px;
      margin-top: 79px;

      @media #{$xs-device} {
        margin-right: 0;
        margin-top: 150px;
        margin-bottom: 80px;
        text-align: center;
      }

      .sub-title-box,
      .title-box,
      .btn-box {
        opacity: 0;
        @include transition(all 0.6s ease-out);
      }

      .sub-title-box {
        @include translate(0px, 35px);
        transition-delay: 0.4s;
      }

      .title-box {
        @include translate(0px, 30px);
        transition-delay: 1.2s;
      }

      .btn-box {
        @include translate(0px, 25px);
        transition-delay: 1.9s;
      }

      .sub-title {
        color: $white;
        font-size: 16px;
        font-weight: $font-weight-normal;
        letter-spacing: 3.2px;
        margin-bottom: 21px;
        padding-left: 66px;
        position: relative;
        text-transform: uppercase;

        @media #{$lg-device} {
          font-size: 14px;
          margin-bottom: 14px;
          padding-left: 38px;
        }

        @media #{$sm-device} {
          font-size: 13px;
        }

        @media #{$xs-device} {
          display: inline-block;
        }

        &:before {
          background-color: $theme-color2;
          content: '';
          height: 3px;
          left: 0;
          position: absolute;
          top: calc(50% - 2px);
          width: 50px;

          @media #{$lg-device} {
            width: 30px;
          }
        }
      }

      .title {
        color: $white;
        font-size: 72px;
        font-weight: $font-weight-extra-bold;
        line-height: 1.181;
        margin-bottom: 40px;

        @media #{$xl-device} {
          font-size: 62px;
          margin-bottom: 30px;
        }

        @media #{$lg-device} {
          font-size: 50px;
          margin-bottom: 22px;
        }

        @media #{$md-device} {
          font-size: 40px;
        }

        @media #{$sm-device} {
          font-size: 36px;
        }

        @media #{$xs-device} {
          font-size: 34px;
        }
      }
    }

    .slider-thumb {
      .thumb {
        bottom: 0;
        left: calc(50% + 58px);
        position: absolute;
        z-index: 1;

        @media #{$xs-device} {
          left: 0;
          position: relative;
          text-align: center;
        }

        .shape-one {
          background-color: $theme-color2;
          border-radius: 50%;
          height: 569px;
          left: -42px;
          position: absolute;
          top: -49px;
          transform: scale(0.8);
          opacity: 0;
          width: 569px;
          z-index: -1;
          @include transition(all 0.6s ease-out);
          transition-delay: 0.7s;

          @media #{$xl-device} {
            height: 510px;
            left: -52px;
            top: -68px;
            width: 510px;
          }

          @media #{$lg-device} {
            height: 300px;
            left: -12px;
            top: -36px;
            width: 300px;
          }

          @media #{$md-device} {
            height: 280px;
            left: -22px;
            top: -26px;
            width: 280px;
          }

          @media #{$sm-device} {
            height: 230px;
            left: -22px;
            top: -26px;
            width: 230px;
          }

          @media #{$xs-device} {
            display: none;
          }
        }
      }

      img {
        opacity: 0;
        @include translate(100px, 0px);
        @include transition(transform 0.8s ease-out);

        @media #{$lg-device} {
          width: 400px;
        }

        @media #{$md-device} {
          width: 330px;
        }

        @media #{$sm-device} {
          width: 290px;
        }
      }
    }
  }

  .slider-content-two-area {
    align-items: center;
    background-size: cover;
    background-position: center center;
    display: flex;
    height: 796px;
    position: relative;
    z-index: -1;

    @media #{$lg-device} {
      height: 600px;
    }

    @media #{$md-device} {
      height: 530px;
    }

    @media #{$sm-device} {
      height: 470px;
    }

    @media #{$xs-device} {
      height: 100%;
    }

    .container {
      padding-bottom: 0;
      padding-top: 0;
    }

    .slider-content {
      margin-top: 79px;
      margin-left: 70px;
      margin-right: 36px;

      @media #{$md-device} {
        margin-right: 0;
        margin-left: 0;
        margin-top: 70px;
      }

      @media #{$sm-device} {
        margin-top: 80px;
      }

      @media #{$xs-device} {
        margin-top: 130px;
        margin-bottom: 60px;
        text-align: center;
      }

      .sub-title-box,
      .title-box,
      .desc-box,
      .btn-box {
        opacity: 0;
        @include transition(all 0.6s ease-out);
      }

      .sub-title-box {
        @include translate(0px, 35px);
        transition-delay: 0.4s;
      }

      .title-box {
        @include translate(0px, 30px);
        transition-delay: 1.2s;
      }

      .desc-box {
        @include translate(0px, 25px);
        transition-delay: 1.9s;
      }

      .btn-box {
        @include translate(0px, 20px);
        transition-delay: 2.5s;
      }

      .sub-title {
        color: $theme-color2;
        font-size: 18px;
        font-weight: $font-weight-normal;
        letter-spacing: 3.2px;
        margin-bottom: 21px;
        padding-left: 0;
        position: relative;
        text-transform: uppercase;

        @media #{$lg-device} {
          font-size: 14px;
          margin-bottom: 14px;
        }

        @media #{$sm-device} {
          font-size: 13px;
        }

        @media #{$xs-device} {
          display: inline-block;
        }
      }

      .title {
        color: $white;
        font-size: 72px;
        font-weight: $font-weight-extra-bold;
        line-height: 1.181;
        margin-bottom: 23px;

        @media #{$xl-device} {
          font-size: 62px;
          margin-bottom: 30px;
        }

        @media #{$lg-device} {
          font-size: 50px;
          margin-bottom: 12px;
        }

        @media #{$md-device} {
          font-size: 40px;
        }

        @media #{$sm-device} {
          font-size: 36px;
        }

        @media #{$xs-device} {
          font-size: 34px;
        }
      }

      .desc {
        color: $white;
        font-size: 16px;
        line-height: 1.9375;
        margin-bottom: 50px;

        @media #{$lg-device} {
          font-size: 15px;
          margin-bottom: 24px;
        }

        @media #{$md-device} {
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }

    .home-overlay {
      background-color: #000;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.4;

      @media #{$md-device} {
        opacity: 0.6;
      }
    }
  }

  .slider-controls {
    bottom: 30px;
    display: flex;
    position: absolute;
    right: 30px;
    opacity: 0;
    z-index: 1;
    @include transition(all 0.3s ease-out);

    @media #{$lg-device} {
      right: 10px;
      bottom: 10px;
    }
  }

  .slider-btn {
    &__prev,
    &__next {
      border: 1px solid #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 30px;
      color: #fff;
      text-align: center;
      line-height: 46px;
      background-color: transparent;

      @media #{$lg-device} {
        width: 30px;
        height: 30px;
        font-size: 22px;
        line-height: 32px;
      }
    }

    &__prev {
      margin-right: 0;
      @include transition(all 0.3s ease-out);
    }
  }

  &:hover {
    .slider-controls {
      opacity: 1;

      .slider-btn {
        &__prev {
          margin-right: 20px;

          @media #{$lg-device} {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
