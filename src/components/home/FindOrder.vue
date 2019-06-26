<template>
  <div id="find-order" class="custom-card h-100">
    <h4>Find order</h4>
    <p>Review or update your order.</p>

    <b-form class="justify-content-center">
      <b-form-group
        id="input-email-group"
        label="Email address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"

          type="email"
          required
          placeholder="Enter Email"
        ></b-form-input>
      </b-form-group>
      <div class="text-right">
        <b-button type="submit" variant="primary">Find</b-button>
      </div>
    </b-form>

  </div>
</template>

<script>
export default {
  name: 'FindOrder',
}
</script>

<style scoped>

</style>
