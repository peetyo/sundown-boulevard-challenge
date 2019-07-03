<template>
  <div class="order">
    <component v-bind:is="currentComponent" v-on:changeComponent="changeComponent"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import LoadDish from '@/components/order/LoadDish.vue'
import SelectDrinks from '@/components/order/SelectDrinks.vue'
import SelectDate from '@/components/order/SelectDate.vue'
import Receipt from '@/components/order/Receipt.vue'

import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    LoadDish,
    SelectDrinks,
    SelectDate,
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
    }
  },
  created(){
    
  }
}
</script>
