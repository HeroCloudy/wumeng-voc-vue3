import { createApp } from 'vue'
import App from './App.vue'
import { installStore } from '@/stores'
import { installRouter } from '@/router'
import { installAssets } from '@/plugins/assets.ts'

import WmVocUi from '@wumeng-voc-vue3/voc-components'
import '@wumeng-voc-vue3/voc-components/dist/voc-components.css'
import { installDraggable } from '@/plugins/draggable.ts'

const app = createApp(App)
installRouter(app)
installStore(app)
installAssets()
installDraggable(app)
app.use(WmVocUi)
app.mount('#app')
