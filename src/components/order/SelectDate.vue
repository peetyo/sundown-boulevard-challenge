<template>
  <div class="container">
    <div class="custom-card">
      <h4>Booking Details</h4>
      <form >
        <!-- <input v-model="date" type="date" v-bind:min="dateToday" required> -->
        <datetime v-model="date" type="date"></datetime>
        <label for="numberOfGuests">Pick number of guests</label>
        <input v-model="numberOfGuests" name="numberOfGuests" id="numberOfGuests" type="number" min="1" max="10" value="1" required>
        <label for="email">Add your email</label>
        <input v-model="email" name="email" id="email" type="email" placeholder="EMAIL" required>
        
        <div class="text-right">
              <!-- <b-button v-on:click="$emit('changeComponent', 'SelectDate')" variant="primary">Next</b-button> -->
              <b-button v-if="parent=='Order'" type="submit" @click="onBook" variant="primary">Submit Order</b-button>
              <b-button v-else type="submit" value="Update Order" @click="onUpdate" variant="primary"></b-button>
        </div>
      </form>
    </div>
    {{ date }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Datetime } from 'vue-datetime';

export default {
  name: 'SelectDate',
  components: {
    datetime: Datetime
  },
  data() {
    return {
      date: '2019-07-11T00:00:00.000Z',
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
    dateToday: function() {
      var d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
  },
  created(){
    this.date = this.dateToday;
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

 
</style>

