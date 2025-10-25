import WmVocTitle from './index.vue'
import WmVocTitlePropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/wm/voc/types.ts'
import { defaultProps } from './props.ts'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocTitle', WmVocTitle)
withInstall('WmVocTitlePropForm', WmVocTitlePropForm)

export default WmVocTitle

export const WmVocTitleConfig: ComponentConfig = {
  type: 'title',
  title: '标题',
  component: WmVocTitle,
  defaultProps,
  propComponent: WmVocTitlePropForm,
}

export { WmVocTitle, WmVocTitlePropForm }
