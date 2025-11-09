import WmVocRadio from './index.vue'
import WmVocRadioPropForm from './prop-form.vue'
import type { ComponentConfig } from '../types.ts'
import { defaultProps } from './props.ts'
import WmVocRadioStat from './stat.vue'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocRadio', WmVocRadio)
withInstall('WmVocRadioPropForm', WmVocRadioPropForm)
withInstall('WmVocRadioStat', WmVocRadioStat)

export default WmVocRadio

export const WmVocRadioConfig: ComponentConfig = {
  type: 'radio',
  title: '单选框',
  category: 'select',
  icon: 'mdi:radiobox-blank',
  component: WmVocRadio,
  defaultProps,
  propComponent: WmVocRadioPropForm,
  statComponent: WmVocRadioStat,
}

export { WmVocRadio, WmVocRadioPropForm, WmVocRadioStat }
