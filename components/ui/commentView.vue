<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left" />
        <div class="media-content">
          <p class="title is-5 ns-title">
            {{ comment.user }}
          </p>
          <p class="is-4 date">
            {{ date }}
          </p>
          <p class="subtitle is-6 ns-title">
            {{ comment.content }}
          </p>
        </div>
        <button v-if="comment.user === $store.getters.user.email" class="button" @click="removeComment()">
          댓글 삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'
export default Vue.extend({
  name: 'CommentView',
  props: ['comment'],
  data () {
    return {
      date: ''
    }
  },
  mounted () {
    this.calcDate()
  },
  methods: {
    calcDate () {
      const old = this.comment.date
      this.date = old.substr(0, 10)
    },
    removeComment () {
      axios.delete('http://127.0.0.1:5000/api/comment/' + this.$route.params.id + '/' + this.comment._id)
        .then(() => {
          Toast.open('댓글을 삭제했습니다.')
          this.$emit('update')
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }

})
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  border-radius: 5px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  .card-content {
    padding: 1rem;
  }
}
.title {
  margin-bottom:0;
}
.date {
  margin-bottom: 0.5rem;
}
.media-content {
  overflow-y: hidden;
}
</style>
