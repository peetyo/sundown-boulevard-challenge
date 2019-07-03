import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoadDish from './views/LoadDish.vue'
import SelectDrinks from './views/SelectDrinks.vue'
import SelectDate from './views/SelectDate.vue'
import Receipt from './views/Receipt.vue'

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
    },
    {
      path: '/select-date',
      name: 'selectDate',
      component: SelectDate
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt
    }
    // TODO: Add 404
  ]
})