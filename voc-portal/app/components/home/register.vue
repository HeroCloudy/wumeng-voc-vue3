<!--
 @name: register.vue
 @description: 首页-注册区域
 @author: 程序员优雅哥 youyacoder
 @time: 2025/10/23 16:24
-->
<template>
  <section class="register">
    <div class="container">
      <div class="register-content">
        <h2 class="title">立即注册，开始免费使用</h2>
        <p class="desc">300万+用户的共同选择，专业的在线问卷解决方案</p>

        <el-form ref="formRef" :model="form" class="register-form" size="large">
          <el-form-item
            prop="username"
            :rules="[
              { required: true, message: '请输入账号' },
              { type: 'string', min: 5, max: 20, message: '账号长度在 5-20 之间' },
              { pattern: /^\w+$/, message: '账号只能是字母、数字、下划线' },
            ]"
          >
            <el-input v-model="form.username" placeholder="请输入注册账号" />
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="[
              { required: true, message: '请输入密码' },
              { type: 'string', min: 5, max: 20, message: '密码长度在 5-20 之间' },
            ]"
          >
            <el-input v-model="form.password" type="password" placeholder="请设置密码" />
          </el-form-item>
          <el-form-item
            prop="confirm"
            :rules="[
              { required: true, message: '请输入确认密码' },
              {
                validator: (rule, value, callback) => {
                  if (!value) {
                    callback(new Error('请输入确认密码'))
                  } else if (value !== form.password) {
                    callback(new Error('两次密码不一致'))
                  } else {
                    callback()
                  }
                },
              },
            ]"
          >
            <el-input v-model="form.confirm" type="password" placeholder="请确认密码" />
          </el-form-item>
          <el-form-item
            prop="nickname"
            :rules="[
              { required: true, message: '请输入昵称' },
              { type: 'string', min: 3, max: 20, message: '昵称长度在 3-20 之间' },
            ]"
          >
            <el-input v-model="form.nickname" placeholder="请输入昵称" />
          </el-form-item>
          <div class="text-center mt-5">
            <div>
              <el-button type="primary" class="w-full" :loading="loading" @click="onSubmit">
                立即注册
              </el-button>
            </div>
            <p class="mt-20px text-[#666] text-14px flex items-center justify-center">
              已有账号？<a href="#"
                ><el-button type="primary" link @click="router.push('/login')"
                  >立即登录</el-button
                ></a
              >
            </p>
          </div>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'

const router = useRouter()
const form = ref({
  username: '',
  password: '',
  confirm: '',
  nickname: '',
})

const formRef = useTemplateRef<FormInstance>('formRef')

const loading = ref(false)

// const { loading, run: onRegister } = useRequest(() => registerService(form.value), {
//   manual: true,
//   onSuccess(v: any) {
//     console.log(v)
//     ElMessage.success('注册成功')
//     router.push('/')
//   },
// })

const onSubmit = async () => {
  const valid = await formRef.value?.validate()
  if (!valid) {
    return
  }
  console.log(form.value)
  // onRegister()
}
</script>
<style scoped lang="scss">
/* 注册区域样式 */
.register {
  @apply pt-90px pb-90px text-white;
  background: linear-gradient(135deg, #1c9399 0%, #29b0b7 100%);
  color: white;

  .register-content {
    @apply max-w-[600px] mx-auto text-center;

    .title {
      @apply text-32px font-700 mb-20px;
    }

    .desc {
      @apply text-18px mb-40px;
      opacity: 0.9;
    }
  }
}

.register-form {
  @apply bg-white p-40px rd-[8px];
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
</style>
