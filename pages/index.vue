<template>
  <DefaultComponentsHome :news-content="newsContent" :this-paroki="parokiDetail" />
</template>
<script>
export default {

  data: () => ({
    newsContent: [],
    parokiDetail: {}
  }),
  async fetch () {
    // Bisa terjadi Silent Error jika tidak diberikan try and catch
    // dan jika terjadi silent error, maka variabel yang harusnya terisi jadi kosong
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = {}
      payload.featuredNews = await this.$axios.$post(
        '/.netlify/functions/featured',
        {
          type: 'articles'
        }
      )
      payload.thisParoki = await this.$axios.$post(
        '/.netlify/functions/imavi-detail',
        {
          type: 'parokis',
          code: process.env.parokiId
        }
      )
    }
    this.newsContent = payload.featuredNews
    this.parokiDetail = payload.thisParoki
    this.newsContent.forEach((element, index) => {
      this.newsContent[index].text = element.excerpt
      this.newsContent[index].url = element.imageLink
      if (!element.imageLink) {
        this.newsContent[index].url = this.parokiDetail.logo
      }
    })
    // this.newsContent.forEach((element, index) => {
    //   this.newsContent[index].text = element.excerpt
    //   this.newsContent[index].url = element.imageLink
    //   if (!element.imageLink) {
    //     this.newsContent[index].url = require('@/assets/img/ngrambe.png')
    //   }
    // })
  }
}
</script>
