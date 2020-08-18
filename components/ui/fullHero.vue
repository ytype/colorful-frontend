<template>
  <section class="hero is-large has-fullheight has-background">
    <img class="hero-background" src="~assets/background.png">
    <div class="hero-body">
      <div class="container ">
        <div class="has-text-centered">
          <img class="logo-title" src="~assets/logo.png">
          <h1 class="title has-text-centered">
            olorful
          </h1>
        </div>
        <h2 class="subtitle has-text-centered">
          color palette for developer
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FullHero'
})
</script>

<style lang="scss" scoped>
.logo-title {
  display: inline;
  height: 3rem;
  width: auto;
}
.title {
  display: inline;
}
.ghost {
  width: 12rem;
  height: 4rem;
  font-size: 16px;
  color: white ;
  background: rgba(0, 0, 0, 0);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 15px;
}
.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  -webkit-user-drag: none;
  height: 100%;
  width: 100%;
}
.container {
  .title {
    color: white;
    font-weight: 800;
    font-size: 3rem;
  }
  .subtitle {
    color: white;
    font-size: 1.5rem;
  }
}
</style>
