<template>
  <div>
    <AboutTwo />
    <section class="course-one__top-title home-one">
      <div class="container2">
        <div class="block-title mb-0">
          <h2 class="block-title__title">
            Artikel<br>
            Terkini
          </h2><!-- /.block-title__title -->
        </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve" /><!-- /.course-one__top-title__curve -->
    </section>

    <section class="news-section mt-16 container-2">
      <div class="d-flex flex-column mx-auto card-container py-5 mt-6">
        <div class="d-flex flex-column mx-auto card-container">
          <IndexMain
            v-for="(item, i) in newsMain"
            :key="i"
            :item="item"
          />
        </div>
        <div class="d-flex justify-space-between">
          <v-col
            v-for="(item, i) in newsContent"
            :key="i"
          >
            <IndexCard2
              :item="item"
              class="dflex mx-auto"
            />
          </v-col>
        </div>
      </div>
    </section>
  </div>
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
