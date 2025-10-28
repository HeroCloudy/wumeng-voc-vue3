<!--
 @name: index.vue
 @description: 输入框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-input">
    <div class="voc-item-title">{{ title }}</div>
    <div>
      <el-input v-model="value" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultProps, type WmVocInputPropsType } from './props.ts'

withDefaults(defineProps<WmVocInputPropsType>(), defaultProps)

const value = defineModel<string>()
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-input {
  @apply mt-2 w-full;
}
</style>
