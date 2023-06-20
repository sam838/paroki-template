<template>
  <DefaultComponentsNewsDetails
    :page-data="pageData"
    type="news"
  />
</template>
<script>
export default {
  data: () => ({
    pageData: {},
    type: 'news',
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
