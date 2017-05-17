<template>
  <div id="app">
    <div class="counter">Resize: {{ count }}</div>
    <div>
      <button @click="show = !show">Toggle</button>
      <button @click="changeSize">Change CSS size</button>
    </div>
    <div class="resized" v-if="show">
      <textarea :style="{ width: `${width}px` }"></textarea>
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
      show: true,
      width: 300,
    }
  },

  methods: {
    handleResize () {
      this.count ++
      console.log('handle')
    },

    changeSize () {
      this.width = Math.round(Math.random() * 400) + 100
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
