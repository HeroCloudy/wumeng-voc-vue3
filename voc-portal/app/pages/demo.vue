<!--
 @name: demo.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:50
-->
<template>
  <div class="demo">
    <div>demo page</div>
    <button @click="demoStore.increment">Click to Add</button> {{ demoStore.count }}
  </div>
</template>

<script setup lang="ts">
import { useDemoStore } from '~/store/demo'

const demoStore = useDemoStore()
</script>
<style scoped lang="scss">
.demo {
}
</style>
