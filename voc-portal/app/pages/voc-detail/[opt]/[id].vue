<!--
 @name: [id].vue
 @description: 编辑页和统计页，加载子应用
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/25 13:26
-->
<template>
  <client-only>
    <div>
      <WujieVue
        width="100%"
        height="100%"
        name="voc-editor"
        :url="`http://localhost:8081/${opt}/${id}`"
        :sync="true"
        :props="propsToChild"
      ></WujieVue>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { useCoreStore } from '~/store/core'

const route = useRoute()
const id = computed(() => route.params.id)
const opt = computed(() => route.params.opt)

const coreStore = useCoreStore()

const previewFn = (url: string) => {
  console.log('in parent preview fn', url)
  window.open(url, 'mozillaWindow', 'popup')
}

const propsToChild = computed(() => {
  return {
    token: coreStore.token,
    userInfo: coreStore.userInfo,
    previewFn,
  }
})

definePageMeta({
  layout: 'blank',
})
</script>
<style scoped lang="scss"></style>
