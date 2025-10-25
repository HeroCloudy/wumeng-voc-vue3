import WujieVue from 'wujie-vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WujieVue)
  console.log('micro plugin loaded...')
})
