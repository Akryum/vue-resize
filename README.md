# vue-resize

[![npm](https://img.shields.io/npm/v/vue-resize.svg) ![npm](https://img.shields.io/npm/dm/vue-resize.svg)](https://www.npmjs.com/package/vue-resize)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Detect DOM element resizing

# Installation

```
npm install --save vue-resize
```

# Usage

```
import Vue from 'vue'
import VueResize from 'vue-resize'

Vue.use(VueResize)
```

```
import Vue from 'vue'
import { ResizeObserver } from 'vue-resize'

Vue.component('resize-observer', ResizeObserver)
```

```
import 'vue-resize/dist/test.css'
import VueResize from 'vue-resize/dist/test'

Vue.use(VueResize)
```

Add the `<resize-observer>` inside a DOM element and make its position to something other than `'static'` (for example `'relative'`), so that the observer can fill it.

Listen to the `notify` event that is fired when the above DOM element is resized.

# Example

```
<template>
  <div class="demo">
    <h1>Hello world!</h1>
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
export default {
  methods: {
    handleResize () {
      console.log('resized')
    }
  }
}
</script>

<style scoped>
.demo {
  position: relative;
}
</style>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
