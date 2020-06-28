import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/insure',
    name: 'insure',
    component: () => import( /* webpackChunkName: "insure" */ '../views/insure/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/login/index.vue')
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