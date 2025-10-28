<!--
 @name: wrapper.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/28 22:48
-->
<template>
  <div class="voc-form">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  p?: string
}>()
</script>
<style scoped lang="scss">
.voc-form {
  @apply pt-8 bg-white;

  .wrapper {
    @apply mx-20px md:(w-80% mx-auto) lg:(w-760px mx-auto);
  }
}
</style>
