<template>
  <div class="container not-found" style="padding-top: 100px; max-width: 600px;">
    <div class="custom-card">
      <h1 class="mb-3">404</h1>
      <h4> Sorry, page not found</h4>
      <div class="text-right">
        <b-button href="#/" variant="primary">Back to home</b-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
}
</script>

<style>
  .not-found h1{
    color: var(--primary-color) !important;
  }
  .not-found h4{
    color: var(--text-color) !important;
  }
</style>
