import { createApp } from 'vue'
import App from './App.vue'
import { installAssets } from '@/plugins/assets.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
installAssets()
app.mount('#app')
