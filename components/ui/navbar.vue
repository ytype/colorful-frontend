<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img class="logo" src="~assets/logo.png">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">
        Home
      </b-navbar-item>
      <b-navbar-item href="/form">
        Add Color
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="https://github.com/ytype/colorful-frontend">
          <i class="fab fa-github" />
          <p class="github">
            frontend
          </p>
        </b-navbar-item>
        <b-navbar-item href="https://github.com/ytype/colorful-backend">
          <i class="fab fa-github" />
          <p class="github">
            backend
          </p>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a v-if="!logoutShow">
            <LoginGoogle />
          </a>
          <a v-if="logoutShow" class="button is-light" @click="logout">
            Logout
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'

export default Vue.extend({
  computed: {
    logoutShow () {
      if (this.$store.getters.user) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    logout () {
      Toast.open('로그아웃 했습니다.')
      this.$store.dispatch('logout')
    }
  }
})
</script>

<style lang="scss" >
.navbar-item img {
  width: auto;
  height: 1.75rem;
  margin-right: 15px;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #FF9E6E;
  margin-top: -0.375em;
  right: 1.125em;
}
.signin {
  background: linear-gradient(90deg, #FF9671, #FFC75F);
}
.logo {
  margin-left: 5px;
}
.github {
  margin-left: 5px;
  display: inline;
}
</style>
