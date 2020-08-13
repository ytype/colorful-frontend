<template>
  <div>
    {{ color }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data () {
    return {
      color: {} as any
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:5000/api/color')
      .then((response) => {
        this.color = response.data
        console.log(this.color)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
})
</script>
