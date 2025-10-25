import type { App } from 'vue'
import WmHelloWorld from '@/components/hello-world'
import { WmVocInfo, WmVocInfoPropForm } from '@/components/wm/voc/info'
import { WmVocInput, WmVocInputPropForm } from '@/components/wm/voc/input'
import { WmVocTitle, WmVocTitlePropForm } from '@/components/wm/voc/title/index.ts'
import { WmVocTextarea, WmVocTextareaPropForm } from '@/components/wm/voc/textarea/index.ts'
import { WmVocParagraph, WmVocParagraphPropForm } from '@/components/wm/voc/paragraph/index.ts'

const components = [
  WmHelloWorld,
  WmVocInfo,
  WmVocInfoPropForm,
  WmVocInput,
  WmVocInputPropForm,
  WmVocTitle,
  WmVocTitlePropForm,
  WmVocTextarea,
  WmVocTextareaPropForm,
  WmVocParagraph,
  WmVocParagraphPropForm,
]

export default {
  install: (app: App): void => {
    console.log('------ install component -----')
    components.forEach((component: any) => {
      app.use(component)
    })
  },
}

export {
  WmHelloWorld,
  WmVocInfo,
  WmVocInfoPropForm,
  WmVocInput,
  WmVocInputPropForm,
  WmVocTitle,
  WmVocTitlePropForm,
  WmVocTextarea,
  WmVocTextareaPropForm,
  WmVocParagraph,
  WmVocParagraphPropForm,
}

// export default WmVocUi
