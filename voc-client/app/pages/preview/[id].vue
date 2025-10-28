<!--
 @name: [id].vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/27 16:46
-->
<template>
  <div class="index">
    <wm-voc-form-error v-if="!data" />
    <wm-voc-form-pro v-else :list="data?.componentList ?? []" :form="form" :preview="true" />
  </div>
</template>

<script setup lang="ts">
import { WmVocFormPro, WmVocFormError } from '@wumeng-voc-vue3/voc-components'
import { surveyService } from '~/services/survey-service'

const route = useRoute()
const id = route.params.id as string

const form = ref<Record<string, any>>({})

const { data }: any = await useAsyncData(() => surveyService.getDetail(id))
</script>
<style scoped lang="scss"></style>
