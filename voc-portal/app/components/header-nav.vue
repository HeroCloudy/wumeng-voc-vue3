<!--
 @name: header-nav.vue
 @description: 首页顶部组件
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/22 20:57
-->
<template>
  <!-- 导航栏 -->
  <header :class="['navbar', isScrolled || scrolled ? 'scrolled' : '']">
    <div class="container">
      <div class="left">
        <nuxt-link href="/" class="logo">
          <img src="~/assets/images/logo.png" class="logo-img" />
          <span>WUMENG 问卷</span>
        </nuxt-link>
        <nav class="main-nav" v-show="!scrolled">
          <ul class="flex">
            <li class="nav-item" v-for="(item, index) in navList" :key="index">
              <a class="nav-link" @click="onNavItemClick(item)">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="navbar-right">
        <template v-if="userInfo">
          <nuxt-link href="/voc-list/list" class="btn btn-text">我的问卷</nuxt-link>
          <span @click="onLogoutBtnClick" class="btn btn-text">退出</span>
        </template>
        <template v-else-if="!scrolled">
          <nuxt-link href="/login" class="btn btn-text">登录</nuxt-link>
          <span href="#" class="btn btn-register" @click="onRegBtnClick">立即体验</span>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useScroll } from '~/hooks/use-scroll'
import { useCoreStore } from '~/store/core'
import type { NavItem } from './home/types'

const emits = defineEmits<{
  'item-click': [item: NavItem]
}>()

defineProps<{
  scrolled?: boolean
}>()

const router = useRouter()
const route = useRoute()
const coreStore = useCoreStore()

const userInfo = computed(() => coreStore.userInfo)

const { isScrolled } = useScroll(60)

const navList = ref<NavItem[]>([
  { title: '首页', targetRef: 'heroRef' },
  { title: '功能介绍', targetRef: 'featureRef' },
  { title: '使用技术', targetRef: 'techRef' },
  { title: '问卷广场', to: '/square' },
])

const onNavItemClick = async (item: NavItem) => {
  if (item.to) {
    if (route.path !== item.to) {
      router.push(item.to)
    }
  } else {
    if (route.path !== '/') {
      await router.push('/')
    }
    emits('item-click', item)
  }
}

const onRegBtnClick = () => {
  onNavItemClick({ title: '注册', targetRef: 'registerRef' })
}

const onLogoutBtnClick = () => {
  coreStore.logout()
  router.push('/')
}
</script>
<style scoped lang="scss">
/* 导航栏样式 - 沉浸式导航 */
.navbar {
  @apply bg-transparent fixed top-0 left-0 right-0 bottom-0 z-999 h-[80px];
  transition: all 0.8s ease;

  &.scrolled {
    @apply bg-white text-[#333] opacity-80;
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
  //@apply text-white !important;
  //opacity: 0.9;
}

.navbar.scrolled .nav-link:hover {
  color: var(--wm-color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.navbar.scrolled .nav-link::after {
  background-color: var(--wm-color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

/* 登录注册按钮在透明导航时的样式 */
.navbar .btn-text {
  color: white;
}

.navbar.scrolled .btn-text {
  color: #666;
}

.navbar .btn-register {
  @apply cursor-pointer text-white;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
}

.navbar.scrolled .btn-register {
  background-color: #1c9399;
  color: white;
  border: none;
}

/* 登录注册按钮在透明导航时的样式 */
.navbar .btn-text {
  color: white;
}

.navbar.scrolled .btn-text {
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
