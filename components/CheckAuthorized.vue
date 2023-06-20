<template>
  <div>
    <div v-if="isAllowed === 1">
      Mohon tunggu
    </div>
    <div v-if="isAllowed === 3">
      No Access
    </div>
  </div>
</template>
<script>
export default {

  props: {
    isAllowed: {
      type: Number,
      default () {
        return 1
      }
    }
  }
}
</script>
