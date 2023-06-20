<template>
  <DefaultComponentsNewsList key="data" :data-list="list" />
</template>

<script>
export default {
  data: () => ({
    list: []
  }),
  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/imavi-list', {
        type: 'news'
      })
    }
    this.list = payload
  },
  methods: {
    strippedContent (string) {
      return this.$_bu.strippedContent(string)
    }
  }
}
</script>
