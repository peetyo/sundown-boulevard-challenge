<template>
  <div class="home">
    <b-container>
      <b-row class="mb-0">
        <b-col lg="8" class="mb-4"><Slider /></b-col>
        <b-col lg="4" class="mb-4"><StartOrder /></b-col>
      </b-row>
      <b-row>
        <b-col lg="6" class="mb-4"><FindOrder /></b-col>
        <b-col lg="6" class="mb-4"><LatestNews /></b-col>
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

export default {
  name: 'home',
  components: {
    Slider,
    StartOrder,
    FindOrder,
    LatestNews
  },
  created(){
    window.scrollTo(0,0);
  }
}
</script>

<style>
 .home h4{
   max-width: 200px;
 }
</style>

