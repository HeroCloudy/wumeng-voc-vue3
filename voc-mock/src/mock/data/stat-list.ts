import Mock from 'mockjs'
import { buildComponentList } from './component-list'

const Random = Mock.Random

export default function buildStatList(len = 1000) {
  const componentList = buildComponentList()

  const res = []

  for (let i = 0; i < len; i++) {
    // 一个用户的答卷
    const stat: Record<string, any> = {
      id: Random.id(),
    }

    // 增加各个组件的 id value
    componentList.forEach((c) => {
      const { frontId, type, props } = c
      switch (type) {
        case 'input':
          stat[frontId] = Random.ctitle()
          break
        case 'textarea':
          stat[frontId] = Random.ctitle()
          break
        case 'radio':
          stat[frontId] = props.options[0]
          break
        case 'checkbox':
          stat[frontId] = `${props.options[0]},${props.options[1]}`
          break
      }
    })
    res.push(stat)
  }

  return res
}
