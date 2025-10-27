// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@unocss/nuxt', '@element-plus/nuxt'],
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/scss/index.scss'],
  icon: {
    localApiEndpoint: '/nuxt-icon',
  },
  ssr: true,
  devServer: {
    port: 9090,
  },
  nitro: {
    // 代理，前后端分离有用
    devProxy: {
      '/voc-api': {
        target: 'http://localhost:9001',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
})