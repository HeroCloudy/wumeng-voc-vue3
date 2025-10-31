<!--
 @name: square.vue
 @description: 问卷广场
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/30 09:58
-->
<template>
  <div class="square">
    <header-nav />

    <!-- 页面标题区域 -->
    <section class="page-header">
      <div class="container">
        <h1>问卷广场</h1>
        <p>发现并参与精彩的问卷调查，分享您的想法和见解</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="search-filter-area">
          <el-select
            size="large"
            class="w-300px! mr-20px"
            v-model="searchForm.category"
            clearable
            filterable
            @change="onChange"
          >
            <el-option
              v-for="item in innerCategoryList"
              :key="item.dictValue"
              :value="item.dictValue"
              :label="item.dictLabel"
            />
          </el-select>
          <el-input
            size="large"
            placeholder="搜索问卷标题或关键词"
            class="flex-1"
            v-model="searchForm.keyword"
            @keyup.enter="onChange"
            clearable
            @clear="onChange"
          >
            <template #prefix>
              <icon name="fa-search" class="text-[#666]" />
            </template>
          </el-input>
        </div>

        <div class="mb-24px">
          <h3 class="text-20px text-[#333] font-600">热门标签</h3>
          <square-tag-select
            v-model="searchForm.label"
            class="mt-12px"
            :list="innerLabelList"
            @change="onChange"
          />
        </div>

        <!-- 问卷列表 -->
        <div class="square-grid" v-loading="loading">
          <square-card v-for="item in list" :key="item.id" :item="item" />
        </div>

        <div class="flex my-40px justify-center">
          <!--          <div class="flex-1"></div>-->
          <el-pagination
            size="large"
            v-model:current-page="searchForm.pageNo"
            v-model:page-size="searchForm.pageSize"
            background
            layout="prev, pager, next"
            :total="total"
            @change="onChange"
          />
        </div>
      </div>
    </section>

    <ai-assistant />
  </div>
</template>

<script setup lang="ts">
import { sysService } from '~/services/sys'
import { squareService } from '~/services/square'
import { useDictStore } from '~/store/dict'

const DICT_CATEGORY = 'voc_category'
const DICT_LABEL = 'voc_hot_label'
const ALL_CATEGORY = { dictLabel: '全部分类', dictValue: '__ALL' }

const dictStore = useDictStore()

const dictData = ref<any>({})
const loading = ref(false)

const innerCategoryList = computed(() => [ALL_CATEGORY, ...(dictData.value?.[DICT_CATEGORY] ?? [])])
const innerLabelList = computed(() => dictData.value?.[DICT_LABEL] ?? [])

const searchForm = ref({
  category: '__ALL',
  label: '',
  keyword: '',
  pageNo: 1,
  pageSize: 6,
})
const total = ref(0)
const list = ref<Record<string, any>>([])

onMounted(async () => {
  const resp: any = await sysService.getDictItemMap([DICT_CATEGORY, DICT_LABEL])
  console.log(resp)
  dictData.value = resp || {}
  dictStore.setMap(dictData.value)

  loadList()
})

const loadList = async () => {
  loading.value = true
  const params: Record<string, any> = { ...searchForm.value }
  if (params.category === '__ALL') {
    params.category = undefined
  }
  const resp: any = await squareService.getPage(params)
  loading.value = false
  console.log(resp)
  total.value = resp?.total ?? 0
  list.value = resp?.list ?? []
}

const onChange = () => {
  nextTick(() => {
    loadList()
  })
}
</script>
<style scoped lang="scss">
:host {
  @apply min-h-screen bg-red!important;
}

.square {
  .page-header {
    @apply text-white pt-80px pb-60px relative overflow-hidden;
    background: linear-gradient(135deg, #1c9399 0%, #29b0b7 100%);

    &::before {
      @apply absolute top-0 left-0 right-0 bottom-0 pointer-events-none;
      content: '';
      background-image:
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
    }

    h1 {
      @apply text-40px mb-16px relative z-1 font-700;
    }

    p {
      @apply text-18px opacity-90 z-1;
    }
  }

  .content {
    @apply py-40px;

    .search-filter-area {
      @apply bg-white rd-12px p-24px mb-28px flex items-center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }

    .square-grid {
      @apply grid gap-24px mb-40px;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    }
  }
}
</style>
