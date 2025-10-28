import { req } from '~/composables/http'

export class SurveyService {
  getDetail(id: string): any {
    return req({ url: `/voc/${id}`, method: 'GET' })
  }

  submit(params: Record<string, any>) {
    return req({ url: `/voc/submit`, method: 'POST', body: params })
  }
}

export const surveyService = new SurveyService()
