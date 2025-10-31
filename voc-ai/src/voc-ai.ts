import { WmAiChat } from './components/wm/ai/chat'
import type { App } from 'vue'

const components = [WmAiChat]

export default {
  install: (app: App): void => {
    console.log('------ install AI component -----')
    components.forEach((component: any) => {
      app.use(component)
    })
  },
}

export { WmAiChat }
