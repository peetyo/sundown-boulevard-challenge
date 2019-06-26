import Vuex from 'vuex';
import Vue from 'vue';
import newOrder from './modules/newOrder';
import orders from './modules/orders';

// Load Vuex
Vue.use(Vuex);
Vue.config.devtools = true

// Create store
export default new Vuex.Store({
  modules: {
    newOrder,
    orders
  }
});