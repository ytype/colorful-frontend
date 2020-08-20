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
export default Vue.extend({
  data () {
    return {
      color: [{}, {}, {}, {}] as Icolor[]
    }
  },
  mounted () {
    axios.get('http://49.50.162.193:5000/api/color')
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
  background: #EEEEEE;
  padding: 1rem;
}
</style>
