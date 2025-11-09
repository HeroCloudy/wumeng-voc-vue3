import WmVocTextarea from './index.vue'
import WmVocTextareaPropForm from './prop-form.vue'
import type { ComponentConfig } from '../types.ts'
import { defaultProps } from './props.ts'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocTextarea', WmVocTextarea)
withInstall('WmVocTextareaPropForm', WmVocTextareaPropForm)

export default WmVocTextarea

export const WmVocTextareaConfig: ComponentConfig = {
  type: 'textarea',
  title: '多行输入框',
  category: 'input',
  icon: 'mdi:form-textarea',
  component: WmVocTextarea,
  defaultProps,
  propComponent: WmVocTextareaPropForm,
}

export { WmVocTextarea, WmVocTextareaPropForm }
