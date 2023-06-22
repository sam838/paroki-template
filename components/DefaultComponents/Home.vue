<template>
  <div>
    <AboutTwo :this-paroki="thisParoki" />
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
  props:
  {
    parokiName: {
      type: String,
      default: process.env.parokiName
    },
    newsContent: {
      type: Array,
      default () {
        return []
      }
    },
    newsMain: {
      type: Array,
      default () {
        return []
      }
    },
    thisParoki: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
