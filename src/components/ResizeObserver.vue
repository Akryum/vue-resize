<template>
  <div class="resize-observer" tabindex="-1"></div>
</template>

<script>
export default {
  name: 'resize-observer',

  methods: {
    notify () {
      this.$emit('notify')
    },

    addResizeHandlers () {
      this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.notify)
      if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
        this.notify()
      }
    },

    removeResizeHandlers () {
      if (this._resizeObject && this._resizeObject.onload) {
        if (this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.notify)
        }
        delete this._resizeObject.onload
      }
    },
  },

  mounted () {
    this.$nextTick(() => {
      this._w = this.$el.offsetWidth
      this._h = this.$el.offsetHeight
    })
    const isIE = navigator.userAgent.match(/Trident/) === 'Trident'
    const object = document.createElement('object')
    this._resizeObject = object
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;')
    object.onload = this.addResizeHandlers
    object.type = 'text/html'
    if (isIE) {
      this.$el.appendChild(object)
    }
    object.data = 'about:blank'
    if (!isIE) {
      this.$el.appendChild(object)
    }
  },

  beforeDestroy () {
    this.removeResizeHandlers()
  },
}
</script>

<style scoped>
.resize-observer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  pointer-events: none;
  display: block;
  overflow: hidden;
}
</style>
