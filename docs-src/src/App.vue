<template>
  <div id="app">
    <div class="counter">Resize: {{ count }}</div>
    <div class="resized">
      <textarea></textarea>
      <resize-observer @notify="handleResize"></resize-observer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      count: 0,
    }
  },

  methods: {
    handleResize () {
      this.count ++
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.counter {
  font-size: 42px;
  color: #42b983;
}

.resized {
  position: relative;
  border: solid 1px #42b983;
  margin: 12px;
  padding: 12px;
  display: inline-block;
}
</style>
