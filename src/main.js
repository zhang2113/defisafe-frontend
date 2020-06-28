import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from "./util"

import './libs/element.js'
Vue.prototype.$util = util;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
