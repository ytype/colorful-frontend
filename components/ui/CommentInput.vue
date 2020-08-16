<template>
  <div>
    <input v-model="content" class="input">
    <button class="button" @click="addComment">
      add
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { ToastProgrammatic as Toast } from 'buefy'
export default Vue.extend({
  props: ['id'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    addComment () {
      console.log(this.$store.getters.user)
      if (this.$store.getters.user === null || this.$store.getters.user === undefined) {
        Toast.open('로그인 후 이용해주세요.')
        this.$store.dispatch('signUserInGoogle')
      } else {
        axios.post('http://127.0.0.1:5000/api/comment', {
          id: this.id,
          user: this.$store.getters.user.email,
          content: this.content
        })
          .then(() => {
            Toast.open('댓글을 등록했습니다.')
            this.$emit('update')
          })
          .catch((error) => {
            Toast.open('오류가 발생했습니다.')
            console.log(error)
          })
      }
    }
  }
})

</script>

<style lang="scss" scoped>
.input {
  border-radius: 5px;
  width: calc(100% - 2rem - 27px);
  height: 33px;
}
.button {
  border-radius: 5px;
  background: linear-gradient(90deg, #FF9671, #FFC75F);
  height: 33px;
}

.input:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .select select:focus, .is-focused.input, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .select select.is-focused, .input:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .select select:active, .is-active.input, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .select select.is-active {
  border-color: #FF9E6E;
}
</style>
