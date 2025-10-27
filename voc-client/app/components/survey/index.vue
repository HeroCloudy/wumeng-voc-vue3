<!--
 @name: index.vue
 @description: 问卷
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/27 16:35
-->
<template>
  <div class="survey">
    <div class="wrapper">
      <div v-for="item in list" :key="item.id">{{ item.title ?? '' }} - {{ item.type }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  list: Record<string, any>[]
}>()
</script>
<style scoped lang="scss">
.survey {
  @apply pt-8;
  .wrapper {
    @apply mx-20px lg:(w-800px mx-auto) bg-amber;
  }
}
</style>
