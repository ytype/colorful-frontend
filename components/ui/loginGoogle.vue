<template>
  <div>
    <img src="~/assets/btn_google.png" @click="googleLogin">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { ToastProgrammatic as Toast } from 'buefy'

export default Vue.extend({
  name: 'LoginGoogle',
  methods: {
    googleLogin () {
      this.$store.dispatch('signUserInGoogle')
    }
  }
})
</script>
