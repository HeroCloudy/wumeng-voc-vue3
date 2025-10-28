<!--
 @name: [id].vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/27 16:46
-->
<template>
  <div class="index">
    <wm-voc-form-pro
      ref="vocFormProRef"
      :list="data?.componentList ?? []"
      :form="form"
      @submit="onSubmit"
    />
    <!--    <survey :list="data?.componentList ?? []" />-->
  </div>
</template>

<script setup lang="ts">
import { WmVocFormPro } from '@wumeng-voc-vue3/voc-components'
import { surveyService } from '~/services/survey-service'

const route = useRoute()
const id = route.params.id as string

const form = ref<Record<string, any>>({})
const vocFormProRef = useTemplateRef('vocFormProRef')

const { data }: any = await useAsyncData(() => surveyService.getDetail(id))

const onSubmit = async () => {
  console.log('submit', form.value)
  console.log(vocFormProRef.value?.getFormRef())

  if (!data.value) {
    return
  }
  const { id } = data.value
  const values: Record<string, string>[] = []
  Object.keys(form.value).forEach((k: string) => {
    if (form.value[k] !== undefined) {
      if (Array.isArray(form.value[k])) {
        for (let i = 0; i < form.value[k].length; i++) {
          values.push({ componentId: k, value: form.value[k][i] })
        }
      } else {
        values.push({ componentId: k, value: form.value[k] })
      }
    }
  })

  const params = {
    submitter: 'bbb',
    surveyId: id,
    values,
  }
  console.log(params)

  const resp = await surveyService.submit(params)
  console.log(resp)
}
</script>
<style scoped lang="scss"></style>
