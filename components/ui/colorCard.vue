<template>
  <section class="column is-3">
    <div class="card">
      <div
        class="card-header"
        role="button"
      >
        <p class="card-header-title">
          <template v-if="!loading">
            {{ data.title }}
          </template>
          <b-skeleton size="is-large" :active="loading" />
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <template v-if="!loading">
            {{ data.content }}
            <div class="dot-box">
              <span v-for="(color,idx) in data.color" :key="idx" class="dot" :style="{ backgroundColor: color }" />
            </div>
          </template>
          <b-skeleton size="is-medium" :active="loading" :count="2" />
        </div>
        <div class="author">
          <template v-if="!loading">
            <p class="email">
              {{ data.user }}
            </p>
            <i class="far fa-thumbs-up" />
            {{ data.like.length }}
            <i class="fas fa-comment" />
            {{ data.comments.length }}
          </template>
          <b-skeleton size="is-medium" :active="loading" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ColorCard',
  props: ['data'],
  data () {
    return {
      loading: false
    }
  },
  mounted () {
  }
})
</script>

<style lang="scss" scoped>
.card-content {
  padding: 1rem;
}
.card-footer-item {
  border-right: none;
}
.content {
  margin-bottom: 0.5rem;
}
.dot-box {
  display: block;
  .dot {
    margin-top: 10px;
    margin-right: 5px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: inline-block;
  }
}

.email {
  display: inline;
}

</style>
