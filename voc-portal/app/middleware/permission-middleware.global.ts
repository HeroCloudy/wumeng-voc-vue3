import { useCoreStore } from '~/store/core'

const authList = ['/login', '/register']
const whiteList = [...authList, '/', '/square']

export default defineNuxtRouteMiddleware((to) => {
  const coreStore = useCoreStore()
  const token = coreStore.token
  if (token) {
    if (authList.includes(to.path)) {
      return navigateTo('/')
    }
    return
  }
  if (whiteList.includes(to.path)) {
    return
  }
  return navigateTo('/login')
})
