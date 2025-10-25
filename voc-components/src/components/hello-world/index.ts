import WmHelloWorld from './index.vue'
import type { App } from 'vue'

WmHelloWorld.install = (app: App) => {
  app.component(WmHelloWorld.name!, WmHelloWorld)
}

export default WmHelloWorld
