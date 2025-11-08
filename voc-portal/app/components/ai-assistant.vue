<!--
 @name: ai-assistant.vue
 @description: AI 助手
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/31 18:49
-->
<template>
  <client-only>
    <wm-ai-chat
      ref="aiChatRef"
      title="智能问卷助手"
      :message-list="messageList"
      :send-message-service="sendMessageService"
      @show="onShow"
      @add-message="onAddMessage"
      @update-last-text="onUpdateLastText"
      :token="coreStore.token"
      :url="`/voc-api/api/ai/stream`"
      @btn-click="onHTMLMessageBtnClick"
    />
  </client-only>
</template>

<script setup lang="ts">
import { WmAiChat } from '@wumeng-voc-vue3/voc-ai'
import '@wumeng-voc-vue3/voc-ai/dist/voc-ai.css'
import { useAiStore } from '~/store/ai'
import type { Msg } from '@wumeng-voc-vue3/voc-ai'
import { useCoreStore } from '~/store/core'

const aiStore = useAiStore()
const coreStore = useCoreStore()

const router = useRouter()

const aiChatRef = useTemplateRef('aiChatRef')

const { messageList } = storeToRefs(aiStore)

const sendMessageService = (text: string) => {
  console.log('sendMessageService', text, coreStore.token)
  const headers = useRequestHeaders(['access_token'])
  headers.access_token = coreStore.token
  return fetch(`http://localhost:9001/api/ai/stream?prompt=${text}`, {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    credentials: 'include',
    referrerPolicy: 'origin-when-cross-origin',
  })
}

const onShow = (isShow: boolean) => {
  console.log('----- on show', isShow)
  if (isShow && aiChatRef.value) {
    if (
      !messageList.value.length ||
      (messageList.value[messageList.value.length - 1]?.message.includes('data-action="login"') &&
        coreStore.token)
    ) {
      aiStore.addMessage({
        type: 'bot',
        message: '',
      })
      aiChatRef.value.sendRequest('你好')
    }
  }
}

const onAddMessage = (message: Msg) => {
  messageList.value.push(message)
}

const onUpdateLastText = (text: string) => {
  if (messageList.value[messageList.value.length - 1]) {
    messageList.value[messageList.value.length - 1]!.message = text
  }
}

const actionLogin = () => {
  router.push('/login')
}

const actionCreate = () => {
  aiStore.addMessage({
    type: 'user',
    message: '立即创建问卷',
  })
  aiStore.addMessage({
    type: 'bot',
    message: '',
  })
  aiChatRef.value?.sendRequest('按照你的理解，立即创建问卷')
}

const actionEdit = (vocId?: string) => {
  if (!vocId) {
    return
  }
  router.push(`/voc-detail/edit/${vocId}`)
}

const onHTMLMessageBtnClick = (action: string, data?: string) => {
  console.log(action, data)
  switch (action) {
    case 'login':
      actionLogin()
      return
    case 'create':
      actionCreate()
      return
    case 'edit':
      actionEdit(data)
      return
  }
  if (action === 'login') {
    router.push('/login')
    return
  }
  if (action === 'create') {
  }
}
</script>
<style scoped lang="scss">
.ai-assistant {
}
</style>
