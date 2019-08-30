import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Apply from './views/Apply.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Sponsor from './views/Sponsor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: Sponsor
    }
  ]
})
