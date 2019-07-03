<template>
  <div id="start-order" class="custom-card h-100">
    <h4>Start Order Flow</h4>
    <p>Order your meal online and save time.</p>
    <div class="text-right">
      <b-button href="#/order" variant="primary">Order</b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StartOrder',
}
</script>

<style scoped>
  @media (min-width: 992px) { 
    div.text-right{
      text-align: center !important;
    }
   }
</style>
