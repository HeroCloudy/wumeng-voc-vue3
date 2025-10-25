import type { App } from 'vue'
import WmHelloWorld from '@/components/hello-world'
import { WmVocInfo, WmVocInfoPropForm } from '@/components/wm/voc/info'
import { WmVocInput, WmVocInputPropForm } from '@/components/wm/voc/input'

const components = [WmHelloWorld, WmVocInfo, WmVocInput, WmVocInfoPropForm, WmVocInputPropForm]

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
