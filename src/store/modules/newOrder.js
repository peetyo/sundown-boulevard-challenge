// import axios from 'axios';

const state = {
  dish: {},
  drinks: [],
  timestamp: null,
  numberOfGuests: 0,
  email: ''
};

// const getters = {
//   allOrders: state => state.orders
// };

const actions = {

  async addDish({commit}, objDish) {
    console.log('x')
    commit('newDish', objDish);
  },
  async addDrinks({commit}, arrDrinks) {
    commit('newOrder', arrDrinks);
  } 

  // continue with the rest of the properties
};

const mutations = {
  newDish: (state, dish) => (state.dish = dish),
  addDrinks: (state, drinks) => (state.drinks = drinks)
};

export default {
  state, // state: state ES6
  actions,
  mutations
};