<!--
 @name: error.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/29 20:47
-->
<template>
  <div class="container">
    <header-nav scrolled />

    <el-result title="404" sub-title="你访问的页面不存在" class="mt-70px">
      <template #icon>
        <img src="@/assets/images/404.png" class="w-280px" />
      </template>
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.error {
}
</style>
