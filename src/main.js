import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from "./util"

import './libs/element.js'

let web3 = util.initWeb3(null);
Vue.prototype.$web3 = web3;
Vue.prototype.$util = util;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
