import WmAiChat from './index.vue'
import WmAiChatDialog from './dialog.vue'
import WmAiContent from './content.vue'
import WmAiInputSend from './input-send.vue'
import type { App } from 'vue'

/**
 * 给组件添加 install 方法
 */
export function withInstall(name: string, component: any) {
  component.install = (app: App) => {
    app.component(name, component)
  }
}

withInstall('WmAiChat', WmAiChat)
withInstall('WmAiChatDialog', WmAiChatDialog)
withInstall('WmAiContent', WmAiContent)
withInstall('WmAiInputSend', WmAiInputSend)

export { WmAiChat, WmAiChatDialog, WmAiContent, WmAiInputSend }
