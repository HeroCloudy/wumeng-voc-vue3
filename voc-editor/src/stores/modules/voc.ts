export interface SurveyInfo {
  title: string
  description?: string
  js?: string
  css?: string
  isPublished?: boolean
}

export const useVocStore = defineStore('vocStore', () => {
  const pageInfo = ref<SurveyInfo>()

  const setPageInfo = (info: SurveyInfo) => {
    pageInfo.value = info
  }

  return {
    pageInfo,
    setPageInfo,
  }
})
