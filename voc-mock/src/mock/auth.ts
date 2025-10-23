import Mock from 'mockjs'
import { buildItem, ok } from './common'
const Random = Mock.Random

export const authReqList = [
  // 获取用户信息
  buildItem('/auth/profile', 'get', () =>
    ok({
      username: Random.title(),
      nickname: Random.cname(),
    }),
  ),
  // 注册
  buildItem('/auth/register', 'post', () => ok()),
  // 登录
  buildItem('/auth/login', 'post', () => ok({ token: Random.word(32) })),
]
