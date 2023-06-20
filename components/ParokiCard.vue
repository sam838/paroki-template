<template>
  <div class="card mt-8 mb-3" style="max-width: 18rem">
    <a class="text-dark" :href="'/stasi/' + item.slug">
      <div class="card-header text-center bg-info text-white">
        {{ item.title }}
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ item.ketua }}
        </h5>
        <div class="card-text">
          <ul>
            <li
              class="ml-2"
              v-for="data in item.ling"
              :key="data"
            >
              Lingkungan {{ data }}
            </li>
          </ul>
        </div>
      </div></a>
  </div>
</template>

<script>
export default {
  // static
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
  // api
  // props: {
  //   item: {
  //     type: Object,
  //     default () {
  //       return {}
  //     }
  //   }
  // },
  // data: () => ({
  //   defaultThumbnail: require('~/assets/images/default-card-thumbnail.svg')

  // })
}
</script>
