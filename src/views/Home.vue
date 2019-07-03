<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col lg="8"><Slider /></b-col>
        <b-col lg="4"><StartOrder /></b-col>
      </b-row>
      <b-row>
        <b-col lg="6"><FindOrder /></b-col>
        <b-col lg="6"><LatestNews /></b-col>
      </b-row>
   </b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/home/Slider.vue'
import StartOrder from '@/components/home/StartOrder.vue'
import FindOrder from '@/components/home/FindOrder.vue'
import LatestNews from '@/components/home/LatestNews.vue'

import { mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    Slider,
    StartOrder,
    FindOrder,
    LatestNews
  },
  methods:{
    ...mapActions(['fetchOrders']),
  },
  created(){
    this.fetchOrders();
  }
}
</script>
