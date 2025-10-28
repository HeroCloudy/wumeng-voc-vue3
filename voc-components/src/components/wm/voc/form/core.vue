<!--
 @name: core.vue
 @description: 解析表单
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/28 14:17
-->
<template>
  <el-form ref="formRef" :model="innerForm" label-position="top" size="large">
    <div v-for="item in list" :key="item.id">
      <el-form-item v-if="isFormItem(item)" :prop="item.id">
        <component
          :is="vocComponentTypeMap[item.type]"
          v-bind="item.props || {}"
          v-model="innerForm[item.id]"
        />
      </el-form-item>
      <div v-else>
        <component :is="vocComponentTypeMap[item.type]" v-bind="item.props || {}" />
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { vocComponentTypeMap } from '@/components.ts'
import type { FormInstance } from 'element-plus'
import { useTemplateRef, onMounted, ref } from 'vue'

const props = defineProps<{
  form: Record<string, any>
  list: Record<string, any>[]
}>()

const formRef = useTemplateRef<FormInstance>('formRef')

const isFormItem = (item: Record<string, any>) =>
  ['input', 'textarea', 'radio', 'checkbox'].includes(item.type)

const innerForm = ref(props.form)

onMounted(() => {
  props.list.forEach((item: any) => {
    const { id, props = {} } = item
    if (props.value) {
      innerForm.value[id] = props.value
    }
  })
})

const getFormRef = () => {
  return formRef.value
}

defineExpose({
  getFormRef,
})
</script>
<style scoped lang="scss">
.el-form-item {
  @apply mb-3 !important;

  :deep(.el-form-item__content) {
    @apply w-full;
  }
}
</style>
