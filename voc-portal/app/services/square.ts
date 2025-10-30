export class SquareService {
  getPage(params: Record<string, any> = {}) {
    return req({ url: '/square/page', method: 'get', query: params })
  }
}

export const squareService = new SquareService()
