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
      <div class="i-fa-comments" />
    </div>

    <chat-dialog :bottom="iconSize + 10" v-model="isShow" :title="title">
      <chat-content :list="messageList" />
      <template #footer>
        <chat-input-send placeholder="请描述您的问卷需求..." @send="onSend" />
      </template>
    </chat-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ChatDialog from './dialog.vue'
import ChatInputSend from './input-send.vue'
import ChatContent from './content.vue'
import type { Msg } from '@/components/wm/ai/chat/types.ts'

const props = withDefaults(
  defineProps<{
    bottom?: number
    right?: number
    iconSize?: number
    title?: string
  }>(),
  {
    bottom: 100,
    right: 30,
    iconSize: 60,
  },
)

const messageList = ref<Msg[]>([
  {
    type: 'sys',
    message: '欢迎使用AI问卷助手，我可以帮您快速创建专业问卷！',
  },
  {
    type: 'bot',
    message:
      '您好！我是AI问卷助手。请用自然语言告诉我您想创建什么样的问卷，例如："我需要一份客户满意度调查"或"创建一份产品反馈问卷"。',
  },
  {
    type: 'user',
    message: '我想创建一份员工满意度调查',
  },
  {
    type: 'bot',
    message:
      '很好！为了帮您创建合适的员工满意度调查，我需要了解一些信息：<br>1. 您希望调查哪些具体方面？(如工作环境、团队氛围、薪资福利等)<br>2. 大约需要设计多少个问题？<br>3. 您希望问卷的预计完成时间是多久？',
  },
  {
    type: 'user',
    message: '主要调查工作环境和团队氛围，大约10个问题，完成时间控制在5分钟内',
  },
  {
    type: 'sys',
    message: 'AI助手正在生成问卷方案...',
  },
  {
    type: 'bot',
    message:
      '根据您的需求，我已经为您设计了一份关于工作环境和团队氛围的员工满意度调查方案，包含10个简洁问题，预计完成时间约4-5分钟。<br><br>要继续创建这份问卷，我们需要：<br>1. 保存问卷方案<br>2. 根据方案生成实际问卷<br>3. 您可以进一步编辑和自定义问卷<br><br>您已登录系统，点击下方按钮即可开始创建问卷！<button class="create-survey-btn">立即创建问卷</button>',
  },
  {
    type: 'sys',
    message: '提示：如果您未登录，系统将引导您登录后继续创建问卷',
  },
])

const isShow = ref(true)

const innerStyle = computed(() => ({
  bottom: `${props.bottom}px`,
  right: `${props.right}px`,
}))

const onToggle = () => {
  isShow.value = !isShow.value
}

const onSend = (value: string) => {
  console.log('send', value)
}
</script>
<style scoped lang="scss">
.ai-chat {
  @apply fixed z-999;

  .chat-icon {
    @apply rd-50% text-white flex items-center justify-center text-24px cursor-pointer;
    background: linear-gradient(135deg, #1c9399 0%, #29b0b7 100%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

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
