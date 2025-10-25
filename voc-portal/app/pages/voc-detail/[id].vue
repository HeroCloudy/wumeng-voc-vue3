<!--
 @name: [id].vue
 @description: 编辑页和统计页，加载子应用
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/25 13:26
-->
<template>
  <div>
    <h1 class="text-gray text-xl">编辑页/统计页，加载子应用 {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.id)
</script>
<style scoped lang="scss"></style>
