<template>
  <Order parent="UpdateOrder" ref="orderComponent"/>
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