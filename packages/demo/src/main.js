import 'vue-resize/dist/vue-resize.css'
import { createApp, h } from 'vue'
import Resize, { install, ResizeObserver } from 'vue-resize'
import App from './App.vue'

const app = createApp({
  render: () => h(App),
})

app.use(Resize)

console.log(Resize, install, ResizeObserver)

app.mount('#app')
