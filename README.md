# vue-resize

[![npm](https://img.shields.io/npm/v/vue-resize.svg) ![npm](https://img.shields.io/npm/dm/vue-resize.svg)](https://www.npmjs.com/package/vue-resize)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Detect DOM element resizing

[Demo](https://akryum.github.io/vue-resize/) - [JSFiddle](https://jsfiddle.net/Akryum/zqygwf3r/)

<p>
  <a href="https://www.patreon.com/akryum" target="_blank">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
  </a>
</p>

## Sponsors

### Gold

<p align="center">
  <a href="https://www.sumcumo.com/en/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/570728242399674380/logo-sumcumo.png" alt="sum.cumo logo" width="400px">
  </a>
</p>

### Silver

<p align="center">
  <a href="https://vueschool.io/" target="_blank">
    <img src="https://vueschool.io/img/logo/vueschool_logo_multicolor.svg" alt="VueSchool logo" width="200px">
  </a>

  <a href="https://www.vuemastery.com/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267759130607630/Vue-Mastery-Big.png" alt="Vue Mastery logo" width="200px">
  </a>
</p>

### Bronze

<p align="center">
  <a href="https://vuetifyjs.com" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/537832759985700914/537832771691872267/Horizontal_Logo_-_Dark.png" width="100">
  </a>

  <a href="https://www.frontenddeveloperlove.com/" target="_blank" title="Frontend Developer Love">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267744249085953/frontend_love-logo.png" width="56">
  </a>
</p>

<br>

# Installation

```
npm install --save vue-resize
```

## Module import

**⚠️ You need to include the package CSS:**

```js
import 'vue-resize/dist/vue-resize.css'
```

Then import the package and install it into Vue:

```javascript
import Vue from 'vue'
import VueResize from 'vue-resize'

Vue.use(VueResize)
```

Or:

```javascript
import Vue from 'vue'
import { ResizeObserver } from 'vue-resize'

Vue.component('resize-observer', ResizeObserver)
```

## Browser

```html
<link rel="stylesheet" href="vue-resize/dist/vue-resize.css"/>

<script src="vue.js"></script>
<script src="vue-resize/dist/vue-resize.min.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually:

```javascript
Vue.use(VueResize)
```

Or:

```javascript
Vue.component('resize-observer', VueResize.ResizeObserver)
```

# Usage

Add the `<resize-observer>` inside a DOM element and make its position to something other than `'static'` (for example `'relative'`), so that the observer can fill it.

Listen to the `notify` event that is fired when the above DOM element is resized.

# Example

```html
<template>
  <div class="demo">
    <h1>Hello world!</h1>
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
export default {
  methods: {
    handleResize ({ width, height }) {
      console.log('resized', width, height)
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
