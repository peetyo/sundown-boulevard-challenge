<template>
  <div class="container">
    <div class="custom-card">
      <h4>Reservation Details</h4>
      <b-form >
        <div id="form-container">
          <div>
            <label for="datetime-picker">Select Date and Time</label>
            <datetime 
              v-model="date" 
              type="datetime" 
              v-bind:min-datetime="datetimeToday"
              class="form-group" 
              input-id ="datetime-picker" 
              input-class="form-control" 
              :minute-step="15" 
              format="DDDD T">
            </datetime>
          
       
        
          <b-form-group
          id="input-email-group"
          label="Add Your Email"
          label-for="input-email"
          >
            <b-form-input
              id="input-email"
              v-model="email"
              name="email"
              type="email"
              required
              placeholder="ENTER EMAIL"
            ></b-form-input>
          </b-form-group>
          </div>
          <div>
            <b-form-group
            id="input-numberOfGuests-group"
            label="Pick number of guests"
            label-for="numberOfGuests"
            >
            <numberinput controls id="numberOfGuests"
              v-model="numberOfGuests"
              name="numberOfGuests"
              type="number"
              required
              :min="1"
              :max="10"
              value="1"
              :inputtable="false" inline></numberinput>
          </b-form-group>
          </div>
        </div>  
        <div v-if="validation.error" class="alert alert-dark" role="alert">
          {{ validation.message }}
        </div>
        <div class="text-right mt-2">
              <b-button v-if="parent=='Order'" type="submit" @click="submitOrder('addOrder')" variant="primary">Submit Order</b-button>
              <b-button v-else type="submit" @click="submitOrder('updateOrder')" variant="primary">Update Order</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Datetime } from 'vue-datetime';
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
  name: 'Reservation',
  components: {
    datetime: Datetime,
    numberinput: VueNumberInput
  },
  data() {
    return {
      date: '',
      numberOfGuests: 1,
      email: '',
      validation: {
        error: false,
        message: ''
      }
    }
  },
  props: {
    parent:{}
  },
  methods:{
    ...mapActions(['addBookingDetails','addOrder','updateOrder',]),
    submitOrder(actionName){
      event.preventDefault()
      if(!this.validate()){
        return
      }

      let bookingDetails = {
        date: this.date,
        numberOfGuests: this.numberOfGuests,
        email: this.email
      }
      this.addBookingDetails(bookingDetails);
      this[actionName](this.$store.state.newOrder);
      this.$emit('changeComponent', 'Receipt');
    },
    validate(){
      if(this.date == ''){
        this.validation.error = true;
        this.validation.message = 'Please, select date and time';
        return false;
      }
      // validating ISO 8601 format
      let reISO = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/g;
      if(!reISO.test(this.date)){
        this.validation.error = true;
        this.validation.message = 'Incorrect date and time format';
        return false;
      }

      const selectedDatetime = new Date(this.date)
      const datetimeNow = new Date(this.datetimeToday)
      const diff =  selectedDatetime - datetimeNow
      if(diff<0){
        this.validation.error = true;
        this.validation.message = 'Please, select upcoming date and time';
        return false
      }

      let reEmail = /\S+@\S+\.\S+/;
      if(!reEmail.test(this.email)){
        this.validation.error = true;
        this.validation.message = 'Please, enter valid email';
        return false
      }

      // check if a reservation was already created with this email
      if(this.parent=='Order'){
        const match = this.$store.state.orders.orders.filter(order => order.email === this.email)
        if(match.length){
          this.validation.error = true;
          this.validation.message = 'Sorry, you have already made a reservation with this email';
          return false
        }
      }
      
      if(this.numberOfGuests<1 || this.numberOfGuests>10){
        this.validation.error = true;
        this.validation.message = 'Please, between 1 and 10 guests';
        return false
      }
      return true;
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
  computed: {
    datetimeToday: function() {
      let d = new Date()
      d = d.toISOString();
      return d;
    }
  },
  created(){
    this.date = this.datetimeToday;
      if(this.parent === 'UpdateOrder'){
        this.date = this.$store.state.newOrder.date;
        this.numberOfGuests = this.$store.state.newOrder.numberOfGuests;
        this.email = this.$store.state.newOrder.email;
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 800px;
  }
  #input-email{
    width: 100%;
  
  }
  #form-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem 3rem;
  }

</style>

