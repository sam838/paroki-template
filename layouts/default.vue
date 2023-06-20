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
      clipped: false,
      drawer: true,
      fixed: false,
      items,
      miniVariant: false,
      right: true,
      title: 'Paroki Kristus Raja Ngrambe'
    }
  }
}
</script>
