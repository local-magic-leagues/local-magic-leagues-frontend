import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'current-route',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/join',
      name: 'Register',
      component: Register
    }
  ]
})
