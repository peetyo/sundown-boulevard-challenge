// import axios from 'axios';

const state = {
  dish: {},
  drinks: [],
  date: null,
  numberOfGuests: 0,
  email: ''
};

const actions = {

  async addDish({commit}, objDish) {
    commit('newDish', objDish);
  },
  async addDrinks({commit}, arrDrinks) {
    commit('newDrinks', arrDrinks);
  },
  async addBookingDetails({commit}, objBookingDetails) {
    console.log(objBookingDetails)
    commit('newBookingDetails', objBookingDetails);
  }  

  // continue with the rest of the properties
};

const mutations = {
  newDish: (state, dish) => (state.dish = dish),
  newDrinks: (state, drinks) => (state.drinks = drinks),
  newBookingDetails: (state, bookingDetails) => {
    state.date = bookingDetails.date;
    state.numberOfGuests = bookingDetails.numberOfGuests;
    state.email = bookingDetails.email;
  }
};

export default {
  state, // state: state ES6
  actions,
  mutations
};