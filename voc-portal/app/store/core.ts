import { authService } from '~/services/auth'

export const useCoreStore = defineStore(
  'coreStore',
  () => {
    const token = ref('')
    const userInfo = ref<Record<string, any>>()

    const setToken = async (value: string) => {
      token.value = value

      if (value) {
        const resp = await authService.getUserInfo()
        userInfo.value = resp || undefined
      } else {
        userInfo.value = undefined
      }
    }

    const logout = () => {
      token.value = ''
      userInfo.value = undefined
    }

    return { token, setToken, userInfo, logout }
  },
  {
    persist: true,
  },
)
