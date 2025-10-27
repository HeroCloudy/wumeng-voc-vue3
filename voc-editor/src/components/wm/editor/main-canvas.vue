<!--
 @name: editor-canvas.vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/15 17:17
-->
<template>
  <div class="editor-canvas">
    <draggable
      v-model="componentList"
      tag="div"
      item-key="frontId"
      ghost-class="drag-ghost"
      chosen-class="drag-chosen"
      animation="300"
    >
      <template #item="{ element: item }">
        <div v-if="!getComponent(item.type)"></div>
        <div
          v-else
          :class="[
            'component-wrapper',
            selectedId === item.frontId ? 'selected' : '',
            item.isLocked ? 'locked' : '',
          ]"
          @click.stop="onItemClick(item)"
        >
          <div class="component">
            <component :is="getComponent(item.type)" v-bind="item.props" />
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useGetComponent } from '@/hooks/use-get-component.ts'
import { type ComponentInfo, useEditorStore } from '@/stores/modules/editor.ts'
import { getComponent } from '@/utils/voc-component.ts'
import { useBindCanvasKey } from '@/hooks/use-bind-canvas-key.ts'

const editorStore = useEditorStore()

const { componentList } = useGetComponent()
const selectedId = computed(() => editorStore.selectedId)

// const innerComponentList = computed(() =>
//   componentList.value
//     .map((item) => ({
//       ...item,
//       c: getComponent(item.type),
//     }))
//     .filter((item) => !!item.c && !item.isHidden),
// )

const onItemClick = (info: ComponentInfo) => {
  editorStore.setCurrentSelect(info)
}

useBindCanvasKey()
</script>
<style scoped lang="scss">
.editor-canvas {
  @apply p-4;
  .component-wrapper {
    @apply p-2;
    border: 1px solid #fff;
    border-radius: 4px;

    &:hover {
      border-color: #d9d9d9;
    }

    .component {
      @apply pointer-events-none;
    }

    &.selected {
      border-color: var(--wm-color-primary) !important;
    }

    &.locked {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
