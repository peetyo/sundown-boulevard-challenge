<template>
  <Order parent="UpdateOrder"/>
</template>

<script>
import Order from './Order.vue'


import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    Order
  }
}
</script>