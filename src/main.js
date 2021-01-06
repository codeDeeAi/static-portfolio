import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Require Bootstrap
const bootstrap = require('bootstrap')

// Require JQuery
// var $ = require("jquery")

// Vue.use($)

Vue.use(bootstrap)

// Import Index.css
import './index.css'

// Import Popper Js
import { createPopper } from '@popperjs/core';

Vue.use(createPopper)

new Vue({
    render: h => h(App),
}).$mount('#app')