<!--
 @name: index.vue
 @description: 问卷
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/27 16:35
-->
<template>
  <div class="survey">
    <div class="wrapper">
      <client-only>
        <el-form :model="form" label-position="top" size="large">
          <div v-for="item in list" :key="item.id">
            <el-form-item v-if="isFormItem(item)" :prop="item.id">
              <component
                :is="vocComponentTypeMap[item.type]"
                v-bind="item.props || {}"
                v-model="form[item.id]"
              />
            </el-form-item>
            <div v-else>
              <component :is="vocComponentTypeMap[item.type]" v-bind="item.props || {}" />
            </div>
          </div>
          <div class="w-full mx-auto sm:w-200px mt-10 mb-16">
            <el-button type="primary" class="w-full" :disabled="preview">提交</el-button>
          </div>
        </el-form>
        {{ form }}
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vocComponentTypeMap } from '@wumeng-voc-vue3/voc-components'
const props = withDefaults(
  defineProps<{
    list: Record<string, any>[]
    preview?: boolean
  }>(),
  {
    preview: false,
  },
)

const isFormItem = (item: Record<string, any>) =>
  ['input', 'textarea', 'radio', 'checkbox'].includes(item.type)

const form = reactive<Record<string, any>>({})

onMounted(() => {
  props.list.forEach((item: any) => {
    const { id, props = {} } = item
    if (props.value) {
      form[id] = props.value
    }
  })
})
</script>
<style scoped lang="scss">
.survey {
  @apply pt-8 bg-white;
  .wrapper {
    @apply mx-20px md:(w-80% mx-auto) lg:(w-760px mx-auto);
  }

  .el-form-item {
    @apply mb-3 !important;
  }

  :deep(.el-form-item__content) {
    @apply w-full;
  }
}
</style>
