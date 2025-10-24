export class SurveyService {
  getList(params: Record<string, any> = {}) {
    return req({ url: '/survey', method: 'get', query: params })
  }
}

export const surveyService = new SurveyService()
