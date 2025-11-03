import { useRequest } from '@/hooks/use-request.ts'
import { useEditorStore } from '@/stores/modules/editor.ts'
import { surveyService } from '@/services/survey.ts'
import { useVocStore } from '@/stores/modules/voc.ts'

export function useLoadSurveyData() {
  const router = useRouter()
  const route = useRoute()

  const editorStore = useEditorStore()
  const vocStore = useVocStore()

  const id = (route.params as any)?.id ?? ''
  if (!id) {
    router.back()
  }
  const { loading, data, error } = useRequest(() => surveyService.getSurvey(id), {
    onSuccess: (data: any) => {
      if (data) {
        const {
          componentList = [],
          title = '',
          description = '',
          js = '',
          css = '',
          isPublished = false,
        } = data
        editorStore.setComponentList(componentList)
        vocStore.setPageInfo({ title, description, js, css, isPublished })
      }
    },
  })

  return {
    data,
    loading,
    error,
  }
}
