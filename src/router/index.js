import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/index',
  component: () => import('../components/index/index.vue'),
}, {
  path: '/me',
  component: () => import('../components/me/me.vue')
}, {
  path: '/look/:id',
  component: () => import('../components/index/look.vue')
}]

const router = new VueRouter({
  routes
})

export default router