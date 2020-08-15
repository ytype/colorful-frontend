<template>
  <div>
    <input>
    <button @click="addComment">
      add
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  name: 'CommentInput',
  props: ['id'],
  methods: {
    addComment () {
      axios.post('http://127.0.0.1:5000/api/comment', {
        id: this.id,
        user: 'test',
        content: 'test'
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})

</script>
