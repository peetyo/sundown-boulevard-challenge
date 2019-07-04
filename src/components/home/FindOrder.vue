<template>
  <div id="find-order" class="custom-card h-100">
    <h4>Find your order</h4>
    <p>Review or update your order.</p>
    <div v-if="validation.error" class="alert alert-dark" role="alert">
      {{ validation.message }}
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
          placeholder="ENTER EMAIL"
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

export default {
  name: 'FindOrder',
  data(){
    return{
      email: '',
      notFound: false,
      validation: {
        error: false,
        message: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchOrders','addOrderToUpdate']),
    findOrder(event){
      event.preventDefault();
      let re = /\S+@\S+\.\S+/;
      if(re.test(this.email)){
        this.validation.error = false;
        this.validation.message = '';
        // fetching again to make sure we have the updated list before search
        this.fetchOrders();
        
        const order = this.$store.state.orders.orders.filter(order => order.email === this.email)
      if(order.length> 0){
        this.addOrderToUpdate(order[0]);
        this.$router.push({path: 'update-order'});
      } else {
        // TODO: Add vue transitions

        this.validation.error = true;
        this.validation.message = 'Order not found. Did you write your email correctly?';
      }} else {
        this.validation.error = true;
        this.validation.message = 'Please, enter valid email.';
      }

      
    }
  }
}
</script>

<style scoped>

</style>
