<template>
  <div id="find-order" class="custom-card h-100">
    <h4>Find order</h4>
    <p>Review or update your order.</p>
    <div v-if="notFound" class="alert alert-dark" role="alert">
      Order not found. Did you write your email correctly?
    </div>

    <b-form v-on:submit="findOrder" class="justify-content-center">
      <b-form-group
        id="input-email-group"
        label="Email address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="email"
          type="email"
          required
          placeholder="Enter Email"
        ></b-form-input>
      </b-form-group>
      <div class="text-right">
        <b-button type="submit" variant="primary">Find</b-button>
      </div>
    </b-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { setInterval } from 'timers';

export default {
  name: 'FindOrder',
  data(){
    return{
      email: '',
      notFound: false
    }
  },
  methods: {
    ...mapActions(['fetchOrders','addOrderToUpdate']),
    findOrder(event){
      event.preventDefault();
      // console.log(this.email);
      // fetching again to make sure we have the updated list before search
      this.fetchOrders();
        
      const order = this.$store.state.orders.orders.filter(order => order.email === this.email)
      if(order.length> 0){
        this.addOrderToUpdate(order[0]);
        this.$router.push({path: 'update-order'});
      } else {
        // TODO: Add vue transitions
        this.notFound = true;
        setInterval(()=>{this.notFound= false}, 5000);
      }
    }
  }
}
</script>

<style scoped>

</style>
