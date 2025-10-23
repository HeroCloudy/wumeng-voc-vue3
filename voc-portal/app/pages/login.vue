<template>
  <div class="h-full flex flex-col items-center justify-center w-600px mx-auto">
    <header-nav :scrolled="true" />
    <div class="text-3xl flex items-center font-700 mb-32px text-[#666]">
      <span>用户登录</span>
    </div>
    <el-form
      ref="formRef"
      :model="form"
      :validate-on-rule-change="false"
      class="login-register-form"
      size="large"
    >
      <el-form-item
        prop="username"
        :rules="[
          { required: true, message: '请输入账号' },
          { type: 'string', min: 5, max: 20, message: '账号长度在 5-20 之间' },
          { pattern: /^\w+$/, message: '账号只能是字母、数字、下划线' },
        ]"
      >
        <el-input v-model="form.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item
        prop="password"
        :rules="[
          { required: true, message: '请输入密码' },
          { type: 'string', min: 5, max: 20, message: '密码长度在 5-20 之间' },
        ]"
      >
        <el-input type="password" v-model="form.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.rememberMe" label="记住我" size="large" />
      </el-form-item>
      <div class="text-center mt-5">
        <div>
          <el-button class="w-full" type="primary" @click="onSubmit" :loading="loading">
            登 录
          </el-button>
        </div>
        <p class="mt-20px text-[#666] text-14px flex items-center justify-center">
          没有账户？<el-button type="primary" link @click="router.push('/register')"
            >立即注册</el-button
          >
        </p>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
// import { PATH_MANAGE_INDEX, PATH_REGISTER } from '@/router'
import type { FormInstance } from 'element-plus'
// import { useRequest } from '@/hooks/use-request.ts'
// import { loginService } from '@/service/user.ts'
// import { useCoreStore } from '@/stores/modules/core.ts'

const router = useRouter()
const form = ref<Record<string, any>>({
  username: '',
  password: '',
  rememberMe: true,
})

const formRef = useTemplateRef<FormInstance>('formRef')

// const coreStore = useCoreStore()

onMounted(() => {
  const { username, password } = getUserInfoFromStorage()
  if (username && password) {
    form.value.username = username
    form.value.password = password
  }
})

const loading = ref<boolean>(false)

// const { loading, run: onLogin } = useRequest(() => loginService(form.value), {
//   manual: true,
//   onSuccess(v) {
//     coreStore.setToken(v?.token ?? '')
//     router.push(PATH_MANAGE_INDEX)
//   },
// })

const onSubmit = async () => {
  const valid = await formRef.value?.validate()
  if (!valid) {
    return
  }

  console.log(form.value)
  const { username, password, rememberMe } = form.value
  if (rememberMe) {
    rememberUser(username, password)
  } else {
    forgetUser()
  }
  // onLogin()
}

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}
const forgetUser = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}
const getUserInfoFromStorage = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  }
}
</script>
