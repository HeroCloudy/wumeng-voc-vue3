<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 09:54
-->
<template>
  <div class="echart" ref="targetRef" />
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const props = defineProps<{
  options: Record<string, any>
}>()

const targetRef = useTemplateRef<HTMLDivElement | null>('targetRef')
const chart = ref<echarts.EChartsType>()

const initChart = () => {
  if (targetRef.value && !chart.value) {
    chart.value = echarts.init(targetRef.value)
  }
}

onMounted(() => {
  initChart()
  chart.value?.setOption(props.options)
})

watch(
  () => props.options,
  () => {
    if (!chart.value) {
      initChart()
    }
    nextTick(() => {
      chart.value!.setOption(props.options)
    })
  },
  {
    deep: true,
  },
)
</script>
<style scoped lang="scss">
.echart {
  @apply w-full h-400px;
}
</style>
