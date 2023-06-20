<template>
  <section class="share-section text-center">
    <h2
      class="mt-16"
    >
      SHARE
    </h2>
    <div>
      <v-btn
        class="ma-5"
        icon
        large
        color="primary"
        :href="'https://www.facebook.com/sharer.php?u=' + domain + '/' + shareType + '/' + shareSlug"
        target="_blank"
      >
        <v-icon x-large>
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn
        class="ma-5"
        icon
        large
        color="primary"
        :href="'mailto:?subject=' + shareTitle + '&body=' + domain +'/' + shareType + '/' + shareSlug"
        target="_blank"
      >
        <v-icon x-large>
          mdi-email
        </v-icon>
      </v-btn>
      <v-btn
        class="ma-5"
        icon
        large
        color="primary"
        :href="'https://wa.me/?text=' + shareTitle + '%0A%0A'
          + domain + '/' + shareType + '/'
          + shareSlug"
        target="_blank"
      >
        <v-icon x-large>
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    shareTitle: String,
    shareType: String,
    shareSlug: String
  },
  data: () => ({
    domain: 'www.doctrina.imavi.org'
  })
}
</script>
