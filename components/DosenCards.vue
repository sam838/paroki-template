<template>
  <v-card
    :to="'/dosens/' + item.slug"
    outlined
    class="pa-3 rounded-xl"
  >
    <div class="d-flex">
      <div class="d-flex flex-column">
        <v-avatar
          size="80"
          rounded="true"
          class="avatar-border"
        >
          <v-img
            v-if="item.imageLink && item.imageLink !== ''"
            :src="item.imageLink"
            class="rounded-lg"
          />
          <v-img
            v-else
            :src="defaultImage"
          />
        </v-avatar>
      </div>
      <div class="d-flex flex-column ml-3">
        <span class="text-subtitle-1 mt-auto primary--text">
          {{ item.fullName }}
        </span>
        <p class="mb-0 text-caption mb-auto font-weight-normal">
          {{ item.excerpt? item.excerpt : 'Pengajar Centrum Ivan Merz' }}
        </p>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {

  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data: () => ({
    defaultImage: require('@/assets/img/general/logo.png')
  })
}
</script>
