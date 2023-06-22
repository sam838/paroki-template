<template>
  <div class="page-wrapper">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    const items = [{
      icon: 'mdi-home',
      title: 'Beranda',
      to: '/'
    },
    {
      icon: 'mdi-newspaper',
      title: 'Berita',
      to: '/news/list'
    }
    ]
    return {
      thisParoki: {},
      clipped: false,
      drawer: true,
      fixed: false,
      items,
      miniVariant: false,
      right: true,
      title: 'Paroki ' + process.env.parokiName
    }
  },
  async mounted () {
    if (!this.$store.state.thisParoki.detail.fetched) {
      try {
        const thisParoki = await this.$axios.$post(
          '/.netlify/functions/imavi-detail',
          {
            type: 'parokis',
            code: process.env.parokiId
          }
        )
        this.$store.commit('thisParoki/setParokis', thisParoki)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
