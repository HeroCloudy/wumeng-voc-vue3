<!--
 @name: dialog.vue
 @description: 自定义弹窗
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/31 09:40
-->
<template>
  <div :class="['chat-dialog', show ? 'show' : '']" :style="innerStyle">
    <div class="chat-header">
      <h3 class="title">{{ title }}</h3>
      <button class="close" @click="onCloseBtnClick">
        <div class="btn-close" />
      </button>
    </div>
    <div class="content" ref="containerRef">
      <slot />
    </div>

    <div class="footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, useTemplateRef } from 'vue'

const props = withDefaults(
  defineProps<{
    bottom?: number
    right?: number
    title?: string
  }>(),
  {
    bottom: 80,
    right: 0,
  },
)

const show = defineModel({ default: false })

const innerStyle = computed(() => ({
  bottom: `${props.bottom}px`,
  right: `${props.right}px`,
}))

const onCloseBtnClick = () => {
  show.value = false
}

const containerRef = useTemplateRef<HTMLDivElement>('containerRef')

const scrollBottom = () => {
  if (containerRef.value) {
    containerRef.value.scrollTop = containerRef.value.scrollHeight
  }
}

onMounted(() => {
  nextTick(() => {
    scrollBottom()
  })
})
</script>
<style scoped lang="scss">
.chat-dialog {
  @apply absolute w-500px max-w-90vh h-500px bg-white rd-12px flex-col overflow-hidden hidden box-border;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: chatSlideUp 0.8s ease;

  &.show {
    @apply flex;
  }

  .chat-header {
    @apply flex text-white py-12px px-20px items-center justify-between;
    background: linear-gradient(
      135deg,
      var(--wm-color-primary) 0%,
      var(--wm-color-primary-light-2) 100%
    );

    .title {
      @apply text-16px font-600;
    }

    .close {
      transition: opacity 0.3s ease;
      @apply bg-transparent border-none text-white cursor-pointer p-4px text-18px font-300;

      &:hover {
        opacity: 0.8;
      }

      .btn-close {
        @apply i-fa-times;
      }
    }
  }

  .content {
    @apply flex-1 p-16px overflow-y-auto bg-[#f8f9fa];

    &::-webkit-scrollbar {
      @apply w-6px;
    }
    &::-webkit-scrollbar-track {
      @apply bg-[#f1f1f1] rd-[2px];
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-[#ddd] rd-2px;
    }
    &::-webkit-scrollbar-thumb:hover {
      @apply bg-[#ccc];
    }
  }

  .footer {
    @apply bg-white;
    border-top: 1px solid #e9ecef;
  }
}

@keyframes chatSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
