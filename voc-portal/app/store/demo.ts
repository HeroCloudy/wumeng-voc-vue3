export const useDemoStore = defineStore(
  'demoStore',
  () => {
    const count = ref<number>()

    const increment = () => {
      if (!count.value) {
        count.value = 1
      } else {
        count.value++
      }
    }

    return {
      count,
      increment,
    }
  },
  {
    persist: {
      // storage: piniaPluginPersistedstate.localStorage(),
    },
  },
)
