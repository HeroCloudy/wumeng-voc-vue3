import WmVocTextarea from './index.vue'
import WmVocTextareaPropForm from './prop-form.vue'
import type { ComponentConfig } from '../types.ts'
import { defaultProps } from './props.ts'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocTextarea', WmVocTextarea)
withInstall('WmVocTextareaPropForm', WmVocTextareaPropForm)

export default WmVocTextarea

export const WmVocTextareaInfo: ComponentConfig = {
  type: 'textarea',
  title: '多行输入框',
  component: WmVocTextarea,
  defaultProps,
  propComponent: WmVocTextareaPropForm,
}

export { WmVocTextarea, WmVocTextareaPropForm }
