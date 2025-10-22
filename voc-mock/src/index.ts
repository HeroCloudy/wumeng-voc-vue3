import Koa, { type Context } from 'koa'
import KoaRouter from 'koa-router'
import { allReqList } from './mock'
import { ReqConfig } from './types'

const app = new Koa()
const router = new KoaRouter({
  prefix: '/api',
})

/**
 * 模拟真正网络请求，延时响应
 * @param exec 执行的函数
 * @param ctx koa 上下文
 */
const delayResponse = (exec: (ctx: Context) => any, ctx: Context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = exec(ctx)
      resolve(result)
    }, Math.random() * 2000)
  })
}

router.get('/', async (ctx: Context) => {
  ctx.body = 'Voc mock server running'
})

allReqList.forEach((item: ReqConfig) => {
  const { url, method, fn } = item
  router[method](url, async (ctx: Context) => {
    ctx.body = await delayResponse(fn, ctx)
  })
})

app.use(router.routes())
app.listen(8000)
console.log('voc mock server run on 8000...')
