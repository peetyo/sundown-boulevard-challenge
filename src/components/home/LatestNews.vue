<template>
  <div>
    <div>
  <b-card
    title="News"
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
  </div>
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
