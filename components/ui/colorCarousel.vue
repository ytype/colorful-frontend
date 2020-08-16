<template>
  <b-carousel>
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="hero is-medium" :style="{backgroundColor: carousel.color}">
        <div class="hero-body has-text-centered">
          <h1 class="carousel-title">
            {{ carousel.text }}
          </h1>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>
<script lang="ts">
import Vue from 'vue'
import { Icarousel } from '@/models/carousel'
export default Vue.extend({
  name: 'ColorCarousel',
  props: ['data'],
  data () {
    return {
      carousels: [] as Icarousel[]
    }
  },
  watch: {
    data () {
      this.render()
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    render () {
      if (this.data) {
        this.data.forEach((color:string) => {
          const temp = {} as Icarousel
          temp.text = color
          temp.color = color
          this.carousels.push(temp)
        })
      }
    }
  }
})
</script>

<style lang="scss">
.carousel-title {
    color: white;
    font-size: 2rem;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
.carousel .carousel-indicator .indicator-item .indicator-style {
    border : 1px solid #FF9E6E;
}
.carousel .carousel-indicator .indicator-item.is-active .indicator-style, .carousel .carousel-indicator .indicator-item .indicator-style:hover{
    background: #FF9E6E;
}
.carousel-arrow .icon{
    color: #FF9E6E;
}
</style>
