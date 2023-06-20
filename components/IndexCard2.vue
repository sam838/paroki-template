<template>
  <div class="d-flex flex-column  card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-hover ">
      <div
        v-if="item.url !== '' ">
        <img
          class="card-img-top d-flex mx-auto"
          :src="item.url"
          alt="Card image cap"
          style="max-width:200px"
        >
      </div>
      <div
        v-else >
        <img
          class="card-img-top d-flex mx-auto"
          :src="defaultThumbnail"
          alt="Card image cap"
          style="max-width:200px"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">
          {{ item.title }}
        </h5>
        <p class="card-text">
          {{ item.text }}
        </p>
      </div>

      <div class="d-flex justify-content-end">
        <v-btn
          :to="'/articles/' + item.slug"
          rounded
          small
          class="ma-5"
        >
          Baca lebih lanjut
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:
  {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data: () => ({
    defaultThumbnail: require('@/assets/img/ngrambe.png')
  })
}
</script>
