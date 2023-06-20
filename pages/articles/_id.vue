<template>
  <DefaultComponentsArticleDetails
    :page-data="pageData"
    type="articles"
  />
</template>
<script>
export default {
  data: () => ({
    type: 'articles',
    pageData: {},
    defaultThumbnail: require('@/assets/img/ngrambe.png')
  }),
  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/imavi-detail', {
        type: this.type,
        code: this.$nuxt.context.params.id
      })
    }
    this.pageData = payload
  }
}
</script>
