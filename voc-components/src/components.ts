import type { App, Component } from 'vue'
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
import type { ComponentConfig } from '@/components/wm/voc/types.ts'

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

const allConfigList = [
  WmVocInfoConfig,
  WmVocInputConfig,
  WmVocTitleConfig,
  WmVocTextareaConfig,
  WmVocParagraphConfig,
  WmVocRadioConfig,
  WmVocCheckboxConfig,
]
const vocComponentTypeMap: Record<string, Component> = {}
allConfigList.forEach((component: ComponentConfig) => {
  vocComponentTypeMap[component.type] = component.component
})

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

  // voc 客户端组件类型map
  vocComponentTypeMap,
}

export * from '@/components/wm/voc/types'

// export default WmVocUi
