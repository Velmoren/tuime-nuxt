import { defineStore } from 'pinia'
import type { NavItem, Action } from './header.types'

export const useHeaderStore = defineStore('widget/header', () => {
  const isMobileMenuOpen = ref(false)

  const menuConfig = ref<NavItem[]>([
    {
      title: 'Home',
      submenu: [
        { title: 'Home One', to: '/' },
        { title: 'Home Two', to: '/home-two' }
      ]
    },
    { title: 'About', to: '/about' },
    {
      title: 'Shop',
      columns: [
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
    },
    {
      title: 'Blog',
      columns: [
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
    },
    {
      title: 'Pages',
      submenu: [
        { title: 'Account', to: '/account' },
        { title: 'Login', to: '/account/login' },
        { title: 'Register', to: '/account/register' },
        { title: 'Page Not Found', to: '/404' }
      ]
    },
    { title: 'Contact', to: '/contacts' }
  ])

  const actionsConfig = ref<Action[]>([
    {
      name: 'search',
      icon: 'pe-7s-search',
      offcanvas: 'AsideOffcanvasSearch',
      label: 'Открыть поиск'
    },
    {
      name: 'account',
      icon: 'pe-7s-users',
      to: '/account-login',
      label: 'Войти в аккаунт'
    },
    {
      name: 'wishlist',
      icon: 'pe-7s-like',
      to: '/shop-wishlist',
      label: 'Войти в избранное'
    },
    {
      name: 'cart',
      icon: 'pe-7s-shopbag',
      count: 2,
      offcanvas: 'AsideOffcanvasCart',
      label: 'Войти в корзину'
    },
    {
      name: 'menu',
      icon: 'pe-7s-menu',
      offcanvas: 'AsideOffcanvasMenu',
      label: 'Войти в меню'
    }
  ])

  return {
    menuConfig,
    actionsConfig,
    isMobileMenuOpen
  }
})
