<template>
  <Home />
</template>
<script>
export default {

  data: () => ({
    newsContent: []
  }),
  async fetch () {
    // Bisa terjadi Silent Error jika tidak diberikan try and catch
    // dan jika terjadi silent error, maka variabel yang harusnya terisi jadi kosong
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post(
        '/.netlify/functions/featured',
        {
          type: 'articles'
        }
      )
    }
    this.newsContent = payload
    this.newsContent.forEach((element, index) => {
      this.newsContent[index].text = element.excerpt
      this.newsContent[index].url = element.imageLink
      if (!element.imageLink) {
        this.newsContent[index].url = require('@/assets/img/ngrambe.png')
      }
    })
  }
}
</script>
