import HelloWorld from './index.vue'
import type { App } from 'vue'

HelloWorld.install = (app: App) => {
  app.component(HelloWorld.name!, HelloWorld)
}

export default HelloWorld
