<template>
  <div>
    {{ data }}
    <CommentInput />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import CommentInput from '@/components/comment/input/index'
export default Vue.extend({
  components: { },
  data () {
    return {
      id: this.$route.params.id,
      data: {}
    }
  },
  mounted () {
    axios.get(`http://127.0.0.1:5000/api/color/${this.id}`)
      .then((response) => {
        this.data = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
})
</script>
