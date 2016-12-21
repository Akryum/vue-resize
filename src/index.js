import _ResizeObserver from './components/ResizeObserver.vue'

export function install (Vue) {
  Vue.component('resize-observer', _ResizeObserver)
}

export const ResizeObserver = _ResizeObserver

export default {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}
