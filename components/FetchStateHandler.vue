<template>
  <div>
    <div v-if="fetchState.pending" class="d-flex justify-center error-text">
      <div class="d-flex flex-column justify-center">
        <span class="text-h3 text-center">
          Sedang mengambil konten
        </span>
      </div>
    </div>
    <div v-else-if="fetchState.error" class="d-flex justify-center error-text">
      <div class="d-flex flex-column">
        <span class="text-h3 text-center">
          Telah terjadi kesalahan, silahkan coba lagi
        </span>
        <v-btn
          class="py-8 mx-auto mt-10 white--text"
          color="primary"
          elevation="0"
          @click="fetchFunction"
        >
          Muat Ulang
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fetchState: Object,
    fetchFunction: Function,
    fetchingMessage: {
      type: String,
      default () {
        return 'fetchingMessage'
      }
    },
    errorMessage: {
      type: String,
      default () {
        return 'errorMessage'
      }
    },
    reloadMessage: {
      type: String,
      default () {
        return 'reloadMessage'
      }
    }
  }
}
</script>
