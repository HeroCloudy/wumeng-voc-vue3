import WujieVue from 'wujie-vue3'

const { setupApp, preloadApp } = WujieVue

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WujieVue)
  setupApp({ name: 'voc-editor', url: 'http://localhost:8081', exec: true, sync: true })
  preloadApp({ name: 'voc-editor' })
  console.log('micro plugin loaded...')
})
