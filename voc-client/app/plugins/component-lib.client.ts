import WmVocUi from '@wumeng-voc-vue3/voc-components'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WmVocUi)
})
