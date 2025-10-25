<template>
  <h3 class="text-blue">Hello World, {{ msg }}</h3>
  <el-button type="primary">测试按钮</el-button>
</template>

<script setup lang="ts">
defineProps<{
  msg?: string
}>()
</script>
