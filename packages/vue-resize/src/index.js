import ResizeObserver from './components/ResizeObserver.vue'

// Install the components
export function install (Vue) {
  // eslint-disable-next-line vue/component-definition-name-casing
  Vue.component('resize-observer', ResizeObserver)
  Vue.component('ResizeObserver', ResizeObserver)
}

export {
  ResizeObserver,
}

// Plugin
const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin
