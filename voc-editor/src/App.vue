<template>
  <el-config-provider size="default" :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useCoreStore } from '@/stores/modules/core.ts'

const coreStore = useCoreStore()

onMounted(() => {
  if (window.__POWERED_BY_WUJIE__ && window.$wujie?.props) {
    const { token = '', userInfo = {} } = window.$wujie.props
    coreStore.initData(token, userInfo)
  }
})
</script>
<style scoped></style>
