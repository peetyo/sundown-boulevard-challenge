<template>
  <div class="receipt container">
    <div class="custom-card">
      <h4>Your Order</h4>
      <ul id="order-details" class="mb-5">
        <li> <span>Your Email:</span></li>
        <li>{{ order.email }}</li>
        <li> <span>Date and Time:</span> </li>
        <li>{{ order.date | formatDate }}</li>
        <li> <span>Number of Guests:</span> </li>
        <li class="mb-3">{{ order.numberOfGuests }}</li>
        <li> <span>Dish:</span>  </li>
        <li>{{ order.dish.name }}</li>
        <li> <span>Drinks:</span> 
          <ul>
            <li v-for="drink of order.drinks" :key="drink.id">{{ drink.name }}</li>
          </ul>
        </li>
      </ul>
      <div class="text-right">
        <b-button href="#/" variant="primary">Back to home</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  name: 'home',
  data() {
    return {
      order: {}
    }
  },
  methods:{
    // TODO: Do this before "find order"
    getNewOrder(){
      this.order = this.$store.state.newOrder;
    }
  },
  created(){
    this.getNewOrder();
  },
  filters: {
  formatDate: function (date) {
    date = DateTime.fromISO(date).toFormat('DDDD T');
      return date
    }
  }, 
}
</script>

<style>
  .receipt.container{
    max-width: 600px;
  }
  #order-details{
    list-style: none;
  }
  #order-details ul{
    color: #2c3e50;;
    list-style-type: square;
  }
  #order-details > li:nth-child(odd){
    color: #C6C6C6;
  }
  #order-details > li:nth-child(even){
    margin-bottom: .5rem;
  }
  @media only screen and (max-width: 576px) {
  #order-details{
    padding-left: 0;
  }
}
</style>

