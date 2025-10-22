import { ReqConfig, ReqType, Result } from '../types'
import type { Context } from 'koa'

export function ok(data?: any): Result {
  return {
    code: 200,
    msg: 'success',
    data,
  }
}

/**
 * 构建请求对象
 */
export function buildItem(url: string, method: ReqType, fn: (ctx?: Context) => Result): ReqConfig {
  return {
    url,
    method,
    fn,
  }
}
