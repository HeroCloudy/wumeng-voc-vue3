<!--
 @name: [id].vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/24 16:23
-->
<template>
  <h1 class="text-red">edit --- {{ route.params?.id ?? '' }}</h1>
  <div>token: {{ token }}</div>
  <div>userInfo: {{ JSON.stringify(userInfo) }}</div>
  <el-button @click="router.back()">Back</el-button>
</template>

<script setup lang="ts">
import { useCoreStore } from '@/stores/modules/core.ts'

const route = useRoute()
const router = useRouter()

const coreStore = useCoreStore()
const { token, userInfo } = storeToRefs(coreStore)
</script>
<style scoped lang="scss"></style>
