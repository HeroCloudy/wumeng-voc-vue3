//全局基础URL

// const BASEURL: string = process.env.API_URL! //全局后台服务器请求地址

export interface Result {
  code: number
  msg?: string
  data?: any
}

//定义ts变量类型接口
interface HttpParms {
  baseURL?: string //请求的基本URL，即后台服务器地址，（若服务器请求地址只有一个，可不填）
  url: string //请求api接口地址
  method?: any //请求方法
  query?: any //添加查询搜索参数到URL
  body?: any //请求体
}

/**
 * 网络请求方法
 * @param obj 请求参数
 * @returns 响应结果
 */
export const req = (obj: HttpParms) => {
  const config = useRuntimeConfig()
  return new Promise<void>((resolve, reject) => {
    const router = useRouter()

    $fetch(config.public.API_URL + obj.url, {
      method: obj.method ?? 'GET',
      query: obj?.query ?? null,
      body: obj?.body ?? null,
      onRequestError({ error }) {
        // 处理请求错误
        console.log('服务器链接失败!')
        reject(error)
      },
      onResponse({ response }) {
        // 处理响应数据
        const { _data = {} } = response
        const { code, msg, data } = _data as Result
        if (code !== 200) {
          ElMessage.error(`${msg}(${code})`)
          return reject(_data)
        }
        resolve(data)
      },
      onResponseError({ response }) {
        // 处理响应错误
        const { status } = response
        if (status === 401) {
          router.replace('/login')
        }
      },
    })
  })
}
