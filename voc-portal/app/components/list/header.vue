<!--
 @name: header.vue
 @description: 列表页顶部
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/24 00:04
-->
<template>
  <div class="list-header">
    <div class="title">{{ title }}</div>
    <div class="header-right">
      <list-search />
      <el-button
        v-if="isShowAddBtn"
        type="primary"
        size="large"
        class="ml-6"
        :loading="loading"
        @click="onCreate"
      >
        <icon name="fa-plus" class="text-11px mr-2" />
        创建问卷
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { surveyService } from '~/services/survey'

defineProps<{
  isShowAddBtn?: boolean
  title: string
}>()

const router = useRouter()

const { loading, run: onCreate } = useRequest(surveyService.create, {
  manual: true,
  onSuccess: (data: string) => {
    console.log('data', data)
    router.push(`/voc-detail/edit/${data}`)
  },
})
</script>
<style scoped lang="scss">
.list-header {
  @apply flex items-center justify-between py-12px px-32px bg-white top-0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
  position: sticky;
  z-index: 100;
  border-bottom: 1px solid #f0f2f5;

  .title {
    @apply text-20px text-[#666] font-700;
  }
}
</style>
