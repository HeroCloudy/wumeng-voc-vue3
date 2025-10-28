import WmVocFormCore from './core.vue'
import WmVocFormPro from './pro.vue'
import WmVocFormError from './error.vue'
import { withInstall } from '@/utils/with-install.ts'

withInstall('WmVocFormCore', WmVocFormCore)
withInstall('WmVocFormPro', WmVocFormPro)
withInstall('WmVocFormError', WmVocFormError)

export { WmVocFormCore, WmVocFormPro, WmVocFormError }
