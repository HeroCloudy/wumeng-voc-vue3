export class SurveyService {
  getList(params: Record<string, any> = {}) {
    return req({ url: '/survey', method: 'get', query: params })
  }

  create() {
    return req({ url: '/survey', method: 'post' })
  }

  update(id: string, params: Record<string, any>) {
    return req({ url: `/survey/${id}`, method: 'put', body: params })
  }

  remove(id: string) {
    return req({ url: `/survey/${id}`, method: 'delete' })
  }

  batchRemove(ids: string[]) {
    return req({ url: `/survey/batch`, method: 'delete', body: { ids } })
  }

  recovery(id: string) {
    return req({ url: `/survey/recovery/${id}`, method: 'put' })
  }
}

export const surveyService = new SurveyService()
