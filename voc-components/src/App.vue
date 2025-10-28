<template>
  <!--
  <div class="w-600px mx-auto mt-30px">
    <wm-voc-info title="测试问卷信息" />
    <wm-voc-input />
    <wm-voc-title />
    <wm-voc-textarea />
    <wm-voc-paragraph />
    <wm-voc-radio />
    <wm-voc-checkbox />
  </div>
  -->
  <div>
    {{ form }}
    <wm-voc-form-pro ref="vocFormProRef" :list="list" :form="form" @submit="onSubmit" />
  </div>
</template>
<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import type { ComponentConfig } from '@/components/wm/voc/types.ts'

const form = ref<Record<string, any>>({})
const list = ref<ComponentConfig[]>([])

const vocFormProRef = useTemplateRef('vocFormProRef')

onMounted(async () => {
  const resp = await fetch('http://localhost:9001/api/voc/1982718705070510081')
    .then((res) => res.json())
    .then((res) => res.data)
  list.value = resp?.componentList ?? []
  console.log(list.value)
})

const onSubmit = async () => {
  console.log('submit', form.value)
  console.log(vocFormProRef.value?.getFormRef())
}
</script>
<style scoped></style>
