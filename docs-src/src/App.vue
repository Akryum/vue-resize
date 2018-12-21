<template>
  <div id="app">
    <div class="counter">Resize: {{ count }}</div>
    <div>
      <button class="toggle" @click="show = !show">Toggle</button>
      <button class="change" @click="changeSize">Change CSS size</button>
    </div>
    <div class="resized" v-if="show">
      <textarea :style="{ width: `${width}px` }"></textarea>
      <resize-observer @notify="handleResize"/>
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
      this.count++
      console.log('handle')
    },

    changeSize () {
      this.width = Math.round(Math.random() * 400) + 100
    },
  },
}
</script>

<style lang="stylus">
$color = #42b983

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin-top 60px

.counter
  font-size 42px
  color $color

.resized
  position relative
  border solid 1px $color
  margin 12px
  padding @margin
  display inline-block
</style>
