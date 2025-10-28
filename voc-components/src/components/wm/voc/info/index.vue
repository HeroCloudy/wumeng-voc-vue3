<!--
 @name: index.vue
 @description: 问卷信息组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-info">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type WmVocInfoPropsType } from './props.ts'

withDefaults(defineProps<WmVocInfoPropsType>(), defaultProps)
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-info {
  @apply text-center my-4 w-full;

  .title {
    @apply text-7;
  }
  .desc {
    @apply whitespace-pre-wrap text-gray-600 text-4 font-400 mt-1;
  }
}
</style>
