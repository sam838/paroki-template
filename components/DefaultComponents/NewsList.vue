<template>
  <div>
    <section class="inner-banner ">
      <div class="container-2">
        <h2 class="inner-banner__title">
          WARTA PAROKI {{ parokiName }}
        </h2>
        <!-- /.inner-banner__title -->
      </div>
      <!-- /.container -->
    </section>
    <section class="blog-one blog-page">
      <div class="container-2">
        <div class="row">
          <div
            v-for="(item,i) in dataList"
            :key="i"
            class="col-lg-4"
          >
            <NewsList
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
            v-for="(item, i) in newsContent"
            :key="i"
          >
            <News
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
  props:
  {
    parokiName: {
      type: String,
      default: process.env.parokiName
    },
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: () => ({
  }),
  methods: {
    strippedContent (string) {
      return this.$_bu.strippedContent(string)
    }
  }
}
</script>
