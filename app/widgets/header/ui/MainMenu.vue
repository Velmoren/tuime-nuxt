<template>
  <ul class="main-menu nav">
    <!-- Home (Обычное подменю) -->
    <MenuItem title="Home" :submenu="homeSubmenu" />

    <!-- About (Простая ссылка) -->
    <MenuItem title="About" to="/about" />

    <!-- Shop (Мега меню на 3 колонки) -->
    <MegaMenu title="Shop" :columns="shopColumns" :columnsCount="3" />

    <!-- Blog (Мега меню на 2 колонки) -->
    <MegaMenu title="Blog" :columns="blogColumns" />

    <!-- Pages (Обычное подменю) -->
    <MenuItem title="Pages" :submenu="pagesSubmenu" />

    <!-- Contact (Простая ссылка) -->
    <MenuItem title="Contact" to="/contact" />
  </ul>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import MegaMenu from './MegaMenu.vue'

// Данные для обычных меню
const homeSubmenu = [
  { title: 'Home One', to: '/' },
  { title: 'Home Two', to: '/home-two' }
]

const pagesSubmenu = [
  { title: 'Account', to: '/account' },
  { title: 'Login', to: '/account/login' },
  { title: 'Register', to: '/account/register' },
  { title: 'Page Not Found', to: '/404' }
]

// Данные для Мега-меню Shop
const shopColumns = [
  {
    title: 'Shop Layout',
    links: [
      { title: 'Shop 3 Column', to: '/shop/3-columns' },
      { title: 'Shop 4 Column', to: '/shop/4-columns' },
      { title: 'Shop Left Sidebar', to: '/shop/left-sidebar' },
      { title: 'Shop Right Sidebar', to: '/shop' }
    ]
  },
  {
    title: 'Single Product',
    links: [
      { title: 'Single Product Normal', to: '/product/normal' },
      { title: 'Single Product Variable', to: '/product/variable' },
      { title: 'Single Product Group', to: '/product/group' },
      { title: 'Single Product Affiliate', to: '/product/affiliate' }
    ]
  },
  {
    title: 'Others Pages',
    links: [
      { title: 'Shopping Cart', to: '/cart' },
      { title: 'Checkout', to: '/checkout' },
      { title: 'Wishlist', to: '/wishlist' },
      { title: 'Compare', to: '/compare' }
    ]
  }
]

// Данные для Мега-меню Blog
const blogColumns = [
  {
    title: 'Blog Layout',
    links: [
      { title: 'Blog Grid', to: '/blog/grid' },
      { title: 'Blog Left Sidebar', to: '/blog/left-sidebar' },
      { title: 'Blog Right Sidebar', to: '/blog/right-sidebar' }
    ]
  },
  {
    title: 'Single Blog',
    links: [
      { title: 'Blog Details', to: '/blog/details' },
      { title: 'Blog Details Left', to: '/blog/details-left' },
      { title: 'Blog Details Right', to: '/blog/details-right' }
    ]
  }
]
</script>

<style lang="scss">
.main-menu {
  & > li {
    margin-right: 14px;
    padding: 3px 0;

    &:last-child {
      margin-right: 0;
    }

    & > a {
      color: $black;
      display: block;
      font-size: 14px;
      font-weight: $font-weight-medium;
      line-height: 30px;
      text-transform: uppercase;
      padding: 7px 25px;
      position: relative;
    }

    &:hover, &.active {
      & > a {
        color: $theme-color;
        &:before {
          color: $theme-color;
        }
      }
    }
  }
}

