<template>
  <section class="column is-3">
    <a :href="url">
      <div class="card">
        <div class="card-header" role="button">
          <div class="card-header-title">
            <template v-if="!loading">
              <i class="fas fa-palette" style="margin-right:10px; margin-left:10px;" />
              <p>{{ data.title }}</p>
            </template>
            <b-skeleton size="is-large" :active="loading" />
          </div>
        </div>
        <div class="card-content" style="margin-top: 10px;">
          <template v-if="!loading">
            <div class="content">
              <p> {{ data.content }} </p>
            </div>
            <div class="dot-box">
              <span v-for="(color,idx) in data.color" :key="idx" class="dot" :style="{ backgroundColor: color }" />
            </div>
          </template>
          <b-skeleton size="is-medium" :active="loading" :count="2" />
          <div class="author">
            <template v-if="!loading">
              <p class="email">
                {{ data.user }}
              </p>
              <div class="info">
                <i class="far fa-thumbs-up" />
                {{ data.like.length }}
                <i class="fas fa-comment" style="margin-left: 5px;" />
                {{ data.comments.length }}
              </div>
            </template>
            <b-skeleton size="is-small" :active="loading" />
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ColorCard',
  props: ['data'],
  data () {
    return {
      loading: true,
      url: '#'
    }
  },
  watch: {
    data () {
      this.render()
    }
  },
  mounted () {
    this.data.like = []
    this.data.comments = []
    this.render()
  },
  methods: {
    render () {
      if (this.data.title) {
        this.loading = false
        this.url = `color/${this.data._id}`
      }
    }
  }
})
</script>

<style lang="scss" scoped>

.card {
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.card-header-title {
  font-weight: 600;
  font-size: 15px;
}
.card-content {
  padding-top: 0;
}
.card-header {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.card-footer-item {
  border-right: none;
}
.content {
  color: #434343;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  p {
    display: inline;
  }
}
.dot-box {
  height: 2rem;
  overflow: hidden;
  display: block;
  .dot {
    margin-top: 10px;
    margin-right: 5px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
  }
}
.email {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  display: inline;
  color: gray;
}
.is-small {
  margin-top: 10px;
}
.author {
  display: flex;
}
.info {
  display: inline;
  margin-left: auto;
}

</style>
