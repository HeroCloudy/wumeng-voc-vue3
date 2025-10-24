<!--
 @name: search.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/24 00:11
-->
<template>
  <el-input
    v-model="value"
    size="large"
    class="w-240px!"
    clearable
    @keyup.enter="onSearch"
    @clear="onSearch"
  >
    <template #suffix>
      <icon name="fa-search" class="cursor-pointer" @click="onSearch" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
const value = defineModel()

const onSearch = () => {
  console.log('search value', value.value)
}
</script>
<style scoped lang="scss">
.search {
}
</style>
