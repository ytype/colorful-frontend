<template>
  <div>
    <input v-model="user" required="true" placeholder="user">
    <input v-model="title" required="true" placeholder="title">
    <input v-model="content" required="true" placeholder="content">
    <input v-model="url" required="true" placeholder="url">

    <div class="spans">
      <span v-for="(find, index) in color" :key="index" :style="{ backgroundColor: find.value.hex }" class="dot" />
    </div>
    <div v-for="(find, index) in color" :key="index">
      <input :key="index" v-model="find.value.hex" class="input form-input" @click="selected = index">
      <chrome-picker v-if="index == selected" v-model="color[index].value" />
    </div>
    <button class="button" @click="addColor">
      add
    </button>
    <button class="button" @click="submit">
      submit
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Chrome } from 'vue-color'
import axios from 'axios'
export default Vue.extend({
  components: { 'chrome-picker': Chrome },
  data () {
    return {
      color: [] as any,
      user: '',
      title: '',
      content: '',
      url: '',
      selected: 0
    }
  },
  methods: {
    addColor () {
      this.color.push({ value: '' })
    },
    submit () {
      axios.post('http://127.0.0.1:5000/api/color', {
        color: this.color,
        user: this.user,
        title: this.title,
        content: this.content,
        url: this.url
      })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            alert('업로드 성공')
          }
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
        })
    }
  }
})
</script>
