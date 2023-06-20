<template>
  <div class="main-container mx-auto article-detail py-5">
    <div class="d-flex">
      <h1 class="my-5 mx-auto">
        {{ pageData.title }}
      </h1>
    </div>
    <LabelContainer2 :author="pageData.author" :date="pageData.publishDate" />
    <section class="image-section">
      <v-img
        width="270"
        height="270"
        class="mx-auto news-image"
        :src="pageData.imageLink ? pageData.imageLink : defaultThumbnail"
      />
    </section>
    <section class="content-section mt-5">
      <div class="post-content mx-auto" v-html="pageData.content" />
    </section>
    <ShareSection
      :share-title="pageData.title"
      :share-type="type"
      :share-slug="$nuxt.context.params.id"
    />
  </div>

</template>
<script>
export default {
  data: () => ({
    pageData: {},
    type: 'articles',
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
