<!--
 @name: component-lib.vue
 @description: 左侧-组件库
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 22:01
-->
<template>
  <el-scrollbar height="100%">
    <div v-for="(list, key) in componentGroup" :key="key" class="mb-4">
      <div class="title">{{ convertGroupNameToText(key) }}</div>
      <div class="grid-list">
        <div v-for="(c, index) in list" :key="index">
          <el-popover placement="right-end" :width="300">
            <template #reference>
              <div class="item-wrapper" @click="onItemClick(c)">
                <wm-icon :icon="c.icon" />
                {{ c.title }}
              </div>
            </template>
            <template #default>
              <div class="pointer-events-none w-300px p-20px">
                <component :is="c.component" />
              </div>
            </template>
          </el-popover>
        </div>
      </div>
      <!--      <div v-for="(c, i) in list" :key="i" class="wrapper" @click="onItemClick(c)">-->
      <!--        <div class="pointer-events-none">-->
      <!--          <component :is="c.component" />-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { componentGroup } from '@/utils/voc-component'
import type { ComponentConfig } from '@wumeng-voc-vue3/voc-components'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'

const editorStore = useEditorStore()

const onItemClick = (item: ComponentConfig) => {
  const { title, type, defaultProps } = item
  const newComponent: ComponentInfo = {
    frontId: `${new Date().getTime()}`,
    title,
    type,
    props: { ...defaultProps },
  }
  editorStore.addComponent(newComponent)
}

const convertGroupNameToText = (category: string) => {
  switch (category) {
    case 'input':
      return '输入型组件'
    case 'select':
      return '选择型组件'
    case 'display':
      return '展示型组件'
  }
}
</script>
<style scoped lang="scss">
.title {
  @apply font-bold my-2;
}

.grid-list {
  @apply grid grid-cols-2 gap-12px mt-12px;

  .item-wrapper {
    @apply cursor-pointer px-4 py-1 bg-gray-200 text-14px flex items-center;
    border: 1px dashed transparent;
    border-radius: 4px;
    .icon {
      @apply mr-12px;
    }
    &:hover {
      @apply bg-gray-1;
      border-color: var(--wm-color-primary);
    }
  }
}

.wrapper {
  @apply mb-3 cursor-pointer px-4 py-1 bg-[var(--bg-color)];
  border-radius: 3px;

  &:hover {
    @apply bg-gray-1;
  }
}
</style>
