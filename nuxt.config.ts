// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/a11y', '@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', 'vue3-carousel-nuxt'],

  css: [],

  app: {
    head: {
      link: [
        // 1. Предзапрос к доменам Google для ускорения загрузки
        {
          rel: 'preconnect',
          href: 'https://googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://gstatic.com',
          crossorigin: '', // Важно: пустая строка генерирует чистый атрибут crossorigin
        },
        // 2. Сама ссылка на семейство шрифтов
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600&display=swap',
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import'],
          additionalData: `
            @use "~/shared/assets/styles/common/_variables.scss" as *;
            @use "~/shared/assets/styles/common/_mixins.scss" as *;
          `,
        },
      },
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
        },
      },
    },
  },
})
