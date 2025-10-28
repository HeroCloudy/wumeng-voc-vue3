<!--
 @name: index.vue
 @description: 输入框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-radio">
    <div class="voc-item-title">{{ title }}</div>
    <el-radio-group v-model="modelValue">
      <el-space :direction="isVertical ? 'vertical' : 'horizontal'" alignment="stretch">
        <el-radio v-for="item in options" :key="item" :value="item" :label="item" />
      </el-space>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { defaultProps, type WmVocRadioPropsType } from './props.ts'

const props = withDefaults(defineProps<WmVocRadioPropsType>(), defaultProps)

const modelValue = defineModel<string>()

onMounted(() => {
  modelValue.value = (props as any).value ?? ''
})
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-radio {
  @apply mt-2 w-full;

  .el-space--horizontal {
    @apply flex-wrap;
  }
  :deep(.el-radio) {
    line-height: unset !important;
    height: 28px !important;
  }
  :deep(.el-space__item) {
    @apply mr-12px;
    line-height: 1 !important;
  }
}
</style>
