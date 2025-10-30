export class SysService {
  getDictItemMap(dictCodeList: string[]) {
    return req({ url: '/dict/item-list', method: 'post', body: { dictCodeList } })
  }
}

export const sysService = new SysService()
