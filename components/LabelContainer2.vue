<template>
  <div class="d-flex label-container mt-5 mx-auto w-80">
    <div class="d-flex label-inner flex-sm-shrink-0 ma-2">
      <span
        v-if="author && author !== ''"
        class="primary white--text font-italic px-3 py-1 caption"
      >
        {{ author }}
      </span>
    </div>
    <span
      v-if="date && date !== ''"
      class="ml-auto grey--text darken-2 align-self-center mr-5 caption"
    >
      {{ $moment(date).locale('id').format('DD MMMM YYYY') }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
    author: String
  }
}
</script>
