<template>
  <div id="update-order">
    <h4>Update Order</h4>
    <Order parent="UpdateOrder" ref="orderComponent"/>
  </div>
</template>

<script>
import Order from './Order.vue'
import { mapActions } from 'vuex';

export default {
  name: 'UpdateOrder',
  components: {
    Order
  },
  data() {
    return {
      currentComponent: 'LoadDish'
    }
  },
  beforeRouteLeave(to,from, next){
    if(this.$refs.orderComponent.currentComponent != 'Receipt'){
      const answer = window.confirm("Are you sure? Leaving this page, would mean losing your changes.");
      if(answer){
        next();
      } else {
        next(false);
      }
    }else{
      next();
    }
  },
  destroyed(){
    this.clearNewOrder();
  },
  methods: {
    ...mapActions(['clearNewOrder'])
  }
}
</script>
<style>
  #update-order>h4{
    text-align: center;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
</style>
