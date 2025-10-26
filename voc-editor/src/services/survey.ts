import instance from '@/utils/http.ts'

export class SurveyService {
  getSurvey(id: string) {
    return instance.get(`/api/survey/${id}`)
  }

  updateSurvey(id: string, data: Record<string, any>) {
    return instance.patch(`/api/survey/${id}`, data)
  }
}

export const surveyService = new SurveyService()

// export const createSurveyService = () => instance.post(`/api/survey`, {})
//
// export const getSurveyListService = (params: Record<string, any> = {}) =>
//   instance.get(`/api/survey`, { params })
//
// export const copySurveyService = (id: string) => instance.post(`/api/survey/duplicate/${id}`, {})
//
// export const deleteSurveyService = (ids: string[]) =>
//   instance.delete(`/api/survey`, {
//     data: { id: ids },
//   })
