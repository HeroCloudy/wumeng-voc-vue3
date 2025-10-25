import WmVocCheckbox from './index.vue'
import WmVocCheckboxPropForm from './prop-form.vue'
import type { ComponentConfig } from '../types.ts'
import { defaultProps } from './props.ts'
import WmVocCheckboxStat from './stat.vue'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocCheckbox', WmVocCheckbox)
withInstall('WmVocCheckboxPropForm', WmVocCheckboxPropForm)
withInstall('WmVocCheckboxStat', WmVocCheckboxStat)

export default WmVocCheckbox

export const WmVocCheckboxConfig: ComponentConfig = {
  type: 'checkbox',
  title: '复选框',
  component: WmVocCheckbox,
  defaultProps,
  propComponent: WmVocCheckboxPropForm,
  statComponent: WmVocCheckboxStat,
}

export { WmVocCheckbox, WmVocCheckboxPropForm, WmVocCheckboxStat }
