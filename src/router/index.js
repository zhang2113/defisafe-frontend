import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( /* webpackChunkName: "user" */ '../views/user.vue')
  },
  {
    path: '/rule',
    name: 'rule',
    component: () => import( /* webpackChunkName: "rule" */ '../views/rule.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/login.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from) => {

})

export default router