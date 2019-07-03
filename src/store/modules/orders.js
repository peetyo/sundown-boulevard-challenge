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
    // GET request to fetch all orders and save them in local storage
      // The axios code is a placeholder since the endpoint does not exist
      // axios.get('/orders')
      // .then(res => {
      //   localStorage.setItem("orders", JSON.stringify(res.data));
      // })
      // .catch(err => console.log(err))
    // I use the localstorage instead to get all orders
      const response = {data: []}
      response.data = JSON.parse(localStorage.getItem("orders"))

    commit('setOrders', response.data);
  },
  async addOrder({commit}, newOrder) {
    console.log('add order')
    // const response = await axios.post('/orders', newOrder);
    const response = {data: {...newOrder,
      id: uuid.v4()} } // Using uuid to create a unique id manually. In a real world scenario the backend would create one automatically.
    commit('newOrder', response.data);
  } 
};

const mutations = {
  setOrders: (state, orders) => (state.orders = orders),
  newOrder: (state, newOrder) => {
    state.orders.unshift(newOrder);
    
    localStorage.setItem("orders", JSON.stringify(state.orders));
  }
};

export default {
  state, // state: state ES6
  getters,
  actions,
  mutations
};