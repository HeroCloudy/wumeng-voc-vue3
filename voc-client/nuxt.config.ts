// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@unocss/nuxt', '@element-plus/nuxt'],
  css: [
    '@wumeng-voc-vue3/voc-components/dist/voc-components.css',
    '@unocss/reset/tailwind-compat.css',
    '~/assets/scss/index.scss',
  ],
  icon: {
    localApiEndpoint: '/nuxt-icon',
  },
  ssr: true,
  devServer: {
    port: 9090,
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
})
