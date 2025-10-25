export const useCoreStore = defineStore(
  'coreStore',
  () => {
    const token = ref('')
    const userInfo = ref<Record<string, any>>()

    const initData = (t: string, info: Record<string, any>) => {
      token.value = t
      userInfo.value = info
    }

    return { token, userInfo, initData }
  },
  {
    persist: true,
  },
)
