<!--
 @name: input-send.vue
 @description: 底部输入框、发送按钮
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/31 10:23
-->
<template>
  <div class="chat-input-send">
    <input
      v-model="inputText"
      class="input"
      type="text"
      :placeholder="placeholder"
      @keyup.enter.prevent="onSendBtnClick"
    />
    <button :class="['btn-send', !inputText?.trim() ? 'disabled' : '']" @click="onSendBtnClick">
      <div class="icon-send" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string
}>()

const emits = defineEmits<{
  send: [value: string]
}>()

const inputText = defineModel<string>({ default: '' })

const onSendBtnClick = () => {
  const value = inputText.value
  emits('send', value)
  inputText.value = ''
}
</script>
<style scoped lang="scss">
.chat-input-send {
  @apply p-12px bg-white flex gap-12px items-center;

  .input {
    @apply outline-none flex-1 p-12px rd-12px text-14px;
    border: 1px solid #ddd;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: var(--wm-color-primary);
    }
  }

  .btn-send {
    @apply size-40px rd-50% border-none text-white flex items-center justify-center text-16px cursor-pointer;
    background: linear-gradient(
      135deg,
      var(--wm-color-primary) 0%,
      var(--wm-color-primary-light-3) 100%
    );

    &:hover {
      transform: scale(1.05);
    }

    &.disabled {
      @apply cursor-not-allowed bg-none bg-[#ddd];
    }

    .icon-send {
      @apply i-fa-paper-plane;
    }
  }
}
</style>
