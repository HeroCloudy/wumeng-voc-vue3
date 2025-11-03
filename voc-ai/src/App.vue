<template>
  <div>
    <wm-ai-chat
      title="AI智能问卷助手"
      :message-list="messageList"
      @show="onShow"
      @add-message="onAddMessage"
      @update-last-text="onUpdateLastText"
      url="http://localhost:9001/api/ai/stream"
    />
  </div>
</template>
<script setup lang="ts">
import WmAiChat from '@/components/wm/ai/chat/index.vue'
import { ref } from 'vue'
import type { Msg } from '@/components/wm/ai/chat/types.ts'

const messageList = ref<Msg[]>([])

const onShow = (isShow: boolean) => {
  console.log('----- on show', isShow)
}

const onAddMessage = (message: Msg) => {
  console.log('---- onAdd message', message)
  messageList.value.push(message)
}

const onUpdateLastText = (text: string) => {
  console.log('---- onUpdateLastText', text)
  if (messageList.value[messageList.value.length - 1]) {
    messageList.value[messageList.value.length - 1]!.message = text
  }
}
</script>
<style scoped></style>
