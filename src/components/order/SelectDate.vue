<template>
  <div class="container">
    <div class="custom-card">
      <h4>Booking Details</h4>
      <b-form >
        <!-- <input v-model="date" type="datetime-local" v-bind:min="dateToday" required> -->
        <!-- <input v-model="date" type="date" v-bind:min="dateToday" required> -->
        <div id="form-container">
          <div>
            <label for="datetime-picker">Select Date and Time</label>
            <datetime v-model="date" type="datetime" v-bind:min-datetime="datetimeToday" class="form-group" input-id ="datetime-picker" input-class="form-control" :minute-step="15" format="DDDD T"></datetime>
          
       
        
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
            <!-- <b-form-input
              id="numberOfGuests"
              v-model="numberOfGuests"
              name="numberOfGuests"
              type="number"
              required
              min="1"
              max="10"
              value="1"
            ></b-form-input> -->
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
            <!-- <label for="numberOfGuests">Pick number of guests</label>
            <input v-model="numberOfGuests" name="numberOfGuests" id="numberOfGuests" type="number" min="1" max="10" value="1" required> -->
          </div>
        </div>  
        
        <div class="text-right mt-2">
              <!-- <b-button v-on:click="$emit('changeComponent', 'SelectDate')" variant="primary">Next</b-button> -->
              <b-button v-if="parent=='Order'" type="submit" @click="onBook" variant="primary">Submit Order</b-button>
              <b-button v-else type="submit" @click="onUpdate" variant="primary">Update Order</b-button>
        </div>
      </b-form>
    </div>
    dateTimetoday:-{{ datetimeToday }}
    <p>date:={{ date }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Datetime } from 'vue-datetime';
import VueNumberInput from '@chenfengyuan/vue-number-input';

export default {
  name: 'SelectDate',
  components: {
    datetime: Datetime,
    numberinput: VueNumberInput
  },
  data() {
    return {
      date: '',
      numberOfGuests: 1,
      email: ''
    }
  },
  props: {
    parent:{}
  },
  methods:{
    ...mapActions(['addBookingDetails','addOrder','updateOrder']),
    onBook(event){
      event.preventDefault()
      // console.log('date', this.date)
      // console.log('numberOfGuests', this.numberOfGuests)
      // console.log('email', this.email)
      let bookingDetails = {
        date: this.date,
        numberOfGuests: this.numberOfGuests,
        email: this.email
      }
      this.addBookingDetails(bookingDetails);
      this.addOrder(this.$store.state.newOrder);
      // this.$router.push({path: 'receipt'});
      this.$emit('changeComponent', 'Receipt');

    },
    onUpdate(event){
      event.preventDefault()
      let bookingDetails = {
        date: this.date,
        numberOfGuests: this.numberOfGuests,
        email: this.email
      }
      this.addBookingDetails(bookingDetails);
      this.updateOrder(this.$store.state.newOrder);
      // this.$router.push({path: 'receipt'});
      this.$emit('changeComponent', 'Receipt');
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
    // Only for date input
    // dateToday: function() {
    //   var d = new Date(),
    //       month = '' + (d.getMonth() + 1),
    //       day = '' + d.getDate(),
    //       year = d.getFullYear();

    //   if (month.length < 2) month = '0' + month;
    //   if (day.length < 2) day = '0' + day;

    //   return [year, month, day].join('-');
    // },
    datetimeToday: function() {
      let d = new Date()
      d = d.toISOString();
      // d = d.slice(0,-8);
      return d;
    }
  },
  created(){
    this.date = this.datetimeToday;
    // this.date = '2019-07-16T12:06';
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
    /* max-width: 250px; */
    width: 100%;
  
  }
  #form-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem 3rem;
  }

</style>

