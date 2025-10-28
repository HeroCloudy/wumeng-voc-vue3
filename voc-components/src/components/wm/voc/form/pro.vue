<!--
 @name: pro.vue
 @description: 默认C端使用的表单
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/28 14:17
-->
<template>
  <div class="voc-form">
    <div class="wrapper">
      <wm-voc-form-core ref="formCoreRef" :list="list" :form="form" />
      <div class="submit-btn">
        <el-button @click="onSubmitBtnClick" type="primary" class="btn" :disabled="preview"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { useTemplateRef } from 'vue'

withDefaults(
  defineProps<{
    form: Record<string, any>
    list: Record<string, any>[]
    preview?: boolean
  }>(),
  {
    preview: false,
  },
)

const emits = defineEmits<{
  submit: []
}>()

const formCoreRef = useTemplateRef('formCoreRef')

const getFormRef = (): FormInstance | undefined => {
  return formCoreRef.value?.getFormRef() ?? undefined
}

const onSubmitBtnClick = () => {
  emits('submit')
}

defineExpose({
  getFormRef,
})
</script>
<style scoped lang="scss">
.voc-form {
  @apply pt-8 bg-white;

  .wrapper {
    @apply mx-20px md:(w-80% mx-auto) lg:(w-760px mx-auto);

    .submit-btn {
      @apply w-full mx-auto sm:w-200px mt-10 mb-16;

      .btn {
        @apply w-full;
      }
    }
  }
}
</style>
