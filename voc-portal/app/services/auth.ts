import { req } from '~/composables/http'

export class AuthService {
  register(userInfo: Record<string, any>) {
    return req({
      url: '/auth/register',
      method: 'post',
      body: userInfo,
    })
  }

  login(userInfo: Record<string, any>) {
    return req({
      url: '/auth/login',
      method: 'post',
      body: userInfo,
    })
  }

  getUserInfo(): any {
    return req({
      url: '/auth/profile',
      method: 'get',
    })
  }
}

export const authService = new AuthService()
