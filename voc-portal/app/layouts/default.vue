<!--
 @name: default.vue
 @description: 默认布局
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:15
-->
<template>
  <div class="default">
    <slot />
    <el-footer class="footer" height="auto">
      乌蒙问卷 &copy;2025 - present. Created By YouYaCoder
    </el-footer>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.footer {
  @apply bg-[var(--bg-color)] text-center text-gray-400 py-2;
  border-top: 1px solid var(--border-color);
}
</style>
