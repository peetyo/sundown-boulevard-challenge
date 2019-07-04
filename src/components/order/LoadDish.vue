<template>
  <div>
    <!-- load dish comp -->
    <!-- and next  comp-->
    <b-container>
      <b-row>
        <b-col md="8">
          <img v-bind:src="dish.imageUrl" alt="dish image">
          <div id="load-dish" class="custom-card">
            <h4>{{ dish.name }}</h4>
              <p>Unfortunately, this is a recipe and not the description of the dish. {{ dish.description | trimText }}</p>
            <div class="text-right">
              <b-button v-on:click="generateDish" variant="primary">Generate New</b-button>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div id="start-order" class="custom-card">
            <h4>Looks tasty?</h4>
            <p>When you are ready go ahead and select your drinks.</p>
            <div class="text-right">
              <b-button v-on:click="$emit('changeComponent', 'SelectDrinks')" variant="primary">Next</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
   </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'LoadDish',
  components: {

  },
  props: {
    parent:{}
  },
  data() {
    return {
      dish: {
        id: "",
        name: "",
        description: "",
        imageUrl: ""
      }
    }
  },
  methods:{
    ...mapActions(['addDish']),
    generateDish(){
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
      // There's a lot of unnecessary data
      // this.dish = {...res.data.meals[0]}
      this.dish = { ...this.dish,
        id: res.data.meals[0].idMeal,
        name: res.data.meals[0].strMeal,
        description: res.data.meals[0].strInstructions,
        imageUrl: res.data.meals[0].strMealThumb   
      }
      this.addDish(this.dish);
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    )
    // .catch(err => console.log(err))
    }
  },
  filters: {
  trimText: function (text) {
      if(text.length > 200){
        return text.substring(0, 200)+'...';
      }else{
        return text;
      }
    }
  }, 
  created(){
    if(this.parent === 'Order'){
      this.generateDish();
    } else {
      this.dish = this.$store.state.newOrder.dish;
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 800px;
  }
  img{
    width:100%;
    height: 300px;
    object-fit: cover;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    border-right: 2px solid #333;
  }
  #load-dish{
    border-top:unset;
  }
</style>

