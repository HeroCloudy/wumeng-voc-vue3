<!--
 @name: voc-list.vue
 @description: 问卷管理入口页面
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/23 21:25
-->
<template>
  <div class="container">
    <header-nav :scrolled="true" />
    <div class="voc-list-wrapper">
      <!-- 左侧菜单 -->
      <aside class="sidebar">
        <div class="header">问卷管理</div>
        <ul class="menu">
          <li v-for="item in list" :key="item.code" class="item">
            <nuxt-link
              :href="`${PREFIX}${item.code}`"
              :class="['link', route.path === `${PREFIX}${item.code}` ? 'active' : '']"
            >
              <icon :name="item.icon" class="icon" />
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const PREFIX = '/voc-list/'
const route = useRoute()

const list = [
  { icon: 'fa-list', title: '我的问卷', code: 'list' },
  { icon: 'fa-star', title: '我的收藏', code: 'collect' },
  { icon: 'fa-archive', title: '回收站', code: 'trash' },
]
</script>
<style scoped lang="scss">
.voc-list-wrapper {
  @apply flex flex rd-12px mt-90px overflow-hidden bg-white p-0;
  height: calc(100vh - 140px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .sidebar {
    @apply w-180px relative;
    background: linear-gradient(
      135deg,
      var(--wm-color-primary-light-1) 0%,
      var(--wm-color-primary-light-3) 100%
    );
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 0 16px rgba(0, 0, 0, 0.03);

    &::before {
      @apply absolute top-0 right-0 w-full h-full pointer-events-none;
      content: '';
      background-image: radial-gradient(
        circle at 80% 10%,
        rgba(255, 255, 255, 0.2) 0%,
        transparent 70%
      );
    }

    &::after {
      @apply absolute bottom-0 left-0 w-full h-[120px] pointer-events-none;
      content: '';
      background: linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, transparent 100%);
    }

    .header {
      @apply py-30px px-24px mb-16px relative text-white text-18px font-600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

      &::after {
        @apply absolute bottom-0 left-24px right-24px h-1px;
        content: '';
        background: linear-gradient(to right, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
      }
    }

    .menu {
      .item {
        @apply mb-4px;
        .link {
          @apply block py-14px px-24px text-16px relative font-400;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 8px 8px 0;

          .icon {
            @apply mr-12px text-14px;
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }

          &::after {
            @apply absolute top-0 left-0 w-4px h-full bg-white;
            content: '';
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          &::before {
            @apply absolute top-50% right-16px w-6px h-6px rd-[50%] z-10;
            content: '';
            background-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-50%) scale(0);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          &:hover {
            background-color: rgba(255, 255, 255, 0.12);
            color: #ffffff;
            transform: translateX(2px);

            .icon {
              opacity: 1;
            }
          }

          &.active {
            background-color: rgba(255, 255, 255, 0.2);
            //background: red;
            color: #ffffff;
            font-weight: 500;
            transform: translateX(2px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

            &::after {
              transform: translateX(0);
            }

            &::before {
              transform: translateY(-50%) scale(1);
            }

            .icon {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .main {
    @apply flex-1 bg-[#f0f2f5];
  }
}
</style>
