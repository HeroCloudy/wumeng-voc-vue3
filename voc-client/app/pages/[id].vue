<!--
 @name: [id].vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/27 16:46
-->
<template>
  <div class="index">
    <survey :list="data?.componentList ?? []" />
    <!--    {{ resp }}-->
  </div>
</template>

<script setup lang="ts">
import { surveyService } from '~/services/survey-service'

const route = useRoute()
const id = route.params.id as string

const { data }: any = await useAsyncData(() => surveyService.getDetail(id))
</script>
<style scoped lang="scss"></style>
