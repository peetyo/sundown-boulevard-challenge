const state = {
  dish: {},
  drinks: [],
  date: null,
  numberOfGuests: 0,
  email: ''
};

const actions = {

  addDish({commit}, objDish) {
    commit('newDish', objDish);
  },
  addDrinks({commit}, arrDrinks) {
    commit('newDrinks', arrDrinks);
  },
  addBookingDetails({commit}, objBookingDetails) {
    commit('newBookingDetails', objBookingDetails);
  },
  clearNewOrder({commit}) {
    commit('clearOrder');
  },
  addOrderToUpdate({commit}, objOrder) {
    commit('orderToUpdate', objOrder);
  },
  // continue with the rest of the properties
};

const mutations = {
  newDish: (state, dish) => (state.dish = dish),
  newDrinks: (state, drinks) => (state.drinks = drinks),
  newBookingDetails: (state, bookingDetails) => {
    state.date = bookingDetails.date;
    state.numberOfGuests = bookingDetails.numberOfGuests;
    state.email = bookingDetails.email;
  },
  clearOrder: (state) => {
    state.dish = {};
    state.drinks = [];
    state.date = null;
    state.numberOfGuests = 0;
    state.email = '';
  },
  orderToUpdate: (state, orderToUpdate) => {
    // state = {...state, orderToUpdate}
    state.dish = orderToUpdate.dish;
    state.drinks = orderToUpdate.drinks;
    state.date = orderToUpdate.date;
    state.numberOfGuests = orderToUpdate.numberOfGuests;
    state.email = orderToUpdate.email;
    state.id = orderToUpdate.id;
  }
};

export default {
  state, // state: state ES6
  actions,
  mutations
};