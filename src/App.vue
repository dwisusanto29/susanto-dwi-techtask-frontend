<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Lunch Recipes</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/ingredients">Ingredients</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>


      
    </div>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

