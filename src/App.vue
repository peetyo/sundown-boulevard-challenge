<template>
  <div id="app">
    <Navigation />

    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    Navigation
  },
  methods:{
    ...mapActions(['fetchOrders']),
  },
  created(){
    this.fetchOrders();
  }
}
</script>

<style>

@font-face{
  font-family:'Helvetica-neue';
  src: url('../src/assets/fonts/helvetica-neue/HelveticaNeue-Medium.woff');
  font-weight: 400;
}
@font-face{
  font-family:'Helvetica-neue';
  src: url('../src/assets/fonts/helvetica-neue/HelveticaNeueLight.woff');
  font-weight: 200;
}
@font-face{
  font-family:'Helvetica-neue';
  src: url('../src/assets/fonts/helvetica-neue/HelveticaNeueBold.woff');
  font-weight: 600;
}

:root {
  --primary-color: #BA2329; 
  --secondary-color: #007DDB;
  --hover-opacity: 0.7;
}
#app {
  font-family: 'Helvetica-neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  text-transform: uppercase;
  color: #2c3e50;
}
#app button{
  font-weight: bold;
  text-transform: uppercase;
}
/* Overwriting Bootsrap's Defaults */
a.btn-primary, button.btn-primary{
    background-color: var(--primary-color);
    border-color: unset;
    border-radius: 25px;
    width: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    transition: .3s;
}
a.btn-primary:hover, button.btn-primary:hover{
    background-color: var(--primary-color);
    border-color: unset;
    opacity: var(--hover-opacity);
}
.carousel-item{
  height: 400px;
} 
.carousel-item img.img-fluid{
    height: 400px;
    object-fit: cover;
}
input.form-control{
  display:unset;
}
@media only screen and (max-width: 576px) {
  h1{
    font-size: 1.8rem !important;
  } 
}
div.row{
  margin-bottom: 20px;
}

/* Global css */
#app h1,#app h2,#app h3,#app h4,#app h5,#app h6{
  font-weight: 600;
}
#app h4{
  color: var(--primary-color);
  margin-top: 5px;
  margin-bottom: 3rem;
}
.custom-card{
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--primary-color);
  border: 2px solid #333;
  margin-bottom: 20px;
}
.custom-card p{
  flex-grow: 1;
}

/* Styling Datetime picker */
div.vdatetime-popup__header{
    background-color: var(--primary-color);
}
div.vdatetime-calendar__month__day--selected > span > span, .vdatetime-calendar__month__day--selected:hover > span > span {
  background-color: var(--primary-color);
}
div.vdatetime-calendar__month__day--selected > span > span, .vdatetime-calendar__month__day--selected:hover > span > span {
  background-color: var(--primary-color) !important;
}
div.vdatetime-popup__actions__button{
  color: var(--primary-color);
}
div.vdatetime-time-picker__item--selected {
    color: var(--primary-color);
}
#datetime-picker{
  cursor: pointer;
  width: 100%;
}
.vdatetime-time-picker__list.vdatetime-time-picker__list--minutes{
  padding-top: 4rem;
}

</style>
