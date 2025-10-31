<!--
 @name: content.vue
 @description: 聊天内容
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/31 10:54
-->
<template>
  <div class="chat-content">
    <!-- 系统提示消息 -->
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="{
        message: true,
        'system-message': item.type === 'sys',
        'bot-message': item.type === 'bot',
        'user-message': item.type === 'user',
      }"
    >
      <div class="message-content" v-html="item.message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Msg } from './types.ts'

defineProps<{
  list: Msg[]
}>()
</script>
<style scoped lang="scss">
.chat-content {
  .message {
    @apply mb-16px flex;

    .message-content {
      @apply max-w-80% p-12px rd-12px text-14px;
      line-height: 1.4;
      word-wrap: break-word;
    }

    &.user-message {
      @apply justify-end;

      .message-content {
        @apply bg-[var(--wm-color-primary)] text-white;
        border-bottom-right-radius: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    }

    &.bot-message {
      @apply justify-start;

      .message-content {
        @apply bg-white text-[#333];
        border-bottom-left-radius: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
    }

    &.system-message {
      @apply justify-center;

      .message-content {
        @apply bg-[#e9ecef] text-[#666] text-12px py-8px px-12px max-w-[90%] rd-8px;
      }
    }

    /* 聊天窗口中的创建问卷按钮样式 */
    .create-survey-btn {
      background-color: #1c9399;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
      margin-top: 10px;
      display: inline-block;
    }

    .create-survey-btn:hover {
      background-color: #e55f00;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
