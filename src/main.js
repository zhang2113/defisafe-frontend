import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from "./util"

import { Select } from 'element-ui';

Vue.component(Select.name, Select);
// Vue.component(Input.name, Input);
// Vue.component(Option.name, Option);
// Vue.component(Dialog.name, Dialog);
// Vue.use(Loading.directive);
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msg = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$prompt = MessageBox.prompt;

let web3 = util.initWeb3(null);

Vue.prototype.$web3 = web3;
Vue.prototype.$util = util;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
