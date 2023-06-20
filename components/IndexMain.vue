<template>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-hover">
      <img class="card-img-top d-flex mx-auto" :src="item.url" alt="Card image cap" style="max-width:300px">
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
  // api
  // props: {
  //   date: String,
  //   item: {
  //     type: Object,
  //     default () {
  //       return {}
  //     }
  //   }
  // }

  // static
  props:
  {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
  // data: () => ({
  //   defaultThumbnail: require('~/assets/images/default-card-thumbnail.svg')
  // })
  // methods: {
  //   convertDate (date) {
  //     date = new Date(date)
  //     const options = { year: 'numeric', month: 'long', day: 'numeric' }
  //     return date.toLocaleDateString('id-ID', options)
  //   }
  // }
}
</script>
