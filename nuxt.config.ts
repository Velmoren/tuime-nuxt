// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/a11y', '@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', 'vue3-carousel-nuxt'],

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
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Если предупреждение связано с каскадом стилей или свойством color-adjust, полностью игнорируем его
          if (warning.message?.includes('color-adjust') || warning.code === 'CSS_LANG_MIX') {
            return
          }
          // Все критически важные ошибки и предупреждения приложения выводим как обычно
          warn(warning)
        }
      }
    }
  }
})