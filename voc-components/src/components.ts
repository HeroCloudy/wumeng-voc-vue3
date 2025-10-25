import HelloWorld from '@/components/hello-world/index.vue'
import type { App } from 'vue'

const components = [HelloWorld]

const install = (app: App): void => {
  components.forEach((component: any) => {
    app.use(component)
  })
}

const WmVocUi = {
  install,
}

export { HelloWorld }

export default WmVocUi
