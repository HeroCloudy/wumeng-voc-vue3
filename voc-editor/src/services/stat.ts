import instance from '@/utils/http.ts'

export class StatService {
  getStatList(surveyId: string, opt: { page: number; pageSize: number }) {
    return instance.get(`/api/stat/${surveyId}`, { params: opt })
  }

  getComponentStat(surveyId: string, frontId: string) {
    return instance.get(`/api/stat/${surveyId}/${frontId}`)
  }
}

export const statService = new StatService()
