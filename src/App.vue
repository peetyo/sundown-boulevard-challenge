<template>
  <div id="app">
    <Navigation />

    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'


export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
:root {
  --primary-color: #BA2329; 
  --secondary-color: #007DDB;
  --hover-opacity: 0.7;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
/* Overwriting Bootsrap's Defaults */
a.btn-primary, button.btn-primary{
    background-color: var(--primary-color);
    border-color: unset;
    width: 200px;
}
a.btn-primary:hover, button.btn-primary:hover{
    background-color: var(--primary-color);
    border-color: unset;
    opacity: var(--hover-opacity);
}
/* div.container{
  padding-left: 0;
  padding-right: 0;
} */
div.row{
  margin-bottom: 20px;
}
/* Global css */
.custom-card{
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--primary-color);
}
.custom-card p{
  flex-grow: 1;
}  
</style>
