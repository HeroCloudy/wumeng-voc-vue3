import WmVocFormCore from './core.vue'
import WmVocFormPro from './pro.vue'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocFormCore', WmVocFormCore)
withInstall('WmVocFormPro', WmVocFormPro)

export { WmVocFormCore, WmVocFormPro }
