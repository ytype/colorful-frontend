<template>
  <div>
    <FullHero />
    <div id="main" class="columns is-multiline main">
      <ColorCard v-for="(data,idx) in color" :key="idx" :data="data" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Icolor } from '@/models/color'
import { ToastProgrammatic as Toast } from 'buefy'

export default Vue.extend({
  data () {
    return {
      color: [{}, {}, {}, {}] as Icolor[]
    }
  },
  mounted () {
    Toast.open('Something happened')
    axios.get('http://127.0.0.1:5000/api/color')
      .then((response) => {
        this.color = response.data.color
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
})
</script>

<style lang="scss" scoped>

.main {
  background: #F0F0EE;
  padding: 1rem;
}
</style>
