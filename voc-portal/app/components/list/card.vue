<!--
 @name: card.vue
 @description: 问卷卡片
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/24 10:08
-->
<template>
  <div :class="['list-card', item.isStar ? 'starred' : '']">
    <div class="card-header">
      <div class="title">
        <icon v-if="item.isStar" name="fa-star" class="icon" />
        {{ item.title }}
      </div>
    </div>
    <div class="card-meta">
      <div class="meta-left">
        <span class="meta-item">
          <icon name="fa-clock-o" class="icon" />
          {{ item.createdTime }}
        </span>
        <span class="meta-item">
          <icon name="fa-users" class="icon" />
          答卷: {{ item.answerCount }}
        </span>
      </div>
      <div class="meta-right">
        <el-tag v-if="item.isPublished" type="primary">已发布</el-tag>
      </div>
    </div>
    <div class="card-actions">
      <div class="action-buttons">
        <el-button v-if="!item.isPublished">
          <icon name="fa-pencil" class="icon" />
          编辑问卷
        </el-button>
        <el-button v-if="item.isPublished">
          <icon name="fa:bar-chart" class="icon" />
          数据统计
        </el-button>
        <el-button>
          <icon name="fa-share-alt" class="icon" />
          {{ item.isPublished ? '撤回' : '发布' }}
        </el-button>
      </div>
      <div class="action-icons">
        <div class="action-btn star">
          <icon :name="item.isStar ? 'fa-star-o' : 'fa-star'" />
        </div>
        <div class="action-btn">
          <icon name="fa-copy" />
        </div>
        <div class="action-btn delete" v-if="!item.isPublished">
          <icon name="fa-trash" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Survey } from '~/types'

defineProps<{
  item: Survey
}>()
</script>
<style scoped lang="scss">
.list-card {
  @apply rd-8px px-16px py-14px relative overflow-hidden bg-white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f5f7fa;
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);

  &::after {
    @apply absolute top-0 left-0 w-120px h-120px pointer-events-none;
    content: '';
    border-radius: 0 0 0 120px;
    background: linear-gradient(135deg, rgba(28, 147, 153, 0.01) 0%, transparent 70%);
  }

  &:hover {
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
    border-color: #e3f2fd;

    .card-header {
      .title {
        @apply text-[var(--wm-color-primary)];
      }
    }

    .card-meta .meta-item {
      .icon {
        @apply text-[var(--wm-color-primary)];
      }
    }
  }

  &.starred {
    border-left: 4px solid #1c9399;
    background: linear-gradient(135deg, #ffffff 0%, #f0f9f9 100%);

    &::before {
      background: linear-gradient(135deg, rgba(28, 147, 153, 0.05) 0%, transparent 70%);
    }
  }

  .card-header {
    @apply items-center justify-between mb-20px relative;

    .title {
      @apply flex items-center text-18px text-[#2c3e50] font-700 cursor-pointer;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .icon {
      @apply text-[var(--wm-color-warning)] text-18px mr-12px cursor-pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;

      &:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 2px 8px rgba(255, 193, 7, 0.2);
      }
    }
  }

  .card-meta {
    @apply flex items-center justify-between text-14px text-[#64748b] mb-12px pb-12px;
    border-bottom: 1px solid var(--border-color);

    .meta-left {
      @apply flex items-center gap-32px;
    }

    .meta-item {
      @apply flex items-center gap-8px font-400 relative;

      .icon {
        color: #a0aec0;
        font-size: 14px;
        transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  .card-actions {
    @apply flex items-center justify-between relative;

    .action-buttons {
      @apply flex items-center flex-1;

      .icon {
        @apply text-8px mr-1;
      }
    }

    .action-icons {
      @apply flex items-center justify-end gap-12px;
      border-radius: 10px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      .action-btn {
        @apply w-32px h-32px rd-8px cursor-pointer text-[var(--wm-color-primary)] flex items-center justify-center text-14px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          background-color: var(--wm-color-primary-light-9);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
      }
    }

    .star {
      color: var(--wm-color-warning) !important;
      &:hover {
        background-color: var(--wm-color-warning-light-9) !important;
      }
    }

    .delete {
      color: var(--wm-color-danger) !important;
      &:hover {
        background-color: var(--wm-color-danger-light-9) !important;
      }
    }
  }
}
</style>
