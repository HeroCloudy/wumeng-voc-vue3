import instance from '@/utils/http.ts'

export class SurveyService {
  getSurvey(id: string) {
    return instance.get(`/api/survey/${id}`)
  }

  updateSurveyAll(id: string, data: Record<string, any>) {
    return instance.put(`/api/survey/update-all/${id}`, data)
  }
}

export const surveyService = new SurveyService()
