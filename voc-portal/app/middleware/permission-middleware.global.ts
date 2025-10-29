import { useCoreStore } from '~/store/core'
const whiteList = ['/login', '/register']
export default defineNuxtRouteMiddleware((to) => {
  const coreStore = useCoreStore()
  const token = coreStore.token
  if (token) {
    if (whiteList.includes(to.path)) {
      return navigateTo('/')
    }
    return
  }
  if ([...whiteList, '/'].includes(to.path)) {
    return
  }
  return navigateTo('/login')
})
