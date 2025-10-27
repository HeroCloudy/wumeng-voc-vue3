import axios from 'axios'
import { useCoreStore } from '@/stores/modules/core.ts'
import { ElMessage } from 'element-plus'

export type Result = {
  code: number
  msg?: string
  data?: any
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    const coreStore = useCoreStore()
    const token = coreStore.token
    const headers = config.headers || {}
    if (token) {
      headers.access_token = token
      config.headers = headers
    }
    return config
  },
  (error) => Promise.reject(error),
)

instance.interceptors.response.use((resp) => {
  const resData = (resp.data || {}) as Result
  const { code, data = {}, msg = '' } = resData
  if (code !== 200) {
    if (msg) {
      ElMessage.error(`${msg}(${code})`)
    }
    throw new Error(msg || '')
  }
  return data as any
})

export default instance
