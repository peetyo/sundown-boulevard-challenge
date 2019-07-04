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
                <img v-bind:src="drink.image_url" alt="image of drink">
                <h4>{{ drink.name }}</h4>
                <span class="tick">&#10004;</span>
                </div>
              </label>
            </div>
          </div>
        </b-col>

        <b-col md="4">
          <div id="select-drinks" class="custom-card sticky-top">
            <h4>Choose your drinks</h4>
            <div v-if="validation.error" class="alert alert-dark" role="alert">
              {{ validation.message }}
            </div>
            <p class="mb-4">Simply select the drinks you like and proceed to reservation details.</p>
            <div class="text-center">
              <b-button v-on:click="submitDrinks" variant="primary">Next</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      </form>
   </b-container>
   <div id="select-drinks-mobile">
    <div v-if="validation.error" class="alert alert-dark" role="alert">
      {{ validation.message }}
    </div>
    <div id="submit">
      <h4>Choose your drinks</h4>
      <div class="text-right">
        <b-button v-on:click="submitDrinks" variant="primary">Next</b-button>
      </div>
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
      selectedDrinks: [],
      validation: {
        error: false,
        message: ''
      }
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
      this.selectedDrinksId = this.$store.state.newOrder.drinks.map(drink => drink.id)
    }
    )
    // .catch(err => console.log(err))
    },
    submitDrinks(){
      if(this.selectedDrinksId.length){
        this.validation.error = false;
        this.validation.message = '';
        this.$emit('changeComponent', 'Reservation')
      }else{
        this.validation.error = true;
        this.validation.message = 'Please, select at least one drink.';
      }
    }
  },
  watch: {
    selectedDrinksId: function (newDrinks) {
      let selectedDrinks = this.drinks.filter( drink => newDrinks.includes(drink.id))
      this.addDrinks(selectedDrinks);
      if(this.selectedDrinksId.length){
        this.validation.error = false;
        this.validation.message = '';
      }
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
    max-width: 980px;
  }
  #drinks-container {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,auto));
    grid-gap: 1rem;
  }
  .drink-wrapper {
    position: relative;
    padding: 1rem;
    border: 2px solid lightgray;
    transition: .3s;
    cursor: pointer;
  }
  .drink-wrapper:hover{
    border-color: black;
  }
  .drink-wrapper img{
    width: 100%;
    height:300px;
    object-fit: contain;
    padding: 1rem;
    margin-bottom: 2rem;
  }
 
  #drinks-container .drink-wrapper h4{
    position: absolute;
    left:1rem;
    bottom: .5rem;
    margin-bottom: 0;
    color: var(--primary-color);
    font-weight: 600;
    background-color:rgba(255,255,255,.7);
    padding: 5px;
  }
  
  span.tick{
    position:absolute;
    font-size: 3rem;
    right: 10px;
    top: 5px;
    opacity: 0;
    transition: .3s;
    /* color: var(--primary-color); */
  }
  .drink-wrapper:hover span.tick{
    opacity: .5;
  }
  input:checked + label .drink-wrapper span.tick{
    opacity: 1;
    color: var(--secondary-color);
  }
  input[type="checkbox"]{
    display: none;
  }
  input:checked + label .drink-wrapper{
    border-color: black;
  }
  label{
    width: 100%;
  }  
  /* TODO: Select drinks component can be fixed to the side on desktop and to the bottom on mobile */
  #select-drinks-mobile{
    position: fixed;
    display: none;
    bottom:0;
    width: 100%;
    padding: 1rem;
    background-color: white;
    border-top: 2px solid var(--primary-color);
  }
  #select-drinks-mobile #submit{
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
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
    max-width: 280px;
    margin:auto;
  }
  @media only screen and (max-width: 768px) {
    #select-drinks-mobile{
      display: block;
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
  @media (hover: none) {
    .drink-wrapper:hover{
      border: 2px solid lightgray;
    }
    .drink-wrapper:hover span.tick{
      opacity: 0;
    }
  }
</style>

