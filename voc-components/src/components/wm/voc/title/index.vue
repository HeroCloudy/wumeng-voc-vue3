<!--
 @name: index.vue
 @description: 标题组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-title">
    <div :style="innerStyle">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defaultProps, type WmVocTitlePropsType } from './props.ts'

const props = withDefaults(defineProps<WmVocTitlePropsType>(), defaultProps)

const innerStyle = computed<Record<string, any>>(() => {
  const style: Record<string, any> = { fontWeight: 700 }

  const { level, isCenter } = props
  if (isCenter) {
    style.textAlign = 'center'
  }

  let fontSize = '1rem'
  switch (level) {
    case 1:
      fontSize = '1.5rem' // text-6 0.25
      break
    case 2:
      fontSize = '1.25px' // 0.25 * 5
      break
    case 3:
      fontSize = '1rem'
      break
  }
  style.fontSize = fontSize

  return style
})
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-title {
  @apply text-gray-800 w-full my-2;
}
</style>
