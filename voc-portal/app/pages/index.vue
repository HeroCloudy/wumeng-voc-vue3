<!--
 @name: index.vue
 @description: 首页
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:18
-->
<template>
  <div class="index">
    <div class="title">Home Page</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  p?: string
}>()
</script>
<style scoped lang="scss">
.index {
  .title {
    @apply text-2xl text-blue font-bold;
  }
}
</style>
