<template>
  <div>
    <b-container>
        <form>
      <b-row>
        <b-col md="8">
          <div id="drinks-container">
              <label v-bind:for="drink.id"  v-for="drink in drinks" :key="drink.id">
                <div class="drink-wrapper">
                <div class="drink" v-bind:style="{ 'background-image': 'url(' + drink.image_url + ')' }">
                <h4>{{ drink.name }}</h4>
                <!-- <p>{{ drink.description | trimText}}</p> -->
                <!-- <img v-bind:src="drink.image_url" alt=""> -->
                <input type="checkbox" v-bind:name="drink.id" v-bind:id="drink.id" v-bind:value="drink.id" v-model="selectedDrinksId">
                </div>
                </div>
              </label>
          </div>
          <div>Selected drinks {{ selectedDrinksId }}</div>
        </b-col>

        <b-col md="4">
          <div id="select-drinks" class="custom-card">
            <h4>Would you like a drink?</h4>
            <p>Simply select the ones you like.</p>
            <p>* You can order more than one.</p>
            <div class="text-right">
              <b-button href="#/select-date" variant="primary">Next</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      </form>
   </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'SelectDrinks',
  components: {

  },
  data() {
    return {
      drinks: [],
      selectedDrinksId: [],
      selectedDrinks: []
    }
  },
  methods:{
    ...mapActions(['addDrinks']),
    fetchDrinks(){
      axios.get('HTTPS://API.PUNKAPI.COM/V2/BEERS')
    .then(res => {
      this.drinks = res.data;
    }
    )
    // .catch(err => console.log(err))
    }
  },
  watch: {
    selectedDrinksId: function (newDrinks) {
      let selectedDrinks = this.drinks.filter( drink => newDrinks.includes(drink.id))
      this.addDrinks(selectedDrinks);
    }
  },
  filters: {
  trimText: function (text) {
      if(text.length > 100){
        return text.substring(0, 100)+'...';
      }else{
        return text;
      }
    }
  },
  created(){
    this.fetchDrinks();
  }
}
</script>

<style scoped>
  .container{
    max-width: 800px;
  }

  #drinks-container {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,auto));
    grid-gap: 1rem;
  }
  .drink-wrapper {
    padding: 1rem;
    background-color: #eee;
    background-color: #C9C9C9;
  }
  .drink{
    height:300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1rem;
  }
  .drink h4{
    color: var(--primary-color);
    font-weight: 600;
    /* background-color: #eee; */
    background-color:rgba(250,250,250,0.7);
    padding: 5px;
    text-align: center;
  }
  input:checked + label .drink-wrapper{
   background-color: #333;
  }
  /* TODO: Select drinks component can be fixed to the side on desktop and to the bottom on mobile */
  /* #select-drinks{
    position: fixed;
    margin-right: 1rem;
  } */
</style>