// Sub Menu Or Dropdown Menu
.has-submenu {
  padding-right: 10px;
  position: relative;

  // Menu Item Arrows
  & > a {
    position: relative;

    &:before {
      content: '\f063';
      color: $theme-color2;
      display: none;
      font-size: 12px;
      font-family: "FontAwesome";
      position: absolute;
      right: -16px;
      top: 0;
      line-height: 51px;
    }
  }

  // After Hover Sub Menu
  &:hover {
    & > .submenu-nav {
      margin-top: 0;
      opacity: 1;
      visibility: visible;
      pointer-events: visible;
    }
  }

  // Sub Menu Style
  .submenu-nav {
    background-color: $black-111;
    border: none;
    border-bottom: none;
    padding: 15px 0 15px;
    position: absolute;
    left: -15px;
    top: 100%;
    opacity: 0;
    min-width: 230px;
    pointer-events: none;
    margin-top: 30px;
    @include transition(all .3s ease-out);
    visibility: hidden;
    z-index: 9999;

    @media #{$lg-device} {
      min-width: 210px;
      left: 0;
    }

    &:before {
      content: "";
      position: absolute;
      height: 56px;
      width: 100%;
      left: 0;
      bottom: 100%;
    }

    & > li {
      padding: 10px 25px;

      a {
        color: #aaa;
        display: block;
        font-weight: $font-weight-normal;
        font-size: 14px;
        letter-spacing: inherit;
        text-transform: capitalize;
        &:hover {
          color: $white;
        }
      }

      &:hover {
        & > a {
          color: $white;
        }
        &:after {
          color: $white !important;
        }
      }

      &.has-submenu {
        position: relative;


        a {
          &:before{
            display: none;
          }
        }

        &:hover {
          & > .submenu-nav {
            transform: none;
            opacity: 1;
            visibility: visible;
            pointer-events: visible;
          }
        }

        // Menu Item Arrows
        &:after {
          content: '\f105';
          color: $body-color;
          font-size: 15px;
          line-height: 1;
          font-family: 'FontAwesome';
          position: absolute;
          right: 20px;
          top: 50%;
          @include translate(0%, -57%);
        }

        // Sub Sub Menu Style
        .submenu-nav {
          left: 100%;
          top: 0;
        }
      }
    }

    // Mega Menu Style
    &-mega {
      display: flex;
      padding: 40px 50px;
      width: 100%;

      @media #{$lg-device} {
        width: 830px;
      }

      .mega-menu-item {
        padding: 0;
        flex-basis: 25%;

        &:last-child {
          border-right: 0;
        }
      }

      &.colunm {
        &-two {
          .mega-menu-item {
            flex-basis: 50%;
          }
        }
      }
    }
  }

  &.full-width {
    position: static;
  }
}

  .main-menu {
    &.nav {
      align-items: center;

      & > li {
        padding: 0;
        margin-right: 0;

        &.active {
          & > a {
            color: $theme-color2;

            &:before {
              color: $theme-color2;
            }
          }
        }

        & > a {
          color: $white;
          font-size: 16px;
          font-family: $font-current-theme1;
          font-weight: $font-weight-normal;
          height: 56px;
          line-height: 56px;
          letter-spacing: 0;
          position: relative;
          margin: 0 13px;
          padding: 0 13px;
          text-transform: uppercase;
          @include transition(all .3s ease-out);
          @media #{$xl-device} {}

          span {
            position: relative;
            &:before {
              content: "";
              @include transition(all .3s ease-out);
            }
          }

          &:hover {
            color: $theme-color2;

            &:after {
              bottom: auto;
              height: 100%;
              top: 0;
            }
          }
        }

        &:first-child {
          margin-left: 0;
          & > a {
            margin-left: 0;
            padding-left: 0;
          }
        }

        &:last-child {
          margin-right: 0;
          & > a {
            margin-right: 0;
            padding-right: 0;
          }
        }

        &:hover {
          span {
            &:before {
              background-color: $white;
              width: 100%;
              left: 0;
              right: auto;
            }
          }
        }
      }

      .has-submenu {
        // Menu Item Arrows
        // After Hover Sub Menu
        &:hover {
          a {
            color: $theme-color2;

            &:before {
              color: $theme-color2;
            }

            &:after {
              bottom: auto;
              height: 100%;
              top: 0;
            }
          }
        }

        // Sub Menu Style
        .submenu-nav {
          box-shadow: 0 1px 24px 0 rgba($black,.09);
          background-color: $white;
          border-radius: 0 0 4px 4px;
          color: $black-555;
          padding: 0 0;
          position: absolute;
          width: 230px;

          &:before {
            display: none;
          }

          & > li {
            border-bottom: 1px solid rgba(173, 181, 189, 0.15);
            padding: 0;
            margin-bottom: 0;

            &:last-child {
              margin-bottom: 0;
              border-bottom: none;
            }

            &.active {
              a {
                color: $theme-color !important;
              }

              &:after {
                color: $theme-color;
              }
            }

            a {
              color: #1d1d1d;
              display: block;
              font-size: 14px;
              padding: 11px 25px 10px;
              position: relative;
              @include transition(all .3s ease-out);

              &:hover {
                color: $theme-color;
                background-color: rgba(173, 181, 189, 0.15);
              }
            }

            &.has-submenu {
              @media #{$xl-device} {
                padding: 0px 28px;
              }

              // Menu Item Arrows
              &:after {
                color: $black-555;
                @media #{$xl-device} {
                  right: auto;
                  @include transform(rotate(-180deg));
                  top: calc(50% + -8px);
                  left: 20px;
                }
              }

              &.active {
                &:after {
                  color: $theme-color;
                }
              }

              // Sub Sub Menu Style
              .submenu-nav {
                border-radius: 0 4px 4px 4px;
                box-shadow: 0 0 3.76px 0.24px rgb(0 0 0 / 5%);
                left: 100%;
                right: auto;
                top: 7px;
                @include transition(all .4s ease-out);
                @media #{$xl-device} {
                  left: auto;
                  right: 100%;
                }

                &:before {
                  content: "";
                  display: block;
                  height: 30px;
                  position: absolute;
                }

                & > li {
                  & > a {
                    color: $black-555 !important;

                    &:hover {
                      color: $theme-color !important;
                    }
                  }

                  &.active {
                    & > a {
                      color: $theme-color !important;
                    }
                  }
                }
              }

              &:hover {
                a {
                  color: $theme-color;
                }

                &:after {
                  color: $theme-color !important;
                }
              }
            }
          }

          // Mega Menu Style
          &-mega {
            display: flex;
            left: 50%;
            min-width: 100%;
            padding: 0;
            @include translate(-50%, 0%);
            width: 500px;

            &.column-3 {
              width: 720px;
            }

            .mega-menu-item {
              border-right: 1px solid rgba(173,181,189,0.15);
              border-bottom: none;
              flex-basis: 50%;
              margin: 0;
              padding: 0 0;

              &:last-child {
                border-right: none;
              }

              ul {
                & > li {
                  border-bottom: 1px solid rgba(173,181,189,0.15);
                  &.active {
                    & > a {
                      color: $theme-color !important;
                    }
                  }
                  & > a {
                    color: #1d1d1d !important;
                    font-size: 13px;
                    padding: 11px 35px 10px;

                    &:hover {
                      background-color: rgba(173,181,189,0.15);
                      color: $theme-color !important;
                      text-decoration: none;
                    }
                  }
                  &:first-child {
                    border-top: 1px solid rgba(173,181,189,0.15);
                  }
                  &:last-child {
                    border-bottom: none;
                  }
                }
              }

              &:hover {
                .mega-title {
                  color: $theme-color;
                  text-decoration: none;
                }
              }
            }

            .mega-title {
              color: #2d2d2d;
              font-size: 14px;
              font-weight: $font-weight-semi-bold;
              font-family: $font-current-theme1;
              margin: 14px 0 0 0;
              padding: 11px 35px;
              text-decoration: none;
              text-transform: uppercase;
              &:hover {
                background-color: transparent;
                color: #2d2d2d;
                cursor: auto;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
</style>
