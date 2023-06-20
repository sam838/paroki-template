<template>
  <DefaultComponentsArticleList :data-list="dataList" />
</template>

<script>
export default {
  data: () => ({
    dataList: []
  }),
  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/imavi-list', {
        type: 'articles'
      })
    }
    this.dataList = payload
  },
  methods: {
    strippedContent (string) {
      return this.$_bu.strippedContent(string)
    }
  }
}
</script>
