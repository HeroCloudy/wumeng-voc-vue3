import WujieVue from 'wujie-vue3'

const { setupApp, preloadApp } = WujieVue

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WujieVue)
  const config = useRuntimeConfig()
  setupApp({ name: 'voc-editor', url: config.public.editorUrl, exec: true, sync: true })
  preloadApp({ name: 'voc-editor' })
  console.log('micro plugin loaded...')
})
