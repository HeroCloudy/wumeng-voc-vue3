export const useDictStore = defineStore(
  'dictStore',
  () => {
    const dictMap = ref<Record<string, Record<string, any>[]>>({})

    const getList = (dictCode: string) => {
      return dictMap.value[dictCode] ?? []
    }

    const setList = (dictCode: string, list: Record<string, any>[]) => {
      dictMap.value[dictCode] = list
    }

    const setMap = (map: Record<string, Record<string, any>[]>) => {
      if (!map || !Object.keys(map).length) {
        return
      }
      Object.keys(map).forEach((key: string) => {
        dictMap.value[key] = map[key] || []
      })
    }

    const getColor = (dictCode: string, dictValue: string) => {
      const list = dictMap.value[dictCode]
      if (!list?.length) {
        return ''
      }
      const target = list.find((item) => item.dictValue === dictValue)
      return target?.color ?? ''
    }

    return {
      setList,
      setMap,
      getList,
      dictMap,
      getColor,
    }
  },
  {
    persist: true,
  },
)
