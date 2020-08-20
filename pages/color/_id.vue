<template>
  <section>
    <ColorCarousel :data="data.color" />
    <div class="image-view">
      <img v-if="data.image" :src="`${data.image}`">
    </div>
    <div class="main">
      <h1 class="title">
        <i class="fas fa-palette" style="margin-right:10px;" />
        {{ data.title }}
      </h1>
      <p class="date">
        {{ data.user }} {{ date }}
      </p>
      <button v-if="likeBtnShow" class="button is-rounded comment-input" @click="addLike">
        좋아요
      </button>
      <button v-else class="button is-rounded comment-input" @click="delLike">
        안 좋아요
      </button>
      <p>{{ data.content }}</p>
    </div>
    <CommentInput :id="id" class="comment-input" @update="update" />
    <div v-for="(comment,idx) in data.comments" :key="idx" class="comment-view-box">
      <CommentView :comment="comment" @update="update" />
    </div>
    <b-loading :active="isLoading" :is-full-page="true" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { ToastProgrammatic as Toast } from 'buefy'
import { Icolor } from '@/models/color'
export default Vue.extend({
  components: { },
  data () {
    return {
      isLoading: true,
      isFullPage: true,
      id: this.$route.params.id,
      data: {} as Icolor,
      date: '',
      likeBtnShow: true
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    update () {
      this.fetchData()
    },
    calcDate () {
      const old = this.data.date
      this.date = old.substr(0, 10)
    },
    fetchData () {
      axios.get(`http://49.50.162.193:5000/api/color/${this.id}`)
        .then((response) => {
          this.data = response.data.color[0]
          this.isLoading = false
          this.calcDate()
          if (this.$store.getters.user) {
            if (Object.values(this.data.like).includes(this.$store.getters.user.email)) {
              this.likeBtnShow = false
            } else {
              this.likeBtnShow = true
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addLike () {
      axios.post('http://49.50.162.193:5000/api/like', {
        params: {
          id: this.id,
          user: this.$store.getters.user.email
        }
      })
        .then(() => {
          Toast.open('좋아요를 눌렀습니다.')
        })
        .catch((error) => {
          console.log(error.response)
        })
      location.reload()
    },
    delLike () {
      axios.delete(`http://49.50.162.193:5000/api/unlike/${this.id}/${this.$store.getters.user.email}`)
        .then(() => {
          Toast.open('좋아요를 취소했습니다.')
        })
        .catch((error) => {
          console.log(error.response)
        })
      location.reload()
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  padding: 1rem;
  .title {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
  }
  .date {
    color: #434343;
    margin-bottom: 0.5rem;
  }
}
.comment-input {
  margin: 0rem 1rem;
}
.comment-view-box {
  margin-bottom: 1rem;
}
.image-view {
  display: flex;
  justify-content: center;
  img {
    max-width: 500px;
    height: auto;
  }
}
</style>
