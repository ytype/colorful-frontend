<template>
  <div>
    <p class="login-text">
      {{ error }}
    </p>
    <form class="login-form" @submit.prevent="onSignin">
      <h2 class="login-text">
        ID:
      </h2>
      <input
        id="email"
        v-model="email"
        class="input login-input"
        name="email"
        label="Email"
        type="email"
        required
      >
      <h2 class="login-text">
        PW:
      </h2>
      <input
        id="password"
        v-model="password"
        class="input login-input"
        name="password"
        label="Password"
        type="password"
        required
      >
      <button :disabled="loading" :loading="loading" type="submit" class="login-btn">
        Sign in
      </button>
      <button id="Google" @click.prevent="onSigninGoogle">
        Sign in with Google
      </button>
      <button id="Github" @click.prevent="onSigninGithub">
        Sign in with GitHub
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  beforeUpdate () {
    if (this.user !== null && this.user !== undefined) {
      this.$router.push('/form')
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onSigninGithub () {
      this.$store.dispatch('signUserInGithub')
    },
    onResetPassword () {
      if (this.email === '') {
        return this.$store.dispatch('setError', { message: 'Email can not be blank' })
      }
      this.$store.dispatch('resetPasswordWithEmail', { email: this.email })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
