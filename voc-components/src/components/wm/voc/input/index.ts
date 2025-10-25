import WmVocInput from './index.vue'
import WmVocInputPropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/wm/voc/types.ts'
import { defaultProps } from './props.ts'
import { withInstall } from '@/utils/with-install.ts'

export default WmVocInput

withInstall('WmVocInput', WmVocInput)
withInstall('WmVocInputPropForm', WmVocInputPropForm)

export const WmVocInputConfig: ComponentConfig = {
  type: 'input',
  title: '输入框',
  component: WmVocInput,
  defaultProps,
  propComponent: WmVocInputPropForm,
}

export { WmVocInput, WmVocInputPropForm }
