import WmVocParagraph from './index.vue'
import WmVocParagraphPropForm from './prop-form.vue'
import type { ComponentConfig } from '../types.ts'
import { defaultProps } from './props.ts'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocParagraph', WmVocParagraph)
withInstall('WmVocParagraphPropForm', WmVocParagraphPropForm)

export default WmVocParagraph

export const WmVocParagraphConfig: ComponentConfig = {
  type: 'paragraph',
  title: '段落',
  category: 'display',
  icon: 'mdi:text-long',
  component: WmVocParagraph,
  defaultProps,
  propComponent: WmVocParagraphPropForm,
}

export { WmVocParagraph, WmVocParagraphPropForm }
