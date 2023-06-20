<template>
  <div>
    <section class="inner-banner ">
      <div class="container-2">
        <h2 class="inner-banner__title">
          ARTIKEL PAROKI KRISTUS RAJA NGRAMBE
        </h2>
        <!-- /.inner-banner__title -->
      </div>
      <!-- /.container -->
    </section>

    <section class="blog-one blog-page">
      <div class="container-2">
        <div class="row">
          <div
            class="col-lg-4"
            v-for="(item,i) in dataList"
            :key="i"
            >
            <PageList
              :item="item"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="blog-one blog-page mx-auto">
      <div class="d-flex flex-column mr-md-5 ml-md-5">
        <div class="d-flex justify-space-between">
          <v-col
            v-for="(item, i) in dataList"
            :key="i"
          >
            <IndexCard2
              :item="item"
              class="dflex mx-auto"
            />
          </v-col>
        </div>
      </div>
    </section> -->
  </div>
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
    console.log('this.dataList')
    console.log(this.dataList)
  },
  methods: {
    strippedContent (string) {
      return this.$_bu.strippedContent(string)
    }
  }
}
</script>
