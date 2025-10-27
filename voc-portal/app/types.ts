export type PageResult<T> = {
  list: T[]
  total: number
}

export interface Survey {
  id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createTime: string
  isDeleted: boolean
}
