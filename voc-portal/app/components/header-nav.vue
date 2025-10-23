<!--
 @name: header-nav.vue
 @description: 首页顶部组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:57
-->
<template>
  <!-- 导航栏 -->
  <header :class="['navbar', isScrolled ? 'scrolled' : '']">
    <div class="container">
      <div class="left">
        <a href="#" class="logo">
          <img src="~/assets/images/logo.png" class="logo-img" />
          <span>WUMENG 问卷</span>
        </a>
        <nav class="main-nav">
          <ul class="flex">
            <li class="nav-item" v-for="(item, index) in navList" :key="index">
              <a class="nav-link" @click="onNavItemClick(item)">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="navbar-right">
        <a href="#" class="btn btn-login">登录</a>
        <a href="#" class="btn btn-register">立即体验</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useScroll } from '~/hooks/use-scroll'
import type { NavItem } from './home/types'

const emits = defineEmits<{
  'item-click': [item: NavItem]
}>()

const { isScrolled } = useScroll(60)

const navList = ref<NavItem[]>([
  { title: '首页', targetRef: 'heroRef' },
  { title: '功能介绍', targetRef: 'featureRef' },
  { title: '使用技术', targetRef: 'techRef' },
])

const onNavItemClick = (item: NavItem) => {
  emits('item-click', item)
}
</script>
<style scoped lang="scss">
/* 导航栏样式 - 沉浸式导航 */
.navbar {
  @apply bg-transparent fixed top-0 left-0 right-0 bottom-0 z-999 h-[80px];
  transition: all 0.8s ease;

  &.scrolled {
    @apply bg-white text-[#333] opacity-70;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    .logo {
      color: var(--wm-color-primary) !important;
    }
  }

  .container {
    @apply flex items-center justify-between h-full;
  }

  .left {
    @apply flex-1 flex items-center;

    .logo {
      @apply flex items-center mr-20 text-20px font-700;
      color: var(--wm-color-primary-light-7);
      img {
        @apply h-40px mr-8px;
      }
    }

    .nav-list {
      @apply flex;
    }
  }
}

.nav-item {
  @apply relative mr-40px;
}

.nav-link {
  @apply block py-10px px-0 text-white decoration-none relative text-16px font-500 cursor-pointer;
  transition: all 0.3s ease;
}

.navbar.scrolled .nav-link {
  @apply text-[#333];
}

.nav-link:hover {
  @apply text-white;
  opacity: 0.9;
}

.navbar.scrolled .nav-link:hover {
  color: #1c9399;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.8s ease;
}

.navbar.scrolled .nav-link::after {
  background-color: #1c9399;
}

.nav-link:hover::after {
  width: 100%;
}

/* 登录注册按钮在透明导航时的样式 */
.navbar .btn-login {
  color: white;
}

.navbar.scrolled .btn-login {
  color: #666;
}

.navbar .btn-register {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
}

.navbar.scrolled .btn-register {
  background-color: #1c9399;
  color: white;
  border: none;
}

.nav-link:hover {
  color: #1c9399;
}

/* 登录注册按钮在透明导航时的样式 */
.navbar .btn-login {
  color: white;
}

.navbar.scrolled .btn-login {
  color: #666;
}

.navbar .btn-register {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
  font-weight: 800;
}

.navbar.scrolled .btn-register {
  background-color: #1c9399;
  color: white;
  border: none;
}
</style>
