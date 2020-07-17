import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from "./util"
import './libs/element.js'
Vue.prototype.$util = util;
Vue.config.productionTip = false

//language
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./language/zh'),   // 中文语言包
    'en': require('./language/en')    // 英文语言包
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
