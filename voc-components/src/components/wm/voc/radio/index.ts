import WmVocRadio from './index.vue'
import WmVocRadioPropForm from './prop-form.vue'
import type { ComponentConfig } from '../types.ts'
import { defaultProps } from './props.ts'
import Stat from './stat.vue'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocRadio', WmVocRadio)
withInstall('WmVocRadioPropForm', WmVocRadioPropForm)

export default WmVocRadio

export const WmVocRadioConfig: ComponentConfig = {
  type: 'radio',
  title: '单选框',
  component: WmVocRadio,
  defaultProps,
  propComponent: WmVocRadioPropForm,
  statComponent: Stat,
}

export { WmVocRadio, WmVocRadioPropForm }
