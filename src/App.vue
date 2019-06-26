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
  text-align: center;
  color: #2c3e50;
}
</style>
