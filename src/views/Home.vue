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

import axios from 'axios';

export default {
  name: 'home',
  components: {
    Slider,
    StartOrder,
    FindOrder,
    LatestNews
  },
  methods:{
    // TODO: Do this when before "find order"
    getOrders(){
      // GET request to fetch all orders and save them in local storage
      // The axios code is a placeholder since the endpoint does not exist
      // axios.get('/orders')
      // .then(res => {
      //   localStorage.setItem("orders", JSON.stringify(res.data));
      // })
      // .catch(err => console.log(err))
      const orders = JSON.parse(localStorage.getItem("orders"))
      console.log(orders)
    }
  },
  created(){
    this.getOrders();
  }
}
</script>
