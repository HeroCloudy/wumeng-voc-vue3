// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
  ],
  css: ['element-plus/dist/index.css', '~/assets/scss/index.scss'],
  icon: {
    localApiEndpoint: '/nuxt-icon',
  },
  devServer: {
    port: 8080,
  },
})
