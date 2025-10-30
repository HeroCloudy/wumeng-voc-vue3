<!--
 @name: card.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/30 16:08
-->
<template>
  <div class="square-card" data-category="education">
    <div class="header">
      <div class="flex-1">
        <span class="category" :style="{ backgroundColor: tagColor }">{{ item.category }}</span>
      </div>

      <span class="meta-item">
        <icon name="fa-clock-o" class="icon" />
        {{ item.estimate }}分钟
      </span>
      <span class="meta-item">
        <icon name="fa-calendar" class="icon" />
        {{ item.createTime }}
      </span>
    </div>
    <div class="title">{{ item.title }}</div>
    <p class="desc">{{ item.description }}</p>
    <div class="actions">
      <el-button type="primary" plain class="flex-1" @click="onPreviewBtnClick">
        预览问卷
      </el-button>
      <el-button type="success" plain class="flex-1" :loading="copyLoading" @click="onCopyBtnClick">
        复制该问卷
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDictStore } from '~/store/dict'
import { useCoreStore } from '~/store/core'

const DICT_CATEGORY = 'voc_category'

const props = defineProps<{
  item: Record<string, any>
}>()

const dictStore = useDictStore()
const coreStore = useCoreStore()
const router = useRouter()

const tagColor = computed(() => {
  const color = dictStore.getColor(DICT_CATEGORY, props.item.category) as string
  if (!color) {
    return 'var(--wm-color-info)'
  }
  if (color.startsWith('#')) {
    return color
  }
  if (color.startsWith('--wm')) {
    return `var(${color})`
  }
})

const { copyLoading, onCopy } = useCopySurvey(props.item.id)

const onCopyBtnClick = () => {
  if (!coreStore.token || !coreStore.userInfo) {
    ElMessageBox.confirm('你还没有登录，登录后才能复制问卷。是否立即登录？', '提示', {
      confirmButtonText: '立即登录',
      cancelButtonText: '取消',
    })
      .then(() => {
        router.push('/login')
      })
      .catch(() => {})
  } else {
    onCopy()
  }
}

const onPreviewBtnClick = () => {
  const url = `http://localhost:9090/preview/${props.item.id}`
  window.open(url, 'mozillaWindow', 'popup')
}
</script>
<style scoped lang="scss">
.square-card {
  @apply bg-white rd-12px p-20px flex flex-col relative overflow-hidden h-224px box-border;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &::before {
    @apply bg-white absolute top-0 left-0 right-0 h-4px;
    content: '';
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

    &::before {
      background: linear-gradient(90deg, #1c9399, #29b0b7);
    }

    .title {
      @apply text-[var(--wm-color-primary)];
    }
  }

  .header {
    @apply flex justify-between items-center mb-12px;

    .category {
      @apply bg-[#4CAF50] px-12px py-4px rd-4px text-12px text-white;
    }

    .meta-item {
      @apply text-12px text-[#999] ml-12px flex items-center gap-4px;
      .icon {
        @apply text-10px;
      }
    }
  }

  .title {
    @apply text-20px mb-12px text-[#333] font-600;
    transition: color 0.3s ease;
  }

  .desc {
    @apply text-14px text-[#666] mb-12px flex-1 line-clamp-3;
  }

  .actions {
    @apply flex items-center;
  }
}
</style>
