import '../../dist/vue-resize.css'
import Vue from 'vue'
import Resize, { install, ResizeObserver } from '../../'
import App from './App.vue'

Vue.use(Resize)

console.log(Resize, install, ResizeObserver)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App),
})
