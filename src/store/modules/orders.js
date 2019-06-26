// import axios from 'axios';
import uuid from 'uuid';

const state = {
  orders: [
    {id: 1,
    dish: "abc"},
    {id: 2,
      dish: "efg"},
  ]
};

const getters = {
  allOrders: state => state.orders
};

const actions = {
  async fetchOrders({ commit }) {
    // const response = await axios.get('/orders')
    // 
    // console.log(response.data)
    const response = {data: []}
    commit('setOrders', response.data);
  },
  async addOrder({commit}, newOrder) {
    // const response = await axios.post('/orders', newOrder);
    const response = {data: {...newOrder,
      id: uuid.v4()} }
    commit('newOrder', response.data);
  } 
};

const mutations = {
  setOrders: (state, orders) => (state.orders = orders),
  newOrder: (state, newOrder) => state.todos.unshift(newOrder)
};

export default {
  state, // state: state ES6
  getters,
  actions,
  mutations
};