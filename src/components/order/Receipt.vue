<template>
  <div class="receipt container">
    <div class="custom-card">
      <h4>Your Receipt</h4>
      <ul>
        <li>Email: {{ order.email }}</li>
        <li>Number of Guests: {{ order.numberOfGuests }}</li>
        <li>Dish: {{ order.dish.name }}</li>
        <li>Drinks: 
          <ul>
            <li v-for="drink of order.drinks" :key="drink.id">{{ drink.name }}</li>
          </ul>
        </li>
        <li>Date: {{ order.date }}</li>
      </ul>
      <div class="text-right">
        <b-button href="#/" variant="primary">Back to home</b-button>
      </div>
    </div>
  </div>
</template>

<script>


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
  }
}
</script>
