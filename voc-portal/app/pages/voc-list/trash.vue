<!--
 @name: trash.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/23 23:51
-->
<template>
  <div class="trash">
    <list-header title="回收站" />
    <div class="my-4 text-right">
      <el-button
        type="primary"
        :disabled="!selectedList?.length"
        :loading="recoveryLoading"
        @click="onRecovery"
      >
        恢复
      </el-button>
      <el-button
        type="danger"
        :disabled="!selectedList?.length"
        @click="onDeleteBtnClick"
        :loading="deleteLoading"
      >
        彻底删除
      </el-button>
    </div>
    <div class="wrapper">
      <el-table
        :data="list"
        v-loading="loading"
        border
        size="large"
        class="w-full h-full"
        @selection-change="onSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="title" label="标题" min-width="180" />
        <el-table-column prop="isPublished" label="是否发布" min-width="100">
          <template #default="{ row }">
            <el-tag :type="row.isPublished ? 'primary' : 'info'">
              {{ row.isPublished ? '已发布' : '未发布' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" min-width="120" />
      </el-table>
    </div>
    <div class="flex">
      <div class="flex-1"></div>
      <el-pagination
        v-model:current-page="page"
        v-model:page-size="size"
        background
        layout="prev, pager, next, sizes"
        :total="total"
        @change="onPageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PageResult, Survey } from '~/types'
import { surveyService } from '~/services/survey'

const route = useRoute()

const total = ref(0)
const list = ref<Survey[]>([])
const page = ref(1)
const size = ref(20)

const selectedList = ref<Survey[]>([])

const { finish } = useLoadingIndicator()

onMounted(() => {
  finish()
})

const onSelectionChange = (val: Survey[]) => {
  selectedList.value = val
}

const keyword = computed(() => route.query?.keyword ?? '')

const { run: loadData, loading } = useRequest(
  () =>
    surveyService.getList({
      pageNo: page.value,
      pageSize: size.value,
      keyword: keyword.value,
      isDeleted: 1,
    }),
  {
    manual: true,
    onSuccess(v: PageResult<Survey>) {
      total.value = v?.total ?? 0
      list.value = v?.list ?? []
    },
  },
)

const onPageChange = (pageNum: number, pageSize: number) => {
  page.value = pageNum
  size.value = pageSize
  loadData()
}

const onDeleteBtnClick = () => {
  ElMessageBox.confirm(
    `是否确定删除所选的 ${selectedList.value.length} 个问卷？彻底删除后将不可恢复`,
    '是否确认彻底删除？',
    {
      confirmButtonText: '彻底删除',
      cancelButtonText: '取消',
      type: 'warning',
    },
  ).then(() => {
    onDelete()
  })
}

const { loading: recoveryLoading, run: onRecovery } = useRequest(
  async () => {
    const ids = selectedList.value.map((item) => item.id)
    for await (const id of ids) {
      await surveyService.recovery(id)
    }
    return true
  },
  {
    manual: true,
    onSuccess: () => {
      ElMessage.success('恢复成功')
      loadData()
    },
  },
)

const { loading: deleteLoading, run: onDelete } = useRequest(
  async () => {
    const ids = selectedList.value.map((item) => item.id)
    return surveyService.batchRemove(ids)
  },
  {
    manual: true,
    onSuccess: () => {
      ElMessage.success('删除成功')
      loadData()
    },
  },
)

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
.trash {
  @apply h-full relative overflow-hidden flex flex-col;

  .wrapper {
    @apply flex-1 overflow-hidden  pl-4 mb-4;
  }
}
</style>
