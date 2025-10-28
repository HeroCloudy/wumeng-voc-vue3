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
import { watch } from 'vue'
import { defaultProps, type WmVocRadioPropsType } from './props.ts'

const props = withDefaults(defineProps<WmVocRadioPropsType>(), defaultProps)

const modelValue = defineModel<string>()

watch(
  () => (props as any).value,
  (newValue: any) => {
    if (newValue) {
      modelValue.value = newValue
    }
  },
  { immediate: true },
)
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-radio {
  @apply mt-2 w-full;

  .el-space--horizontal {
    @apply flex-wrap;
  }
  .el-space--vertical {
    @apply mt-1;
    gap: 0 !important;
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
