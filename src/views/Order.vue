<template>
  <div class="order">
    <component v-bind:is="currentComponent" v-on:changeComponent="changeComponent" v-bind:parent="parent"></component>
  </div>
</template>

<script>
import LoadDish from '@/components/order/LoadDish.vue'
import SelectDrinks from '@/components/order/SelectDrinks.vue'
import Reservation from '@/components/order/Reservation.vue'
import Receipt from '@/components/order/Receipt.vue'

import { mapActions } from 'vuex';

export default {
  name: 'home',
  props: {
    parent: {
      default: 'Order'
    }
  },
  components: {
    LoadDish,
    SelectDrinks,
    Reservation,
    Receipt
  },
  data() {
    return {
      currentComponent: 'LoadDish'
    }
  },
  beforeRouteLeave(to,from, next){
    if(this.currentComponent!= 'Receipt'){
      const answer = window.confirm("Are you sure? Leaving this page, would mean losing the current order data.");
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
    ...mapActions(['clearNewOrder']),
    changeComponent(newComponent){
      this.currentComponent = newComponent;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
    }
  },
  created(){
    window.scrollTo(0,0);
  }
}
</script>

<style scoped>
</style>
