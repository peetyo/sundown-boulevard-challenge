import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import Home from './views/Home.vue'
import Order from './views/Order.vue'
import UpdateOrder from './views/UpdateOrder.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/update-order',
      name: 'update-order',
      component: UpdateOrder,
      // if the user navigates to the update order view by mistake
      // they will be redirected to home
      beforeEnter: (to, from, next) => {
        if(store.state.newOrder.id){
          next();
        }else{
          next('/')
        }
      }
    },
    {
      path: '**',
      name: 'NotFound',
      component: NotFound
    }
  ]
})