import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Msg } from '@wumeng-voc-vue3/voc-ai'

export const useAiStore = defineStore('aiStore', () => {
  const messageList = ref<Msg[]>([])

  const addMessage = (msg: Msg) => {
    messageList.value.push(msg)
  }

  return {
    messageList,
    addMessage,
  }
})
