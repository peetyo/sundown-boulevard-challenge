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

import axios from 'axios';

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
    const answer = window.confirm("Are you sure? Leaving this page, would mean losing the current order data.");

    if(answer){
      next();
    } else {
      next(false)
    }
  },
  destroyed(){
    
  },
  methods: {
    changeComponent(newComponent){
      console.log(newComponent);
      this.currentComponent = newComponent;
    }
  },
  created(){
    
  }
}
</script>
