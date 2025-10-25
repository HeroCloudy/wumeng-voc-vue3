import type { App } from 'vue'
import WmHelloWorld from '@/components/hello-world'
import { WmVocInfo, WmVocInfoPropForm } from '@/components/wm/voc/info'
import { WmVocInput, WmVocInputPropForm } from '@/components/wm/voc/input'
import { WmVocTitle, WmVocTitlePropForm } from '@/components/wm/voc/title/index.ts'

const components = [
  WmHelloWorld,
  WmVocInfo,
  WmVocInfoPropForm,
  WmVocInput,
  WmVocInputPropForm,
  WmVocTitle,
  WmVocTitlePropForm,
]

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
