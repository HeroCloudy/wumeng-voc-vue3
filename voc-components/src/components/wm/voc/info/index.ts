import WmVocInfo from './index.vue'
import WmVocInfoPropForm from './prop-form.vue'
import type { ComponentConfig } from '@/components/wm/voc/types.ts'
import { defaultProps } from './props.ts'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocInfo', WmVocInfo)
withInstall('WmVocInfoPropForm', WmVocInfoPropForm)

export default WmVocInfo

export const WmVocInfoConfig: ComponentConfig = {
  type: 'info',
  title: '问卷信息',
  category: 'display',
  icon: 'mdi:information-outline',
  component: WmVocInfo,
  defaultProps,
  propComponent: WmVocInfoPropForm,
}

export { WmVocInfo, WmVocInfoPropForm }
