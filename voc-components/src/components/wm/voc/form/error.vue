<!--
 @name: error.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/28 22:44
-->
<template>
  <wm-voc-form-wrapper>
    <div class="hint">
      <el-empty description="Oops!">
        <template #image>
          <el-image :src="errorPng"></el-image>
        </template>
      </el-empty>
      <div>您访问的问卷不存在</div>
    </div>
  </wm-voc-form-wrapper>
</template>

<script setup lang="ts">
import WmVocFormWrapper from './wrapper.vue'
import errorPng from '@/assets/images/404.png'
</script>
<style scoped lang="scss">
.hint {
  @apply text-center text-lg text-gray-500;
}
</style>
