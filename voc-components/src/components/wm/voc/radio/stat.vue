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
const props = defineProps<{
  data?: Record<string, any>[]
}>()

const refData = computed(() => {
  return (props.data ?? []).map((item: Record<string, any>) => {
    return {
      value: item.count,
      name: item.name,
    }
  })
})

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: '90%',
        selectedMode: 'multiple',
        selectedOffset: 10,
        clockwise: true,
        center: ['50%', '50%'],
        // emphasis: {
        //   itemStyle: {
        //     color: 'rgb(140,251,182)',
        //   },
        // },
        data: refData.value,
        // roseType: 'radius',
        label: { show: true, position: 'inside', formatter: '{b}\n\n {d}%' },
      },
    ],
  }
})
</script>
<style scoped lang="scss">
.stat {
}
</style>
