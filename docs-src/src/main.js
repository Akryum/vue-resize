import Vue from 'vue'
import Resize from '../../'

Vue.use(Resize)

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
