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
