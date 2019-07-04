<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000" 
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide v-for="dish in dishes" :key="dish.id" v-bind:img-src="dish.imageUrl">
        <h1>{{ dish.title }}</h1>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        slide: 0,
        sliding: null,
        dishes: [
          {
            title: "Peanut Butter Cheesecake",
            imageUrl: "https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg"
          },
          {
            title: "Timbits",
            imageUrl: "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg"
          },
          {
            title: "Chicken Marengo",
            imageUrl: "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg"
          }
          ]
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
  .carousel{
    border: 2px solid #333;
  }
  .img-fluid{
    height:400px;
    object-fit: cover;
  }
  .carousel-item{
    height: 400px;
  } 
  .carousel-item img.img-fluid{
      height: 400px;
      object-fit: cover;
  }
</style>
