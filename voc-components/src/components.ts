import type { App } from 'vue'
import WmHelloWorld from '@/components/hello-world'
import { WmVocInfo, WmVocInfoPropForm, WmVocInfoConfig } from '@/components/wm/voc/info'
import { WmVocInput, WmVocInputPropForm, WmVocInputConfig } from '@/components/wm/voc/input'
import {
  WmVocTitle,
  WmVocTitlePropForm,
  WmVocTitleConfig,
} from '@/components/wm/voc/title/index.ts'
import {
  WmVocTextarea,
  WmVocTextareaPropForm,
  WmVocTextareaConfig,
} from '@/components/wm/voc/textarea/index.ts'
import {
  WmVocParagraph,
  WmVocParagraphPropForm,
  WmVocParagraphConfig,
} from '@/components/wm/voc/paragraph/index.ts'
import {
  WmVocRadio,
  WmVocRadioPropForm,
  WmVocRadioConfig,
} from '@/components/wm/voc/radio/index.ts'

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
  WmVocRadio,
  WmVocRadioPropForm,
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
  WmVocRadio,
  WmVocRadioPropForm,

  // component config
  WmVocInfoConfig,
  WmVocInputConfig,
  WmVocTitleConfig,
  WmVocTextareaConfig,
  WmVocParagraphConfig,
  WmVocRadioConfig,
}

// export default WmVocUi
