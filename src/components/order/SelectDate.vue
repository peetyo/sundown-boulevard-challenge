<template>
  <div>
    <div class="custom-card">
      <h1>Booking</h1>
      <form >
        <input v-model="date" type="date" v-bind:min="dateToday" required>
        <label for="numberOfGuests">Pick number of guests</label>
        <input v-model="numberOfGuests" name="numberOfGuests" id="numberOfGuests" type="number" min="1" max="10" value="1" required>
        <label for="email">Add your email</label>
        <input v-model="email" name="email" id="email" type="email" placeholder="EMAIL" required>
        <input v-if="parent=='Order'" type="submit" value="Submit Order" @click="onBook">
        <input v-else type="submit" value="Update Order" @click="onUpdate">
      </form>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SelectDate',
  components: {

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

