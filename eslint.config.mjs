// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  rules: {
  // Разрешаем кастомные переносы в шаблоне и настраиваем переносы атрибутов
  'vue/html-closing-bracket-newline': ['error', {
    'singleline': 'never',
    'multiline': 'always'
  }],
  'vue/max-attributes-per-line': ['error', {
    'singleline': 4, // До 4-х коротких атрибутов в одну строку — без переноса
    'multiline': 1   // Если атрибутов много, переносим по одному на строку
  }]
}
)
