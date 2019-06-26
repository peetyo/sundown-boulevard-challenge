<template>
  <div>
    <div>
    <b-card
    title="Find order"
    tag="article"
    class="mb-2"
    >
    <b-card-text>
      Review or update your order.
    </b-card-text>

    <b-form inline class="justify-content-center">
      <b-form-group
        id="input-email-group"
      >
        <b-form-input
          id="input-email"

          type="email"
          required
          placeholder="Enter Email"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Find</b-button>
    </b-form>
  </b-card>
</div>
  </div>
</template>

<script>
export default {
  name: 'FindOrder',
}
</script>

<style scoped>  
</style>
