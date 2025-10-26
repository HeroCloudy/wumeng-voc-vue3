<!--
 @name: [id].vue
 @description:
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/24 16:23
-->
<template>
  <div class="edit-page">
    <wm-editor-header />

    <div class="wrapper">
      <div class="left">
        <wm-editor-left-panel />
      </div>

      <div class="main" @click="onPageClick">
        <div class="canvas-wrapper" v-loading="loading">
          <el-scrollbar min-height="100%">
            <wm-editor-main-canvas />
          </el-scrollbar>
        </div>
      </div>

      <div class="right">
        <wm-editor-right-panel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/modules/editor.ts'
import { useLoadSurveyData } from '@/hooks/use-load-survey-data.ts'

const editorStore = useEditorStore()

const { loading } = useLoadSurveyData()

const onPageClick = () => {
  editorStore.setCurrentSelect(undefined)
}
</script>
<style scoped lang="scss">
.edit-page {
  @apply flex flex-col h-screen bg-[#f0f2f5] overflow-hidden;

  .wrapper {
    @apply flex-1 flex py-3 mx-6 overflow-hidden;

    .left {
      @apply w-300px bg-white px-3 box-border;
    }

    .right {
      @apply w-300px bg-white px-3  box-border;
    }

    .main {
      @apply flex-1 overflow-hidden h-full;

      .canvas-wrapper {
        @apply absolute h-80vh left-50% bg-white;
        transform: translateX(-50%) translateY(-50%);
        top: calc(50% + 20px);
        box-shadow: 0 2px 2px #ccc;
        max-width: calc(100% - 900px);
        min-width: 400px;
        width: 40%;
      }
    }
  }
}
</style>
