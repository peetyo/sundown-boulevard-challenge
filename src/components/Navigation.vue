<template>
  <div>
  <b-navbar toggleable="sm" type="light" variant="info">
    <b-navbar-brand href="#/"><img src="../assets/sundown-boulevard.png" alt="company logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="#">Restauranter</b-nav-item>
        <b-nav-item href="#">Produkter</b-nav-item>
        <b-nav-item href="#">Nyhedsbrev</b-nav-item>
        <b-nav-item href="#">Kontakt</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
  .navbar{
    background-color: white !important;
    border-bottom: 2px solid var(--primary-color);
    position: fixed;
    z-index: 1022;
    width: 100%;
    text-align: center;
  }
  .navbar a.nav-link{
    color: var(--primary-color);
    text-transform: uppercase;
  }
  .navbar a.nav-link:hover{
    color: var(--primary-color);
    opacity: var(--hover-opacity);
  }
  .navbar a.nav-link:focus{
    color: var(--primary-color);
  }
  .navbar-brand a{
    cursor: pointer;
  }
  .navbar-brand img{
    width: 50px;
  }
</style>
