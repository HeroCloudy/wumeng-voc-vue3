import { createApp } from 'vue'
import App from './App.vue'
import { installAssets } from '@/plugins/assets.ts'

const app = createApp(App)
installAssets()
app.mount('#app')
