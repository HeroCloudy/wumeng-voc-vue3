<!--
 @name: index.vue
 @description: 输入框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-textarea">
    <div class="voc-item-title">{{ title }}</div>
    <div class="input">
      <el-input v-model="value" type="textarea" :rows="3" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type WmVocTextareaPropsType } from './props.ts'

withDefaults(defineProps<WmVocTextareaPropsType>(), defaultProps)

const value = defineModel<string>()
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-textarea {
  @apply mt-2 w-full;
  .input {
    @apply mt-2 w-full;
  }
}
</style>
