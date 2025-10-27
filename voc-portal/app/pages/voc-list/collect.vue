<!--
 @name: collect.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/23 23:51
-->
<template>
  <div class="collect">
    <list-header title="我的收藏" />

    <div class="wrapper">
      <el-scrollbar height="100%" @end-reached="onEndReached">
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-14px pl-12px pt-12px">
          <div v-for="item in innerList" :key="item.id">
            <list-card :item="item" @refresh="onRefresh" />
          </div>
          <div v-if="loading" class="hint">
            <icon name="fa:spinner" class="icon" />
            数据加载中...
          </div>
          <div v-if="!hasMore && !loading" class="hint">已加载完全部数据</div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { surveyService } from '~/services/survey'
import type { PageResult, Survey } from '~/types'

const route = useRoute()

const total = ref(0)
const list = ref<Survey[]>([])
const page = ref(1)
const hasMore = computed(() => total.value > list.value.length)

const keyword = computed(() => route.query?.keyword ?? '')

const innerList = computed(() => list.value.filter((item) => !!item.isStar))

const { run: loadData, loading } = useRequest(
  () =>
    surveyService.getList({
      pageNo: page.value,
      pageSize: 4,
      keyword: keyword.value,
      isDeleted: 0,
      isStar: 1,
    }),
  {
    manual: true,
    onSuccess(v: PageResult<Survey>) {
      total.value = v?.total ?? 0
      list.value.push(...(v?.list ?? []))

      page.value += 1
    },
  },
)

const onEndReached = (direction: string) => {
  if (direction === 'bottom' && hasMore.value) {
    loadData()
  }
}

const onRefresh = () => {
  page.value = 1
  list.value = []
  total.value = 0
  loadData()
}

watch(
  keyword,
  () => {
    page.value = 1
    list.value = []
    loadData()
  },
  { immediate: true },
)
</script>
<style scoped lang="scss">
.collect {
  @apply h-full relative;

  .wrapper {
    @apply absolute top-66px left-0 right-0 bottom-0;

    .hint {
      @apply text-14px text-center col-span-2 flex items-center justify-center;

      .icon {
        @apply text-gray text-12px mr-2;
        animation: spin 3s linear infinite;
      }
    }
  }
}
</style>
