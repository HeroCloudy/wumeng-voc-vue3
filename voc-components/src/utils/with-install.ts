import type { App } from 'vue'

/**
 * 给组件添加 install 方法
 */
export function withInstall(name: string, component: any) {
  component.install = (app: App) => {
    app.component(name, component)
  }
}
