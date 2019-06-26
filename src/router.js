import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoadDish from './views/LoadDish.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/load-dish',
      name: 'loadDish',
      component: LoadDish
    },
  ]
})
