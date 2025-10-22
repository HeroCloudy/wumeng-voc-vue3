import { ReqConfig } from '../types'
import { buildItem, ok } from './common'
import buildStatList from './data/stat-list'

export const statReqList: ReqConfig[] = [
  // 答卷列表
  buildItem('/stat/:surveyId', 'get', () =>
    ok({
      total: 100, // 分页
      list: buildStatList(),
    }),
  ),
  // 获取单个组件的统计数据汇总
  buildItem('/stat/:surveyId/:componentId', 'get', () =>
    ok({
      stat: [
        { name: '选项1', count: 20 },
        { name: '选项2', count: 10 },
        { name: '选项3', count: 25 },
      ],
    }),
  ),
]
