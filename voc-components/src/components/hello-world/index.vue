<template>
  <h3 class="hello-world">Hello World, {{ msg }}</h3>
  <el-button type="primary">测试按钮</el-button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'wm-hello-world',
})
defineProps<{
  msg?: string
}>()
</script>
<style lang="scss" scoped>
.hello-world {
  @apply text-xl text-blue;
}
</style>
