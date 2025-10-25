import WmHelloWorld from '@/components/hello-world'
import type { App } from 'vue'

const components = [WmHelloWorld]

export default {
  install: (app: App): void => {
    console.log('------ install component -----')
    components.forEach((component: any) => {
      app.use(component)
    })
  },
}

export { WmHelloWorld }

// export default WmVocUi
