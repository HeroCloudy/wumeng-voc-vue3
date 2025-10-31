<!--
 @name: index.vue
 @description: 首页
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:18
-->
<template>
  <div class="index">
    <header-nav @item-click="onItemClick" />

    <div ref="heroRef">
      <home-hero @use-now="onUseNowBtnClick" />
    </div>
    <div ref="featureRef">
      <home-feature />
    </div>

    <div ref="techRef">
      <home-tech-stack />
    </div>

    <div ref="registerRef" v-if="!coreStore.token">
      <home-register />
    </div>

    <home-back-top-btn />

    <ai-assistant />
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/components/home/types'
import { useCoreStore } from '~/store/core'

const coreStore = useCoreStore()
const router = useRouter()

const heroRef = useTemplateRef<HTMLDivElement>('heroRef')
const featureRef = useTemplateRef<HTMLDivElement>('featureRef')
const techRef = useTemplateRef<HTMLDivElement>('techRef')
const registerRef = useTemplateRef<HTMLDivElement>('registerRef')

const refMap = ref<any>({})

onMounted(() => {
  nextTick(() => {
    refMap.value = {
      heroRef,
      featureRef,
      techRef,
      registerRef,
    }
  })
})

const onUseNowBtnClick = () => {
  if (coreStore.token && coreStore.userInfo) {
    router.push('/voc-list/list')
  } else {
    registerRef.value?.scrollIntoView({ behavior: 'smooth' })
  }
}

const onItemClick = (val: NavItem) => {
  if (val.targetRef) {
    const target = refMap.value[val.targetRef]
    target?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style scoped lang="scss"></style>
