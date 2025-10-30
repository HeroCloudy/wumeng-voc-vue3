<!--
 @name: tag-select.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/30 15:52
-->
<template>
  <div class="tag-select">
    <!--    <div class="tag active" data-tag="全部">全部</div>-->
    <div
      v-for="(item, index) in innerList"
      :key="index"
      :class="['tag', item.dictValue === value ? 'active' : '']"
      @click="onItemClick(item)"
    >
      {{ item.dictLabel }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface TagItem {
  dictLabel: string
  dictValue: string
}

const emits = defineEmits<{
  change: [value: string]
}>()

const value = defineModel({ default: '' })

const props = withDefaults(
  defineProps<{
    isShowAll?: boolean
    list?: TagItem[]
  }>(),
  {
    isShowAll: true,
    list: () => [],
  },
)

const innerList = computed(() => {
  const { isShowAll, list = [] } = props
  if (isShowAll) {
    return [{ dictLabel: '全部', dictValue: '' }, ...list]
  }
  return list
})

const onItemClick = (item: TagItem) => {
  if (item.dictValue !== value.value) {
    value.value = item.dictValue
    emits('change', value.value)
  }
}
</script>
<style scoped lang="scss">
.tag-select {
  @apply flex flex-wrap gap-12px;

  .tag {
    @apply px-16px py-4px bg-white rd-[20px] text-14px text-[#666] cursor-pointer;
    border: 1px solid #e9ecef;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f8f8;
      border-color: #1c9399;
      color: #1c9399;
      transform: translateY(-1px);
    }

    &.active {
      background-color: #1c9399;
      border-color: #1c9399;
      color: white;
    }
  }
}
</style>
