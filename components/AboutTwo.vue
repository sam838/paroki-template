<template>
  <div class="container-2">
    <section class="about-two">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-two__content">
            <div class="block-title text-left">
              <h2 class="block-title__title">
                Gereja Katolik<br>
                {{ thisParoki.name }}
              </h2><!-- /.block-title__title -->
            </div><!-- /.block-title -->
            <p class="about-two__text" v-html="thisParoki.description" /><!-- /.about-two__text -->
            <!-- <a href="#" class="thm-btn">Learn More</a>/.thm-btn -->
          </div><!-- /.about-two__content -->
        </div><!-- /.col-lg-6 -->
        <div class="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
          <div class="">
            <span class="about-two__image-dots" /><!-- /.about-two__image-dots -->
            <img :src="thisParoki.images[0]" alt="" style="max-width:500px">
          </div><!-- /.about-two__image -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </section>
  </div><!-- /.container -->
</template>
<script>
export default {
  props:
  {
    thisParoki: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>

</style>
