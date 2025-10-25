import type { App } from 'vue'
import WmHelloWorld from '@/components/hello-world'
import { WmVocInfo, WmVocInfoPropForm, WmVocInfoConfig } from '@/components/wm/voc/info/index.ts'
import {
  WmVocInput,
  WmVocInputPropForm,
  WmVocInputConfig,
} from '@/components/wm/voc/input/index.ts'
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
  WmVocRadioStat,
  WmVocRadioConfig,
} from '@/components/wm/voc/radio/index.ts'
import {
  WmVocCheckbox,
  WmVocCheckboxPropForm,
  WmVocCheckboxStat,
  WmVocCheckboxConfig,
} from '@/components/wm/voc/checkbox/index.ts'

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
  WmVocRadioStat,
  WmVocCheckbox,
  WmVocCheckboxPropForm,
  WmVocCheckboxStat,
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
  WmVocRadioStat,
  WmVocCheckbox,
  WmVocCheckboxPropForm,
  WmVocCheckboxStat,

  // component config
  WmVocInfoConfig,
  WmVocInputConfig,
  WmVocTitleConfig,
  WmVocTextareaConfig,
  WmVocParagraphConfig,
  WmVocRadioConfig,
  WmVocCheckboxConfig,
}

// export default WmVocUi
