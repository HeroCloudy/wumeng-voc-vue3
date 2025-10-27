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
      <home-hero />
    </div>
    <div ref="featureRef">
      <home-feature />
    </div>

    <div ref="techRef">
      <home-tech-stack />
    </div>

    <div ref="registerRef">
      <home-register />
    </div>

    <home-back-top-btn />
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/components/home/types'

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

const onItemClick = (val: NavItem) => {
  const target = refMap.value[val.targetRef]
  target?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<style scoped lang="scss"></style>
