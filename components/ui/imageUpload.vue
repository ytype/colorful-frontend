<template>
  <section class="main">
    <b-field>
      <b-upload
        v-model="dropFiles"
        drag-drop
        @input="setImage"
      >
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon
                icon="upload"
                size="is-large"
              />
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    {{ dropFiles.name }} upload
  </section>
</template>

<script>
import { ToastProgrammatic as Toast } from 'buefy'
export default ({
  data () {
    return {
      dropFiles: [],
      base64: ''
    }
  },
  watch: {
    base64 () {
      this.$emit('updateBase64', this.base64)
    }
  },
  methods: {
    setImage () {
      const file = this.dropFiles
      if (!file.type.includes('image/')) {
        Toast.open('이미지 파일을 업로드하세요.')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.imgSrc = event.target.result
          this.base64 = (this.imgSrc)
        }
        this.base64 = reader.readAsDataURL(file)
      } else {
        Toast.open('기기가 FileReader API를 지원하지 않습니다.')
      }
    },
    deleteDropFile (index) {
      this.dropFiles.splice(index, 1)
    }
  }
})
</script>

<style lang="scss" scoped>
.section {
    padding: 1rem 1.5rem;
}
.main {
    margin-left: 1rem;
    margin-bottom: 1rem;
}
</style>
