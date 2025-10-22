import Mock from 'mockjs'
import { buildItem, ok } from './common'
import type { Context } from 'koa'
import buildSurveyList from './data/survey-list'
import { buildComponentList } from './data/component-list'

const Random = Mock.Random

export const surveyReqList = [
  // 创建问卷
  buildItem('/survey', 'post', () => ok({ id: Random.id() })),
  // 查询问卷列表
  buildItem('/survey', 'get', (ctx?: Context) => {
    const query = ctx?.query || {}
    const isDeleted = query.isDeleted === 'true'
    const isStar = query.isStar === 'true'
    const sizeStr = (query.size || '10') as string
    const size = parseInt(sizeStr)
    return ok({
      list: buildSurveyList({ size, isStar, isDeleted }),
      total: size + Math.round(Math.random() * 20),
    })
  }),
  // 获取单个问卷信息
  buildItem('/survey/:id', 'get', () =>
    ok({
      id: Random.id(),
      title: Random.ctitle(),
      desc: '问卷描述',
      js: '',
      css: '',
      isDeleted: false,
      isPublished: true,
      componentList: buildComponentList(),
    }),
  ),
  // 更新问卷
  buildItem('/survey/:id', 'patch', () => ok()),
  // 复制问卷
  buildItem('/survey/copy/:id', 'post', () => ok({ id: Random.id() })),
  // 批量彻底删除
  buildItem('/survey', 'delete', () => ok()),
]
