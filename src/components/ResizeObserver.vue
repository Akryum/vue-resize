<template>
  <iframe class="resize-observer" tabindex="-1"></iframe>
</template>

<script>
export default {
  name: 'resize-observer',

  methods: {
    notify () {
      this.$emit('notify')
    },

    addResizeHandlers () {
      const iframe = this.$el
      const w = iframe.contentWindow
      // If the iframe is re-attached to the DOM, the resize listener is removed because the
      // content is reloaded, so make sure to install the handler after the iframe is loaded.
      iframe.addEventListener('load', this.refreshResizeHandlers)
      if (w) {
        w.addEventListener('resize', this.notify)
        w.addEventListener('close', this.removeResizeHandlers)
      }
    },

    removeResizeHandlers () {
      const iframe = this.$el
      const w = iframe.contentWindow
      iframe.removeEventListener('load', this.refreshResizeHandlers)
      if (w) {
        w.removeEventListener('resize', this.notify)
        w.removeEventListener('close', this.removeResizeHandlers)
      }
    },

    refreshResizeHandlers () {
      this.removeResizeHandlers()
      this.addResizeHandlers()
      // The iframe size might have changed while loading, which can also
      // happen if the size has been changed while detached from the DOM.
      this.notify()
    },
  },

  mounted () {
    this.addResizeHandlers()
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
}
</style>
