<template>
  <div>
    <b-container>
        <form>
      <b-row>
        <b-col md="8">
          <div id="drinks-container">
            <div v-for="drink in drinks" :key="drink.id">
              <input type="checkbox" v-bind:name="drink.id" v-bind:id="drink.id" v-bind:value="drink.id" v-model="selectedDrinksId">
              <label v-bind:for="drink.id"  >
                <div class="drink-wrapper">
                <div class="drink" v-bind:style="{ 'background-image': 'url(' + drink.image_url + ')' }">
                <h4>{{ drink.name }}</h4>
                </div>
                </div>
              </label>
            </div>
          </div>
          <!-- <div>Selected drinks {{ selectedDrinksId }}</div> -->
        </b-col>

        <b-col md="4">
          <div id="select-drinks" class="custom-card sticky-top">
            <h4>Would you like a drink?</h4>
            <p>Simply select the ones you like.</p>
            <p>* You can order more than one.</p>
            <div class="text-right">
              <b-button v-on:click="$emit('changeComponent', 'SelectDate')" variant="primary">Next</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      </form>
   </b-container>
   <div id="select-drinks-mobile">
         <h4>Would you like a drink?</h4>
          <div class="text-right">
            <b-button v-on:click="$emit('changeComponent', 'SelectDate')" variant="primary">Next</b-button>
          </div>
    </div>
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
      this.drinks = res.data.map(({id, name, image_url}) => ({
        id,name,image_url
      }))
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
    this.selectedDrinksId = this.$store.state.newOrder.drinks.map(drink => drink.id)
  }
}
</script>

<style scoped>
  .container{
    max-width: 980px;
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
    border-radius: 3px;
  }
  .drink{
    width: 100%;
    height:300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1rem;
    cursor: pointer;
  }
  .drink h4{
    color: var(--primary-color);
    font-weight: 600;
    /* background-color: #eee; */
    background-color:rgba(250,250,250,0.7);
    padding: 5px;
    text-align: center;
  }
  input[type="checkbox"]{
    display: none;
  }
  input:checked + label .drink-wrapper{
   background-color: #333;
   background-color: var(--primary-color);
  }
  label{
    width: 100%;
  }  
  /* TODO: Select drinks component can be fixed to the side on desktop and to the bottom on mobile */
  #select-drinks-mobile{
    position: fixed;
    display: none;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    bottom:0;
    width: 100%;
    padding: 1rem;
    background-color: white;
    border-top: 2px solid var(--primary-color);
  }
  #select-drinks-mobile h4{
    font-size: 18px;
    margin:0;
  }
  #select-drinks{
    display: block;
  }

  .custom-card.sticky-top{
    top: 100px;
  }
  @media only screen and (max-width: 768px) {
    #select-drinks-mobile{
      display: grid;
    }
    #select-drinks{
      display: none;
    }
    .container{
      padding-bottom: 100px;
    }
  }
  @media only screen and (max-width: 480px) {
    a.btn-primary, button.btn-primary{
      width: 100px;
    }
  }
  @media (min-width: 992px) { 
    div.text-right{
      text-align: center !important;
    }
   }
</style>

