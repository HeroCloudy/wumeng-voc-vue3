/**
 * 通用请求响应结构
 */
export interface Result {
  code: number
  msg?: string
  data?: any
}

export type ReqType = 'get' | 'post' | 'put' | 'patch' | 'delete'

/**
 * Mock请求结构
 */
export interface ReqConfig {
  url: string
  method: ReqType
  fn: () => Result
}

export type ComponentType =
  | 'info'
  | 'title'
  | 'paragraph'
  | 'input'
  | 'textarea'
  | 'radio'
  | 'checkbox'

/**
 * 组件数据结构
 */
export interface ComponentItem {
  id?: string
  frontId: string
  type: ComponentType
  title: string
  isHidden: boolean
  isLocked: boolean
  props: Record<string, any>
}
