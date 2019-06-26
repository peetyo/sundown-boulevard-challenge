<template>
  <div class="home">
    <Slider />
    <StartOrder />
    <FindOrder />
    <LatestNews />
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
  }
}
</script>
