<!--
 @name: index.vue
 @description: 段落组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/17 10:48
-->
<template>
  <div class="voc-paragraph">
    <div :class="[isCenter ? 'text-center' : 'text-left', 'whitespace-pre-wrap']">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type WmVocParagraphPropsType } from './props.ts'

withDefaults(defineProps<WmVocParagraphPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-paragraph {
  @apply text-4 text-gray-600 my-2;
}
</style>
