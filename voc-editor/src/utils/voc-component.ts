import {
  type ComponentConfig,
  WmVocTitleConfig,
  WmVocInputConfig,
  WmVocInfoConfig,
  WmVocTextareaConfig,
  WmVocParagraphConfig,
  WmVocCheckboxConfig,
  WmVocRadioConfig,
} from '@wumeng-voc-vue3/voc-components'

export const componentInfoList: ComponentConfig[] = [
  WmVocTitleConfig,
  WmVocInputConfig,
  WmVocParagraphConfig,
  WmVocInfoConfig,
  WmVocTextareaConfig,
  WmVocRadioConfig,
  WmVocCheckboxConfig,
]

const groupDisplay = [WmVocTitleConfig, WmVocParagraphConfig, WmVocInfoConfig]

const groupInput = [WmVocInputConfig, WmVocTextareaConfig, WmVocRadioConfig, WmVocCheckboxConfig]

export const componentGroup = [
  {
    groupName: '文本显示',
    components: groupDisplay,
  },
  {
    groupName: '用户输入',
    components: groupInput,
  },
]

export const UserInputTypes = groupInput.map((item) => item.type)

export const getComponentConfig = (type: string) =>
  componentInfoList.find((item) => item.type === type)

export const getComponent = (type: string) => getComponentConfig(type)?.component ?? null

export const isUserInputComponent = (type: string) => {
  return UserInputTypes.includes(type)
}
