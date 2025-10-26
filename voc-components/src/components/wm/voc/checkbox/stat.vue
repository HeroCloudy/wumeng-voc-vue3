<!--
 @name: stat.vue
 @description: radio 统计 饼图
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/19 09:56
-->
<template>
  <div class="stat">
    <wm-charts :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  data?: Record<string, any>[]
}>()

const refXAxisData = computed(() => {
  return props.data?.map((item) => {
    return item.name
  })
})
const refData = computed(() => {
  return props.data?.map((item: Record<string, any>) => {
    return item.count
  })
})

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      show: true,
      type: 'category',
      data: refXAxisData.value,
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        // radius: '90%',
        selectedMode: 'multiple',
        selectedOffset: 10,
        clockwise: true,
        // center: ['50%', '50%'],
        data: refData.value,
        // roseType: 'radius',
        label: { show: true, position: 'outside' },
      },
    ],
  }
})
</script>
<style scoped lang="scss">
.stat {
}
</style>
