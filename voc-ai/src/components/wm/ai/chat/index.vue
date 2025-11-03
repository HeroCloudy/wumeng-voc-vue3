<!--
 @name: index.vue
 @description: AI Chat 图标及聊天窗口
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/31 09:09
-->
<template>
  <div class="ai-chat" :style="innerStyle">
    <div
      :class="['chat-icon', isShow ? 'active' : '']"
      @click="onToggle"
      :style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
    >
      <div class="btn-icon" />
    </div>

    <chat-dialog
      ref="dialogRef"
      :bottom="iconSize + 10"
      v-model="isShow"
      :title="title"
      @close="emits('show', false)"
    >
      <chat-content :list="innerMessageList" @btn-click="onBtnClick" />
      <template #footer>
        <chat-input-send placeholder="请描述您的问卷需求..." @send="onSend" />
      </template>
    </chat-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import ChatDialog from './dialog.vue'
import ChatInputSend from './input-send.vue'
import ChatContent from './content.vue'
import type { Msg } from '@/components/wm/ai/chat/types.ts'
import '@/assets/scss/common.scss'

const props = withDefaults(
  defineProps<{
    bottom?: number
    right?: number
    iconSize?: number
    title?: string
    messageList: Msg[]
    token?: string
    url?: string
  }>(),
  {
    bottom: 30,
    right: 30,
    iconSize: 60,
    token: '',
  },
)

const emits = defineEmits<{
  show: [val: boolean]
  'add-message': [msg: Msg]
  'update-last-text': [text: string]
  // 服务端返回的消息中的按钮 点击事件
  'btn-click': [action: string, data?: string]
}>()

const dialogRef = useTemplateRef('dialogRef')

const isShow = ref(false)

const innerStyle = computed(() => ({
  bottom: `${props.bottom}px`,
  right: `${props.right}px`,
}))

const onToggle = () => {
  isShow.value = !isShow.value
  emits('show', isShow.value)

  if (isShow.value) {
    dialogRef.value?.scrollToBottom()
  }
}

const decoder = new TextDecoder('utf-8')

const innerMessageList = computed(() => props.messageList || [])

const onBtnClick = (action: string, value?: any) => {
  console.log('消息内部按钮事件', action, value)
  emits('btn-click', action, value)
}

const onSend = (value: string) => {
  const userMsg: Msg = {
    type: 'user',
    message: value,
  }
  emits('add-message', userMsg)

  const botMsg: Msg = {
    type: 'bot',
    message: '',
  }
  emits('add-message', botMsg)

  dialogRef.value?.scrollToBottom()

  sendRequest(value)
}

const sendRequest = async (text: string) => {
  const { token, url } = props
  if (!url) {
    return
  }
  const headers: Record<string, string> = {
    Authorization: token!,
    access_token: token!,
  }
  const response = await fetch(`${url}?prompt=${text}`, {
    method: 'GET',
    headers,
  })
  let txt = ''
  if (response.ok && response.body) {
    const reader = response.body.getReader()
    while (true) {
      try {
        const { value, done } = await reader.read()
        if (done) {
          break
        }
        txt += decoder.decode(value)
        emits('update-last-text', txt)

        dialogRef.value?.scrollToBottom()
      } catch (e) {
        console.error('读取流错误', e)
        break
      }
    }
  }
}

defineExpose({
  sendRequest,
})
</script>
<style scoped lang="scss">
.ai-chat {
  @apply fixed z-999;

  .chat-icon {
    @apply rd-50% text-white flex items-center justify-center text-24px cursor-pointer;
    background: linear-gradient(135deg, #1c9399 0%, #29b0b7 100%);
    //box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 12px var(--wm-color-primary-light-3);
    transition: all 0.3s ease;

    .btn-icon {
      @apply i-fa-comments;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    }

    &.active {
      transform: rotate(45deg);
    }
  }
}
</style>
