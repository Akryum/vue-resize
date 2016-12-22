import Vue from 'vue'
import Resize, { install, ResizeObserver } from '../../'

Vue.use(Resize)

console.log(Resize, install, ResizeObserver)

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
