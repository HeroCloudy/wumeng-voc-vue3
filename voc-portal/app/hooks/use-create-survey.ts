import { surveyService } from '~/services/survey'

export function useCreateSurvey() {
  const router = useRouter()

  const { loading, run: onCreate } = useRequest(surveyService.create, {
    manual: true,
    onSuccess: (data: string) => {
      console.log('data', data)
      router.push(`/voc-detail/edit/${data}`)
    },
  })

  return {
    loading,
    onCreate,
  }
}
