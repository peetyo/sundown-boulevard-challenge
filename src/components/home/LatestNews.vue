<template>
<div id="latest-news" class="custom-card h-100">
    <h4>Latest Updates</h4>
    <h5>New Sundown Boulevard</h5>
    <p>We are happy to announce that we are opening a new restaurant on 1st August. Come to the opening and get 30% discount. The new location is...</p>
    <div class="text-right">
      <b-button href="#" variant="primary">Read More</b-button>
    </div>

  </div>
  <!-- <div>
    <div>
  <b-card
    title="<div id="start-order" class="h-100">
    <h4>Start Order Flow</h4>
    <p>Order your meal online and save time.</p>

    <b-button href="#" variant="primary">Order</b-button>

  </div>"
    sub-title="New Sundown Boulevard"
    tag="article"
    class="mb-2"
  >
    <b-card-text class="mb-2">
      We are happy to announce that we are opening a new restaurant on 1st August. Come to the opening and get 30% discount. The new location is...
    </b-card-text>

    <b-button href="#" variant="primary">Read More</b-button>
  </b-card>
</div>
  </div> -->
</template>

<script>
export default {
  name: 'LatestNews',
}
</script>

<style scoped>
    p.card-text{
      max-width: 400px;
      margin: auto;
    }
</style>
