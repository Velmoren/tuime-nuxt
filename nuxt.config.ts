// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/image'
  ],

  css: [],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import'],
          additionalData: `
            @use "~/shared/assets/styles/_variables.scss" as *;
            @use "~/shared/assets/styles/_mixins.scss" as *;
          `
        }
      }
    }
  }
})