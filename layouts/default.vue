<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase'

export default Vue.extend({
  created () {
    try {
      console.log(!!process.env.VUE_APP_appId)
      firebase.initializeApp({
        apiKey: process.env.VUE_APP_apiKey,
        authDomain: process.env.VUE_APP_authDomain,
        databaseURL: process.env.VUE_APP_databaseURL,
        projectId: process.env.VUE_APP_projectId,
        storageBucket: process.env.VUE_APP_storageBucket,
        messagingSenderId: process.env.VUE_APP_messagingSenderId,
        appId: process.env.VUE_APP_appId,
        measurementId: process.env.VUE_APP_measurementId
      })
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase initialization error raised', err.stack)
      }
    }
  }
})
</script>

<style>
* {
  scroll-behavior: auto;
  font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
</style>
