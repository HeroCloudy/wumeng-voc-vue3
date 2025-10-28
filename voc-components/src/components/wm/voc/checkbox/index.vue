<!--
 @name: index.vue
 @description: 复选框组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 16:54
-->
<template>
  <div class="voc-checkbox">
    <div class="voc-item-title">{{ title }}</div>
    <el-checkbox-group v-model="modelValue">
      <el-space :direction="isVertical ? 'vertical' : 'horizontal'" alignment="stretch">
        <el-checkbox v-for="item in options" :key="item" :value="item" :label="item" />
      </el-space>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { defaultProps, type WmVocCheckboxPropsType } from './props.ts'

const props = withDefaults(defineProps<WmVocCheckboxPropsType>(), defaultProps)

const modelValue = defineModel<string[]>()

// onMounted(() => {
//   modelValue.value = (props as any).value ?? []
// })
watch(
  () => (props as any).value,
  (newValue: any) => {
    if (newValue) {
      modelValue.value = newValue
    }
  },
  { immediate: true, deep: true },
)
</script>
<style scoped lang="scss">
@use '@/assets/scss/voc';
.voc-checkbox {
  @apply mt-2 w-full;

  .el-space--horizontal {
    @apply flex-wrap;
  }
  .el-space--vertical {
    @apply mt-1;
    gap: 0 !important;
  }
  :deep(.el-checkbox) {
    line-height: unset !important;
    height: 28px !important;
  }
  :deep(.el-space__item) {
    @apply mr-12px;
    line-height: 1 !important;
  }
}
</style>
