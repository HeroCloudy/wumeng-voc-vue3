import { surveyService } from '~/services/survey'

export function useCopySurvey(id: string) {
  const router = useRouter()

  const { loading: copyLoading, run: onCopy } = useRequest(() => surveyService.copy(id), {
    manual: true,
    onSuccess(v: any) {
      router.push(`/voc-detail/edit/${v}`)
    },
  })

  return {
    copyLoading,
    onCopy,
  }
}
