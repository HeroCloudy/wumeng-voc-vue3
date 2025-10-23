<!--
 @name: back-top-btn.vue
 @description: 返回顶部按钮
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/23 10:43
-->
<template>
  <button :class="['back-top-btn', isScrolled ? 'show' : '']" @click="onBtnClick">
    <icon name="fa:arrow-up" />
  </button>
</template>

<script setup lang="ts">
import { useScroll } from '~/hooks/use-scroll'

const { isScrolled } = useScroll(300)

const onBtnClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
<style scoped lang="scss">
.back-top-btn {
  @apply fixed bottom-[30px] right-[30px] w-[48px] h-[48px] bg-[var(--wm-color-primary)] text-white rd-[50%] cursor-pointer text-[20px];
  border: none;
  box-shadow: 0 4px 12px var(--wm-color-primary-light-3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  z-index: 999;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    @apply bg-[var(--wm-color-primary-light-3)];
    transform: translateY(-5px);
  }
}
</style>
