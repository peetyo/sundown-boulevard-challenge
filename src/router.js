import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoadDish from './views/LoadDish.vue'
import SelectDrinks from './views/SelectDrinks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/select-dish',
      name: 'loadDish',
      component: LoadDish
    },
    {
      path: '/select-drinks',
      name: 'selectDrinks',
      component: SelectDrinks
    }
    // TODO: Add 404
  ]
})