<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/27 16:34
-->
<template>
  <div class="index">
    <survey />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  p?: string
}>()
</script>
<style scoped lang="scss">
.index {
}
</style>
