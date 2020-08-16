<template>
  <div>
    <FullHero />
    <h1 class="has-text-centered title">
      색상 스키마 등록
    </h1>
    <input v-model="title" required="true" placeholder="title" class="input">
    <input v-model="content" required="true" placeholder="content" class="input" style="width: 30rem;">
    <div v-for="(find, index) in color" :key="index">
      <input :key="index" v-model="find.value.hex" readonly class="input form-input" @click="selected = index">
      <chrome-picker v-if="index == selected" v-model="color[index].value" style="margin-left:1rem; margin-top:5px;" />
    </div>
    <b-button type="is-light" @click="addColor">
      add
    </b-button>

    <b-button type="is-light" @click="submit">
      submit
    </b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Chrome } from 'vue-color'
import axios from 'axios'
import { ToastProgrammatic as Toast } from 'buefy'
export default Vue.extend({
  components: { 'chrome-picker': Chrome },
  data () {
    return {
      color: [] as any[],
      title: '',
      content: '',
      selected: 0
    }
  },
  mounted () {
    this.addColor()
  },
  methods: {
    addColor () {
      this.color.push({ value: '' })
    },
    submit () {
      axios.post('http://127.0.0.1:5000/api/color', {
        color: this.color,
        title: this.title,
        content: this.content
      })
        .then((response) => {
          if (response.status === 200) {
            Toast.open('색상을 등록했습니다.')
            this.$router.push('/')
          } else {
            Toast.open('오류가 발생했습니다.')
          }
        })
        .catch((e) => {
          Toast.open('오류가 발생했습니다.')
          console.log(e)
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.form-input {
  border-radius: 0 !important;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #FF9E6E;
}
.title {
  margin-top:2rem;
}
.input {
  display: block;
  margin-left: 1rem;
  margin-rigth: 1rem;
  border-radius: 5px;
  width: 20rem;
  height: 33px;
  margin-right:5px;
  margin-bottom: 5px;
}
.input:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .select select:focus, .is-focused.input, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .select select.is-focused, .input:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .select select:active, .is-active.input, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .select select.is-active {
  border-color: #FF9E6E;
}
.is-light {
  margin: 1rem 0rem 1rem 1rem;
}
</style>
