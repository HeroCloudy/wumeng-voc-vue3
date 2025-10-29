<!--
 @name: success.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/29 09:32
-->
<template>
  <div class="wrapper">
    <el-result icon="error" title="提交失败" sub-title="很遗憾，问卷提交失败" />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.wrapper {
  @apply mt-10  mx-20px md:(w-80% mx-auto) lg:(w-760px mx-auto) text-center;
}
</style>
