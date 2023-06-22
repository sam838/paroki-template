<template>
  <DefaultComponentsArticleDetails
    :page-data="pageData"
    type="articles"
  />
</template>
<script>
export default {
  data: () => ({
    pageData: {},
    type: 'articles',
    defaultThumbnail: require('@/assets/img/logo.png')
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
