import { req } from '~/composables/http'

export class SurveyService {
  getDetail(id: string): any {
    return req({ url: `/voc/${id}`, method: 'GET' })
  }
}

export const surveyService = new SurveyService()
