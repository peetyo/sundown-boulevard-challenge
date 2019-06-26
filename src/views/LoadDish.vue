<template>
  <div>
    <!-- load dish comp -->
    <!-- and next  comp-->
    <b-container>
      <b-row>
        <b-col md="8">
          <img src="../assets/sundown-boulevard.png" alt="dish image">
          <div id="start-order" class="custom-card">
            <h4>Dish Title</h4>
              <p>Dish Description When you are ready go ahead and select your drinks.</p>
            <div class="text-right">
              <b-button href="#/load-dish" variant="primary">Generate New</b-button>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div id="start-order" class="custom-card">
            <h4>Looks tasty?</h4>
            <p>When you are ready go ahead and select your drinks.</p>
            <div class="text-right">
              <b-button href="#/load-dish" variant="primary">Next</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
   </b-container>
  </div>
</template>

<script>


export default {
  name: 'LoadDish',
  components: {

  }
}
</script>

<style scoped>
  .container{
    max-width: 800px;
  }
  img{
    width:100%;
    height: 300px;
    object-fit: cover;
  }
</style>

